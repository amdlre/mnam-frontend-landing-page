import React, { useState } from 'react';
import { useForm } from '@formspree/react';

const ForOwners: React.FC = () => {
  const [state, handleFormspreeSubmit] = useForm("xjgjelzp");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    unitType: '',
    unitCount: ''
  });

  const unitTypes = ['شقق', 'فلل', 'محلات', 'مكاتب', 'أخرى'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleFormspreeSubmit(e);
  };

  return (
    <div className="py-16 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden" id="owners">
      {/* Abstract Art Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary rounded-full blur-[100px] md:blur-[150px] translate-x-1/3 -translate-y-1/3 animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500 rounded-full blur-[100px] md:blur-[150px] -translate-x-1/3 translate-y-1/3 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-purple-500 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Content */}
          <div className="lg:w-5/12 order-2 lg:order-1 text-white reveal lg:sticky lg:top-24 hidden lg:block">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-glass text-slate-200">
              للملاك والمستثمرين 🏢
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
              عقارك يستحق <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-indigo-400">إدارة محترفة.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed font-light max-w-xl">
              تخلص من صداع التأجير التقليدي. دعنا نتولى المهمة ونحول عقارك إلى أصل مدر للدخل بأقل مجهود منك.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10 md:gap-x-10">
              {[
                { title: "حماية للعقار", desc: "تأمين وصيانة دورية تحفظ قيمة أصلك.", icon: "🛡️" },
                { title: "عقود مرنة", desc: "حرية في اختيار فترات التشغيل.", icon: "📄" },
                { title: "دفعات منتظمة", desc: "تحويلات مالية شهرية منتظمة.", icon: "💸" },
                { title: "شفافية تامة", desc: "لا رسوم خفية، كل شيء واضح.", icon: "🔍" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-7/12 w-full order-1 lg:order-2 reveal delay-200">
            <div className="bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/20">
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">ابدأ شراكتك معنا</h3>
                  <p className="text-slate-500 text-sm font-medium">املأ البيانات لنقوم بتحليل عقارك وتقديم العرض الأنسب لك.</p>
                </div>

                {state.succeeded ? (
                  <div className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center animate-in fade-in zoom-in duration-500 py-24 flex flex-col items-center justify-center h-full min-h-[400px]">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-3xl animate-bounce">🎉</div>
                    <h4 className="text-2xl font-black text-green-900 mb-2">تم استلام طلبك!</h4>
                    <p className="text-green-700 font-medium">فريق علاقات الملاك سيتواصل معك قريباً.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-8">

                    {/* بيانات التواصل */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2 group">
                        <label className="text-xs font-bold text-slate-500 mr-1 group-focus-within:text-primary transition-colors">الاسم الكريم</label>
                        <input
                          required
                          type="text"
                          name="name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 outline-none font-medium placeholder:text-slate-300"
                          placeholder="الاسم الثلاثي"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-xs font-bold text-slate-500 mr-1 group-focus-within:text-primary transition-colors">رقم الجوال</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="05xxxxxxxx"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 outline-none text-left font-medium placeholder:text-slate-300"
                          dir="ltr"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-2 group">
                        <label className="text-xs font-bold text-slate-500 mr-1 group-focus-within:text-primary transition-colors">المدينة</label>
                        <input
                          required
                          type="text"
                          name="city"
                          placeholder="مثلاً: الرياض"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 outline-none font-medium placeholder:text-slate-300"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-xs font-bold text-slate-500 mr-1 group-focus-within:text-primary transition-colors">عدد الوحدات</label>
                        <input
                          required
                          type="number"
                          name="unitCount"
                          min="1"
                          placeholder="مثلاً: 1"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 outline-none font-medium placeholder:text-slate-300"
                          value={formData.unitCount}
                          onChange={(e) => setFormData({ ...formData, unitCount: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* تفاصيل العقار - اختيار تفاعلي */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 mr-1 block">نوع الوحدات</label>
                      <div className="flex flex-wrap gap-2">
                        {unitTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, unitType: type })}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${formData.unitType === type
                              ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                              }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="unitType" required value={formData.unitType} />
                    </div>



                    <button
                      type="submit"
                      disabled={state.submitting || !formData.unitType}
                      className="relative overflow-hidden w-full bg-primary hover:bg-violet-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-4 md:py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 mt-6 group"
                    >
                      {state.submitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></div>
                        </div>
                      ) : (
                        <>
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                          <span className="relative z-10">إرسال طلب الانضمام</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-2">بإرسال الطلب أنت توافق على سياسة الخصوصية</p>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ForOwners;