import React, { useEffect, useState } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen && !animate) return null;

  const content = {
    terms: {
      title: "شروط الانضمام لبرنامج شركاء منام",
      body: (
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl mb-6">
            <h4 className="font-bold text-amber-800 mb-2">ملاحظة هامة</h4>
            <p className="text-amber-700 text-sm">نحرص في منام على جودة الوحدات لضمان أعلى عائد للمالك وأفضل تجربة للضيف.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">1. ملكية العقار وموقعه</h4>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>يجب تقديم صك ملكية إلكتروني ساري المفعول أو وكالة شرعية رسمية لإدارة العقار.</li>
              <li>أن يقع العقار في المدن التي تغطيها خدماتنا حالياً (الرياض، جدة، الخبر).</li>
              <li>أن يكون العقار في حي مكتمل الخدمات (طرق معبدة، إنارة، مياه، صرف صحي).</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">2. جاهزية الوحدة</h4>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>أن تكون الوحدة بحالة إنشائية ممتازة وخالية من العيوب الظاهرة (تسريبات، شقوق، رطوبة).</li>
              <li>تركيب مكيفات سبليت أو مركزية بحالة ممتازة في جميع الغرف.</li>
              <li>توفر مطبخ مركب بالكامل.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">3. التأثيث والتجهيز (في حال الإدارة الشاملة)</h4>
            <p className="mb-2">للملاك الراغبين في باقة "التشغيل الكامل"، يجب الالتزام بمعايير "منام" للتأثيث، والتي تشمل:</p>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>استخدام مفروشات فندقية (مراتب سرير طبية، بياضات قطنية بيضاء).</li>
              <li>توفير شاشة ذكية (Smart TV) واتصال إنترنت فايبر عالي السرعة.</li>
              <li>توفير دخول ذكي (قفل ذكي) للباب الرئيسي.</li>
            </ul>
            <p className="text-xs text-slate-400 mt-2">* يمكن لفريق منام الإشراف على التأثيث مقابل رسوم إضافية.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">4. الرسوم والعوائد</h4>
            <ul className="list-disc list-inside space-y-1 mr-2">
              <li>نسبة الإدارة التشغيلية تتراوح بين 20% إلى 25% من إجمالي الدخل الشهري.</li>
              <li>يتم تحويل الأرباح للمالك في موعد أقصاه يوم 10 من كل شهر ميلادي.</li>
              <li>فترة التعاقد الأدنى هي سنة ميلادية واحدة قابلة للتجديد.</li>
            </ul>
          </div>
        </div>
      )
    },
    privacy: {
      title: "سياسة الخصوصية وحماية البيانات",
      body: (
        <div className="space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
          <p>نحترم في شركة منام خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقاً للأنظمة المعمول بها في المملكة العربية السعودية.</p>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-2">جمع البيانات</h4>
            <p>نقوم بجمع البيانات اللازمة فقط لتقديم خدماتنا، مثل الاسم، رقم الجوال، وبيانات العقار للملاك، أو بيانات الهوية للضيوف لغرض التسجيل في منصة "شموس" الأمنية.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">استخدام المعلومات</h4>
            <p>تستخدم المعلومات لـ: إدارة الحجوزات، تحسين تجربة المستخدم، التواصل بخصوص العروض أو التحديثات، والامتثال للمتطلبات القانونية.</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">مشاركة البيانات</h4>
            <p>لا نقوم ببيع بياناتك لأطراف ثالثة. نشارك البيانات فقط مع الجهات الحكومية عند الطلب الرسمي (مثل وزارة السياحة أو وزارة الداخلية).</p>
          </div>
        </div>
      )
    }
  };

  const selectedContent = type ? content[type] : { title: '', body: null };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh] transition-all duration-500 ${animate ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <h3 className="text-xl md:text-2xl font-black text-slate-900">{selectedContent.title}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          {selectedContent.body}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-white transition-colors"
          >
            إغلاق
          </button>
          {type === 'terms' && (
            <button 
              onClick={() => {
                onClose();
                document.getElementById('owners')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-primary transition-colors shadow-lg shadow-slate-900/10"
            >
              موافق، ابدأ التسجيل
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;