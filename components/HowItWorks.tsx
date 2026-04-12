import React from 'react';

interface HowItWorksProps {
  onOpenTerms: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTerms }) => {
  const steps = [
    {
      title: "تواصل معنا",
      desc: "بياناتك بسيطة، أرسلها لنا وخلال 24 ساعة نكون عندك للمعاينة والتقييم.",
      icon: "1",
    },
    {
      title: "نجهز عقارك",
      desc: "فريق التصميم والصيانة يقلب الوحدة 180 درجة لتناسب المعايير الفندقية العالمية.",
      icon: "2",
    },
    {
      title: "استلم أرباحك",
      desc: "نبدأ التأجير فوراً، وأنت تتابع الأرباح تنزل في حسابك نهاية كل شهر وأنت مرتاح.",
      icon: "3",
    },
  ];

  return (
    <div className="py-32 bg-white relative overflow-hidden" id="how">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24 reveal">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">العملية باختصار</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">سهلناها عليك</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            نظامنا مصمم عشان يشيل عنك الهم، مو يزيده. ثلاث خطوات تفصلك عن الراحة.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) with dashed effect */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-[2px] border-t-2 border-dashed border-slate-200 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group reveal" style={{ transitionDelay: `${i * 150}ms` }}>

                <div className={`w-24 h-24 rounded-[2rem] rotate-45 bg-white border-[3px] ${i === 1 ? 'border-primary shadow-xl shadow-primary/20' : 'border-slate-100 group-hover:border-primary/50'} flex items-center justify-center mb-10 transition-all duration-500 relative z-10 group-hover:-translate-y-2`}>
                  <div className="-rotate-45 text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">
                    {s.icon}
                  </div>
                  {i === 1 && <div className="absolute inset-0 rounded-[2rem] border-[3px] border-primary animate-ping opacity-20"></div>}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 leading-relaxed px-2 text-balance font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center reveal delay-300">
          <button
            onClick={onOpenTerms}
            className="text-sm font-bold text-slate-400 hover:text-primary underline decoration-2 underline-offset-8 transition-colors outline-none hover:decoration-primary"
          >
            قراءة شروط الانضمام بالتفصيل
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;