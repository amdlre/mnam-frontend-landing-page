
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeGuestIndex, setActiveGuestIndex] = useState<number | null>(null);
  const [activeOwnerIndex, setActiveOwnerIndex] = useState<number | null>(null);

  const guestFaqs = [
    {
      question: "وش هي 'منام' بالضبط؟",
      answer: "منام هي شركة سعودية متخصصة في إدارة وتشغيل الوحدات السكنية وتحويلها إلى شقق فندقية فاخرة. نوفر لك تجربة سكن فندقية بخصوصية تامة."
    },
    {
      question: "هل الشقق مرخصة من وزارة السياحة؟",
      answer: "أكيد، كل وحداتنا تلتزم بمعايير واشتراطات وزارة السياحة السعودية، ونحرص على توفير أعلى درجات الأمان والنظام لضيوفنا."
    },
    {
      question: "كيف أقدر أمدد إقامتي أو ألغي الحجز؟",
      answer: "بكل بساطة تقدر تتواصل مع فريق الدعم المباشر حقنا عبر الواتساب، أو من خلال المنصة اللي حجزت منها. حنا مرنين جداً ونقدر ظروف ضيوفنا."
    },
    {
      question: "هل تتوفر خدمة النظافة خلال الإقامة؟",
      answer: "نعم، نوفر خدمات نظافة دورية فندقية لضمان بقاء وحدتك في أفضل حال طوال فترة إقامتك معنا."
    }
  ];

  const ownerFaqs = [
    {
      question: "كمالك، كيف أضمن حقي وعقاري؟",
      answer: "نوقع معك عقود رسمية موثقة تضمن لك الصيانة الدورية، ونظافة الوحدة المستمرة. إحنا نهتم بعقارك كأنه ملكنا لأن نجاحنا من نجاحك."
    },
    {
      question: "وش اللي يميزكم عن المكاتب التقليدية؟",
      answer: "الفرق هو 'التشغيل الفندقي'. حنا نهتم بالتسويق العالمي، النظافة اليومية، الاستقبال، وتوفير تجربة متكاملة ترفع من قيمة عقارك ودخلك."
    },
    {
      question: "كيف أتابع أداء وحدتي وأرباحي؟",
      answer: "نوفر لك تقارير دورية شفافة توضح نسبة الإشغال، العوائد المالية، وحالة الصيانة، كل شيء واضح وقدام عينك."
    },
    {
      question: "وش المتطلبات عشان تشغلون وحدتي؟",
      answer: "ببساطة تكون الوحدة في موقع حيوي وبحالة جيدة. فريقنا بيعاين المكان ويقترح عليك خطة التجهيز والفرش الفندقي المناسبة."
    }
  ];

  const toggleGuestFAQ = (index: number) => {
    setActiveGuestIndex(activeGuestIndex === index ? null : index);
  };

  const toggleOwnerFAQ = (index: number) => {
    setActiveOwnerIndex(activeOwnerIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/966538721499', '_blank');
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50/30" id="faq">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4 uppercase tracking-[0.2em]">
            عندك استفسار؟
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">الأسئلة الشائعة</h2>
          <p className="text-slate-500 text-sm md:text-base">كل اللي ودك تعرفه عن منام حسب اهتمامك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* قسم الضيوف */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
              <span className="text-2xl">✨</span>
              <h3 className="text-2xl font-bold text-slate-800">أسئلة الضيوف</h3>
            </div>
            <div className="space-y-4">
              {guestFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${activeGuestIndex === index ? 'border-primary shadow-lg shadow-primary/5' : 'border-slate-100'}`}
                >
                  <button
                    onClick={() => toggleGuestFAQ(index)}
                    className="w-full px-6 py-5 text-right flex justify-between items-center gap-4"
                  >
                    <span className={`text-base font-bold transition-colors ${activeGuestIndex === index ? 'text-primary' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${activeGuestIndex === index ? 'bg-primary text-white border-primary rotate-180' : 'border-slate-200 text-slate-400'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeGuestIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* قسم الملاك */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
              <span className="text-2xl">🏢</span>
              <h3 className="text-2xl font-bold text-slate-800">أسئلة الملاك</h3>
            </div>
            <div className="space-y-4">
              {ownerFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${activeOwnerIndex === index ? 'border-primary shadow-lg shadow-primary/5' : 'border-slate-100'}`}
                >
                  <button
                    onClick={() => toggleOwnerFAQ(index)}
                    className="w-full px-6 py-5 text-right flex justify-between items-center gap-4"
                  >
                    <span className={`text-base font-bold transition-colors ${activeOwnerIndex === index ? 'text-primary' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${activeOwnerIndex === index ? 'bg-primary text-white border-primary rotate-180' : 'border-slate-200 text-slate-400'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeOwnerIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">ما لقيت جوابك؟</p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-white border-2 border-primary/20 text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm group"
          >
            <span>تواصل معنا مباشرة عبر الواتساب</span>
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
