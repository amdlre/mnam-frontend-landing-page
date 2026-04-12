import React, { useRef, useState } from 'react';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    
    // Only apply tilt on larger screens to avoid issues with touch scrolling
    if (window.innerWidth < 1024) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Sensitivity
    const y = (e.clientY - top - height / 2) / 25;
    
    setRotate({ x: y, y: -x }); // Invert for natural tilt
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-40 overflow-hidden min-h-[95vh] flex items-center">
      {/* Background Elements - Organic Feel */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/4 -z-10 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-fuchsia-500/10 rounded-full blur-[60px] md:blur-[100px] translate-y-1/3 -translate-x-1/4 -z-10 animate-float-reverse"></div>
      
      {/* Subtle radial gradient center */}
      <div className="absolute inset-0 bg-gradient-radial from-white/80 via-transparent to-transparent opacity-60 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-right relative z-20">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full shadow-sm mb-8 hover:shadow-md transition-all cursor-default group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary group-hover:bg-indigo-600 transition-colors"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-wide group-hover:text-primary transition-colors">مفهوم جديد للاستثمار العقاري</span>
            </div>
            
            <h1 className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.15] md:leading-[1.1] mb-8 tracking-tighter text-balance delay-100 drop-shadow-sm">
              استثمر بذكاء، <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-600 animate-gradient pb-2">واسكن بفخامة.</span>
            </h1>
            
            <p className="reveal text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-normal text-balance delay-200">
              نحول وحدتك السكنية إلى وجهة فندقية بمعايير عالمية. إدارة متكاملة تضمن راحة بالك وتعظيم عوائدك، وتجربة إقامة لا تُنسى لضيوفنا.
            </p>
            
            <div className="reveal flex flex-col sm:flex-row gap-4 items-center mb-16 delay-300 w-full sm:w-auto">
              <button 
                onClick={() => scrollToSection('owners')}
                className="relative overflow-hidden w-full sm:w-auto bg-slate-900 text-white text-base px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-slate-900/30 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group ring-4 ring-transparent hover:ring-slate-900/10"
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
                
                <span className="relative z-10 flex items-center gap-3">
                  <span>ابدأ رحلة الاستثمار</span>
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('guests')}
                className="w-full sm:w-auto bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 text-base px-10 py-5 rounded-2xl font-bold hover:bg-white hover:border-primary/30 hover:text-primary hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <span>حجز إقامة</span>
              </button>
            </div>
            
            <div className="reveal grid grid-cols-3 gap-6 border-t border-slate-200/60 pt-8 max-w-lg delay-500">
               <div className="group cursor-default hover-target">
                  <p className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-tight">+250</p>
                  <p className="text-xs font-bold text-slate-500 mt-1 group-hover:text-slate-700">وحدة سكنية</p>
               </div>
               <div className="group cursor-default hover-target">
                  <p className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-tight">98%</p>
                  <p className="text-xs font-bold text-slate-500 mt-1 group-hover:text-slate-700">رضا العملاء</p>
               </div>
               <div className="group cursor-default hover-target">
                  <p className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-tight">24/7</p>
                  <p className="text-xs font-bold text-slate-500 mt-1 group-hover:text-slate-700">دعم متواصل</p>
               </div>
            </div>
          </div>

          {/* Visual Content - 3D Tilt Effect */}
          <div className="lg:w-1/2 w-full relative perspective-1000 delay-300 reveal z-10 mt-12 lg:mt-0" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div 
              ref={imageRef}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border-[8px] border-white/80 h-[450px] md:h-[650px] w-full group transition-transform duration-200 ease-out bg-slate-100"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1400" 
                alt="Manam Luxury Interior" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80"></div>
              
              {/* Floating Review Card - Improved Glassmorphism */}
              <div 
                className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-10 md:right-10 glass-card p-6 rounded-3xl animate-in slide-in-from-bottom-8 duration-1000 delay-300"
                style={{ transform: `translateZ(60px)` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex -space-x-3 space-x-reverse">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">+2k</div>
                  </div>
                  <div className="flex text-amber-400 text-lg drop-shadow-sm">★★★★★</div>
                </div>
                <p className="text-slate-800 font-bold text-sm leading-relaxed">"تجربة استثنائية بكل المقاييس. الاهتمام بالتفاصيل مذهل!"</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-dots-pattern opacity-30 hidden md:block animate-pulse-slow"></div>
            
            {/* Stats Card */}
            <div className="absolute top-[40%] -right-8 md:-right-14 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-xl z-20 animate-float-slow hidden md:block border border-white/50 hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100/50 flex items-center justify-center text-3xl shadow-inner text-emerald-600">
                  📈
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">متوسط العائد السنوي</p>
                  <p className="text-2xl font-black text-slate-900">18% - 22%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;