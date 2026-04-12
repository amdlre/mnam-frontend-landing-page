import React, { useState } from 'react';

interface FooterProps {
  onNavigateHome?: () => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome, onOpenLegal }) => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    {
      name: 'X',
      url: 'https://x.com/usemnam_sa?s=21&t=vsNdddaxOVuiiS7ScKx__w',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      color: 'hover:bg-slate-800',
      hoverColor: '#1DA1F2'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/usemnam_sa/',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400',
      hoverColor: '#E4405F'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@usemnam_sa',
      path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z',
      color: 'hover:bg-slate-900',
      hoverColor: '#00f2ea'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/mnam-sa/',
      path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      color: 'hover:bg-[#0077B5]',
      hoverColor: '#0077B5'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/966538721499',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
      color: 'hover:bg-[#25D366]',
      hoverColor: '#25D366'
    }
  ];

  const quickLinks = [
    { label: 'عن منام', id: 'why' },
    { label: 'كيف نعمل', id: 'how' },
    { label: 'للملاك', id: 'owners' },
    { label: 'للضيوف', id: 'guests' },
    { label: 'الأسئلة الشائعة', id: 'faq' },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* خلفية متدرجة مع نمط */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative z-10">
        {/* القسم العلوي - CTA */}
        <div className="border-b border-white/5">
          <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
            <div className="bg-gradient-to-br from-primary/20 via-violet-600/10 to-indigo-600/20 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-center lg:text-right">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-4">
                    جاهز تبدأ رحلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-indigo-400">النجاح</span>؟
                  </h3>
                  <p className="text-slate-300 text-sm md:text-lg max-w-xl">
                    انضم لأكثر من 250+ مالك عقار يحققون عوائد استثنائية مع منام
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => scrollToSection('owners')}
                    className="group/btn relative px-6 md:px-8 py-3.5 md:py-4 bg-white text-slate-900 rounded-xl md:rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>سجّل عقارك الآن</span>
                      <svg className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>

                  <a
                    href="https://wa.me/966538721499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 group/wa"
                  >
                    <svg className="w-5 h-5 group-hover/wa:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>تواصل معنا</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-8 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">

            {/* الشعار والوصف */}
            <div className="lg:col-span-4">
              <div
                className="inline-block mb-8 cursor-pointer group"
                onClick={handleLogoClick}
              >
                <div className="w-20 h-20 bg-transparent rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img src="/mnam-logo.png" alt="Manam Logo" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-lg max-w-sm">
                الريادة السعودية في إدارة وتشغيل الوحدات الفندقية. نسخر التقنية والخبرة لنصنع تجربة سكنية استثنائية.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                    style={{
                      boxShadow: hoveredSocial === social.name ? `0 10px 40px ${social.hoverColor}40` : 'none'
                    }}
                  >
                    <svg className="w-5 h-5 fill-current transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* الروابط السريعة */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-base md:text-lg mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-6 md:w-8 h-[2px] bg-gradient-to-r from-primary to-violet-500 rounded-full"></span>
                روابط سريعة
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* معلومات التواصل */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-base md:text-lg mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-6 md:w-8 h-[2px] bg-gradient-to-r from-primary to-violet-500 rounded-full"></span>
                تواصل معنا
              </h4>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm leading-relaxed">
                      الرياض، حي الملقا<br />طريق الملك سلمان
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@usemanam.com" className="text-slate-400 group-hover:text-primary transition-colors text-sm">
                    info@usemanam.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+966538721499" className="text-slate-400 group-hover:text-primary transition-colors text-sm" dir="ltr">
                    +966 53 872 1499
                  </a>
                </li>
              </ul>
            </div>

            {/* النشرة البريدية */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-violet-500 rounded-full"></span>
                النشرة البريدية
              </h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                اشترك للحصول على آخر الأخبار والعروض الحصرية
              </p>

              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pr-4 pl-14 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/80 transition-colors group/sub"
                >
                  {isSubscribed ? (
                    <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 group-hover/sub:-translate-x-0.5 transition-transform rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>

              {isSubscribed && (
                <p className="text-green-400 text-xs mt-3 animate-pulse">✓ تم الاشتراك بنجاح!</p>
              )}
            </div>
          </div>

          {/* الفاصل */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          {/* الحقوق والروابط القانونية */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p>© {new Date().getFullYear()} شركة منام لإدارة الوحدات السكنية. جميع الحقوق محفوظة.</p>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="relative hover:text-white transition-colors group"
              >
                سياسة الخصوصية
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/50 group-hover:w-full transition-all duration-300"></span>
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => onOpenLegal('terms')}
                className="relative hover:text-white transition-colors group"
              >
                الشروط والأحكام
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/50 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={handleLogoClick}
          className="fixed bottom-24 left-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 z-50 group"
          aria-label="العودة للأعلى"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;