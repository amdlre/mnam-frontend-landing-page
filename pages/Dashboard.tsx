
import React from 'react';

interface DashboardProps {
  userRole: 'owner' | 'staff';
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-arabic" dir="rtl">
      {/* سياق الداشبورد المبسط */}
      <nav className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-[#BB86FC] font-black italic">m</div>
          <span className="font-bold text-slate-900 text-xl">لوحة تحكم منام</span>
          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-wider mr-2">
            {userRole === 'owner' ? 'بوابة الملاك' : 'نظام الموظفين'}
          </span>
        </div>
        <button 
          onClick={onLogout}
          className="text-slate-400 hover:text-red-500 font-bold text-sm transition-colors flex items-center gap-2"
        >
          <span>تسجيل خروج</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
        </button>
      </nav>

      <div className="p-8 md:p-12 flex-1">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-black text-slate-900 mb-2">أهلاً بك في نظام الإدارة الذكي</h1>
            <p className="text-slate-500">هنا تظهر بيانات عقاراتك وأداء التشغيل الفندقي لليوم.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* بطاقات إحصائية وهمية */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-4">صافي الأرباح</p>
              <h3 className="text-4xl font-black text-slate-900">12,450 <span className="text-sm font-normal text-slate-400">ر.س</span></h3>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-4">نسبة الإشغال</p>
              <h3 className="text-4xl font-black text-primary">94%</h3>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-slate-400 text-xs font-bold uppercase mb-4">الوحدات النشطة</p>
              <h3 className="text-4xl font-black text-slate-900">12</h3>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden h-96 flex items-center justify-center">
             <div className="text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">📊</div>
                <h4 className="font-bold text-slate-900 mb-2">الرسوم البيانية قيد المعالجة</h4>
                <p className="text-slate-400 max-w-xs mx-auto">نقوم حالياً بجلب أحدث البيانات من منصات الحجز (Booking, Gathern, Airbnb).</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
