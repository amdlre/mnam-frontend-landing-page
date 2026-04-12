import React from 'react';

const ForGuests: React.FC = () => {
  const features = [
    { title: "نظافة 5 نجوم", desc: "تعقيم شامل بعد كل ضيف ومواد نظافة عالية الجودة." },
    { title: "دخول ذكي", desc: "وصول فوري للوحدة عبر كود خاص بدون انتظار." },
    { title: "مواقع مميزة", desc: "وحداتنا مختارة بعناية في أرقى أحياء الرياض وجدة." },
  ];

  const unitImages = [
    { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600", alt: "صالة معيشة مودرن", span: "row-span-2" },
    { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600", alt: "حمام فاخر", span: "row-span-1" },
    { url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=600", alt: "غرفة نوم ماستر", span: "row-span-1" },
  ];

  const handleBrowseUnits = () => {
    // Open Booking domain
    window.open('https://booking.usemnam.com', '_blank');
  };

  return (
    <div className="py-16 md:py-24 bg-white" id="guests">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-5/12 w-full">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">للضيوف والزوار</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              لا ترضى بأقل من <br />
              <span className="text-primary">الراحة المطلقة.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed">
              سواء كانت زيارتك للعمل أو الترفيه، وحداتنا مصممة لتعطيك إحساس البيت مع رفاهية الفندق. انترنت سريع، قهوة مختصة، وراحة بال.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleBrowseUnits}
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group"
            >
              <span>تصفح الوحدات المتاحة</span>
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Grid Layout Images */}
          <div className="lg:w-7/12 w-full h-[400px] lg:h-[500px]">
             <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-full">
                {unitImages.map((img, idx) => (
                  <div key={idx} className={`relative rounded-2xl md:rounded-3xl overflow-hidden group ${img.span}`}>
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 hidden md:block">
                        <p className="font-bold text-lg">{img.alt}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForGuests;