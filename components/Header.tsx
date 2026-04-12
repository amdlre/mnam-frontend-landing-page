import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  activeSection?: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'why', label: 'عن منام' },
    { id: 'how', label: 'آلية العمل' },
    { id: 'owners', label: 'للملاك' },
    { id: 'guests', label: 'للضيوف' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
        ? 'bg-white/90 backdrop-blur-xl border-slate-200/50 py-3 shadow-sm'
        : 'bg-transparent border-transparent py-4 md:py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-slate-900 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group order-2 md:order-1 mx-auto md:mx-0 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/mnam-logo.png"
            alt="Manam Logo"
            className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-sm order-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeSection === item.id
                ? 'bg-slate-900 text-white shadow-md'
                : 'text-slate-600 hover:text-primary hover:bg-white'
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 order-3 md:order-3 z-50">
          <button
            onClick={() => scrollToSection('footer')}
            className="hidden sm:flex text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors px-3"
          >
            تواصل معنا
          </button>

          <button
            onClick={() => scrollToSection('owners')}
            className="flex px-4 md:px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-primary transition-colors duration-300 shadow-lg shadow-slate-900/20 items-center gap-2 group whitespace-nowrap"
          >
            <span>انضم كشريك</span>
            <svg className="hidden md:block w-4 h-4 rtl:rotate-180 group-hover:translate-x-[-2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
      >
        <div className="flex flex-col px-6 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-right py-3 text-sm font-bold border-b border-slate-50 last:border-0 ${activeSection === item.id ? 'text-primary' : 'text-slate-800 hover:text-primary'
                }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('footer')}
            className="w-full text-right py-3 text-sm font-bold text-slate-500 hover:text-primary pt-4"
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;