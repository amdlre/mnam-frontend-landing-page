import React, { useRef, useState } from 'react';

interface Feature {
  title: string;
  desc: string;
  icon: string;
  color: string;
  bg: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`reveal relative group p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 hover:border-slate-200 ${index === 0 || index === 3 || index === 4 ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.08), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col items-start">
        <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-transparent group-hover:border-black/5`}>
          {feature.icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight">
          {feature.title}
        </h3>
        <p className="text-slate-500 leading-relaxed font-normal text-base md:text-lg mt-auto text-balance">
          {feature.desc}
        </p>
      </div>

      {/* Decorative Blob */}
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-slate-50 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};

const WhyUs: React.FC = () => {
  const features: Feature[] = [
    {
      title: "إدارة شاملة 360°",
      desc: "من الاستلام للتسليم، ندير كل تفصيل: النظافة، الصيانة، والاستقبال. ريح بالك واترك لنا القيادة الكاملة.",
      icon: "⚡",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "تسويق رقمي ذكي",
      desc: "ظهور في Booking, Airbnb, Gathern بأفضل الصور والوصف لضمان أعلى نسبة إشغال.",
      icon: "🎯",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "عائد استثماري أعلى",
      desc: "خوارزميات تسعير ديناميكية لتعظيم الأرباح.",
      icon: "📈",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "تقارير فورية وشفافة",
      desc: "لوحة تحكم للملاك تعطيك كل ريال وين راح ووين جاء. تتبع أداء عقارك لحظة بلحظة وبكل شفافية.",
      icon: "📱",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "تشغيل سعودي 100%",
      desc: "فريقنا سعودي بالكامل، نفهم ثقافتنا وعاداتنا، ونعرف كيف نرحب بالضيف ونكرمه بضيافة أصيلة تعكس هويتنا وتزيد من رضا النزلاء.",
      icon: "🇸🇦",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "ضيافة فاخرة",
      desc: "مواد نظافة ومستلزمات 5 نجوم لراحة ضيوفك.",
      icon: "✨",
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section className="py-32 bg-surface relative" id="why">
      {/* Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl reveal">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">لماذا تختار منام؟</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              نحول العقار الجامد، <br />
              <span className="text-slate-400">إلى تجربة حية ومربحة.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed text-lg reveal delay-100 font-light">
            نجمع بين التكنولوجيا والضيافة الأصيلة لنقدم حلاً يريح المالك ويسعد الضيف.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;