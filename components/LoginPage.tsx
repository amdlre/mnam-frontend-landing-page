import React, { useState } from 'react';

interface LoginPageProps {
  type: 'owner' | 'staff';
  onBack: () => void;
  onJoinRequest: () => void;
  onSuccess?: (role: 'owner' | 'staff') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ type, onBack, onJoinRequest, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // محاكاة عملية التحقق من البيانات
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) {
        onSuccess(type);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col md:flex-row overflow-hidden font-arabic" dir="rtl">
      
      {/* الجانب الأيمن: المحتوى البصري */}
      <div className="hidden md:flex md:w-1/2 relative bg-slate-900 overflow-hidden">
        <img 
          src={type === 'owner' 
            ? "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200" 
            : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
          }
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110 hover:scale-100 transition-transform duration-[10s]"
          alt="Login background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="relative z-10 p-20 flex flex-col justify-end h-full text-white text-right">
          <div className="mb-8 w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl mr-auto ml-0 md:ml-auto md:mr-0 p-3">
             <img src="https://i.postimg.cc/T11q84GM/mnam-Logo.png" alt="Manam Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-5xl font-black leading-tight mb-6">
            {type === 'owner' ? 'شريكنا في النجاح..' : 'فريقنا المبدع..'}
            <br />
            <span className="text-[#BB86FC]">أهلاً بعودتك</span>
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-lg">
            {type === 'owner' 
              ? 'تابع أداء عقاراتك، نمو أرباحك، وتقارير الصيانة لحظة بلحظة من خلال لوحة تحكم منام الذكية.' 
              : 'أدواتك المفضلة لإدارة التشغيل الفندقي وخدمة الضيوف بأعلى المعايير أصبحت في متناول يدك.'}
          </p>
        </div>
      </div>

      {/* الجانب الأيسر: نموذج الدخول */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-20 relative">
        <button 
          onClick={onBack}
          className="absolute top-8 right-8 text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
        >
          <span className="font-bold text-sm">العودة للرئيسية</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div className="w-full max-w-md">
          <div className="mb-12 text-center md:text-right">
            <h1 className="text-3xl font-black text-slate-900 mb-4">تسجيل الدخول</h1>
            <p className="text-slate-500">أدخل بياناتك للوصول إلى حسابك في منام</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mr-1">البريد الإلكتروني</label>
              <input 
                required
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mr-1">كلمة المرور</label>
                <button type="button" className="text-xs font-bold text-primary hover:underline">نسيت كلمة المرور؟</button>
              </div>
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              disabled={isLoading}
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'دخول للمنصة'
              )}
            </button>
          </form>

          {type === 'owner' && (
            <div className="mt-10 pt-10 border-t border-slate-100 text-center">
              <p className="text-slate-500 mb-4 text-sm">ليس لديك عقار مسجل معنا بعد؟</p>
              <button 
                onClick={onJoinRequest}
                className="text-primary font-black hover:underline"
              >
                قدم طلب انضمام كشريك الآن
              </button>
            </div>
          )}
        </div>

        <p className="mt-20 text-slate-300 text-[10px] font-bold uppercase tracking-[0.3em]">نظام منام السحابي الآمن</p>
      </div>
    </div>
  );
};

export default LoginPage;