import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ForGuests from '../components/ForGuests';
import ForOwners from '../components/ForOwners';
import HowItWorks from '../components/HowItWorks';
import WhyUs from '../components/WhyUs';
import TrustStats from '../components/TrustStats';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import GeminiAssistant from '../components/GeminiAssistant';
import LegalModal from '../components/LegalModal';

const LandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Reveal Animation Observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach((el) => revealObserver.observe(el));

    // Active Section Observer for Navigation
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px' // Trigger when section is in the middle of the viewport
    });

    const sections = document.querySelectorAll('#why, #how, #owners, #guests');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealedElements.forEach((el) => revealObserver.unobserve(el));
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="relative min-h-screen font-arabic">
      <Header isScrolled={isScrolled} activeSection={activeSection} />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks onOpenTerms={() => setLegalModalType('terms')} />
        <ForOwners />
        <ForGuests />
        <TrustStats />
        <FAQ />
      </main>
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />
      <GeminiAssistant />
      <LegalModal 
        isOpen={!!legalModalType} 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
};

export default LandingPage;