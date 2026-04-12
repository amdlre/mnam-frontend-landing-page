import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const parseValue = (val: string) => parseFloat(val.replace(/,/g, '').replace(/\+/g, '').replace(/M/g, '').replace(/K/g, ''));
    const target = parseValue(end.toString());

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const percentage = progress / duration;
        const ease = 1 - Math.pow(1 - percentage, 4); // Ease out quart

        setCount(Math.floor(target * ease));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return (
    <span ref={countRef}>
      {hasStarted ? (
        <>
          {end.toString().includes('+') ? '+' : ''}
          {count.toLocaleString()}
          {end.toString().includes('M') ? 'M' : end.toString().includes('K') ? 'K' : ''}
          {suffix}
        </>
      ) : (
        "0"
      )}
    </span>
  );
};

const TrustStats: React.FC = () => {
  const stats = [
    { value: "+4M", label: "أرباح موزعة", sub: "على شركاء النجاح" },
    { value: "4.8", label: "تقييم عام", sub: "من 5 نجوم" },
    { value: "+15K", label: "ليلة محجوزة", sub: "في العام الماضي" },
    { value: "+250", label: "وحدة عقارية", sub: "تحت إدارتنا" },
  ];

  const partners = [
    { name: "Ministry of Tourism", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ministry_of_Tourism_of_Saudi_Arabia_Logo.svg/512px-Ministry_of_Tourism_of_Saudi_Arabia_Logo.svg.png" },
    { name: "Gathern", logo: "https://i.postimg.cc/c4f0R57w/Gathern-Logo.png" },
    { name: "Booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/512px-Booking.com_logo.svg.png" },
    { name: "Airbnb", logo: "https://i.postimg.cc/jqQ7Mv4f/Airbnb-Logo.png" },
    { name: "Ministry of Tourism", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ministry_of_Tourism_of_Saudi_Arabia_Logo.svg/512px-Ministry_of_Tourism_of_Saudi_Arabia_Logo.svg.png" },
    { name: "Gathern", logo: "https://i.postimg.cc/c4f0R57w/Gathern-Logo.png" },
    { name: "Booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/512px-Booking.com_logo.svg.png" },
    { name: "Airbnb", logo: "https://i.postimg.cc/jqQ7Mv4f/Airbnb-Logo.png" }
  ];

  return (
    <div className="py-24 bg-surface border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 divide-x divide-x-reverse divide-slate-200/60">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 reveal delay-100">
              <span className="text-5xl md:text-6xl font-black text-slate-900 mb-2 block tracking-tight font-sans">
                <AnimatedCounter end={stat.value} />
              </span>
              <span className="text-slate-900 font-bold block text-lg">
                {stat.label}
              </span>
              <span className="text-slate-400 text-sm block mt-1">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Infinite Marquee Partners */}
        <div className="text-center reveal delay-300">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-16">
            <span className="bg-gradient-to-l from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent text-sm font-black animate-pulse">شركاء النجاح</span>
            <span className="mx-2">•</span>
            والمنصات المعتمدة
          </p>

          <div className="relative w-full overflow-hidden mask-linear-fade">
            <div className="flex gap-24 w-max animate-marquee items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* We duplicate the partners list in the array definition to simulate infinite loop, or render twice here */}
              {[...partners, ...partners].map((partner, idx) => {
                const isBig = partner.name === 'Gathern' || partner.name === 'Airbnb';
                return (
                  <div key={idx} className={`flex items-center justify-center min-w-[180px] ${isBig ? 'h-32' : 'h-16'}`}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`h-full w-auto object-contain hover:scale-110 transition-transform duration-300 ${isBig ? 'max-w-[280px]' : 'max-w-[160px]'}`}
                      onError={(e) => {
                        (e.target as any).style.display = 'none';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStats;