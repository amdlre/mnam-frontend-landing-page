import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: 'يا هلا! حياك في منام 👋\nأنا هنا عشان أجاوبك على أي شي يخص إدارة عقارك أو حجز إقامتك معنا.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "كيف أضيف عقاري عندكم؟",
    "كم نسبتكم من الأرباح؟",
    "أبي أحجز شقة في الرياض",
    "هل تأثثون الشقة؟"
  ];

  // قاعدة المعرفة الخاصة بنظام RAG المبسط
  const KNOWLEDGE_BASE = `
  معلومات شركة "منام" (Manam):
  1. **من نحن**: شركة سعودية متخصصة في إدارة وتشغيل الوحدات السكنية وتحويلها إلى نزل فندقية فاخرة. نحن لسنا مكتب عقار تقليدي، نحن شركة تشغيل فندقي.
  
  2. **خدماتنا للملاك (شركاء النجاح)**:
     - ندير العقار بالكامل (نظافة، صيانة، تسويق، استقبال، تحصيل مبالغ).
     - النسبة: نتقاضى نسبة إدارة تتراوح بين 20% إلى 25% من إجمالي الدخل.
     - العقود: سنوية وتجدد تلقائياً.
     - التقارير: توجد لوحة تحكم للمالك لمتابعة الأرباح والإشغال لحظة بلحظة.
     - متطلبات الانضمام: صك ملكية، موقع في (الرياض، جدة، الخبر)، وحدة بحالة ممتازة، تكييف ومطبخ راكب.
     - التأثيث: نطلب تأثيث فندقي (يمكننا الإشراف عليه بمقابل).
  
  3. **خدماتنا للضيوف (النزلاء)**:
     - نوفر شقق مخدومة بنظام الفندقة (دخول ذكي، نظافة، انترنت فايبر).
     - الحجز: يتم حصراً عبر منصات الحجز المعتمدة مثل (Gathern, Booking, Airbnb) وليس عبر الدردشة مباشرة.
  
  4. **سياسة الردود**:
     - إذا طلب شخص "استئجار شقة" أو "هل لديكم شقق للإيجار": وجهه لزر "تصفح الوحدات" أو أخبره أننا نعرض وحداتنا على تطبيقات الحجز مثل جاذرن وبوكينج، ونحن هنا لإدارة العقارات للملاك.
     - إذا طلب شخص "شراء عقار": اعتذر بلطف، نحن ندير العقارات ولا نبيعها.
     - إذا سأل عن "الإيجار السنوي التقليدي": وضح أننا نركز على التأجير اليومي/الشهري الفندقي لتعظيم العائد، وليس الإيجار السنوي الثابت القديم.
     - معلومات التواصل: واتساب 966538721499.
  `;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: textToSend,
        config: {
          systemInstruction: `
            أنت المساعد الذكي الرسمي لشركة "منام".
            
            تعليمات الشخصية:
            - اسمك "مساعد منام".
            - تتحدث باللهجة السعودية البيضاء المحترفة والودودة.
            - إجاباتك مختصرة جداً ومباشرة (لا تكتب مقالات طويلة).
            - هدفك الأساسي: إقناع الملاك بتسجيل عقاراتهم، وتوجيه الضيوف لمنصات الحجز.

            السياق وقاعدة المعرفة (استخدم هذه المعلومات فقط للإجابة):
            ${KNOWLEDGE_BASE}

            قواعد صارمة:
            1. إذا كان السؤال خارج نطاق عمل "منام" (مثلاً: أسئلة عن الرياضة، الطقس، الدين، السياسة، أو برمجة)، اعتذر بأدب وقل: "معليش، أنا متخصص بس في خدمات منام وإدارة العقارات."
            2. لا تخترع معلومات غير موجودة في قاعدة المعرفة.
            3. إذا سأل العميل عن حجز شقة، لا تطلب منه تفاصيل الحجز، بل قل له أن الحجز يتم عبر روابط المنصات في الموقع.
            `
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', text: response.text || 'معليش، ما فهمت عليك زين. ممكن تعيد الصياغة؟' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'الخدمة عليها ضغط حالياً، بس فريقنا موجود عالواتساب!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed z-[100] dir-rtl font-arabic transition-all duration-300 ${isOpen ? 'inset-0 bg-black/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:inset-auto md:bottom-6 md:left-6' : 'bottom-6 left-6'}`}>

      {/* Mobile Backdrop for closing */}
      {isOpen && <div className="absolute inset-0 md:hidden" onClick={() => setIsOpen(false)}></div>}

      {isOpen ? (
        <div className="absolute bottom-0 md:relative w-full md:w-[400px] h-[90vh] md:h-[550px] bg-white rounded-t-[2rem] md:rounded-[1.5rem] shadow-2xl border border-slate-200/50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-full md:slide-in-from-bottom-10 duration-300 text-right">

          {/* Header - محسن */}
          <div className="bg-gradient-to-r from-primary via-violet-600 to-indigo-600 p-4 md:p-5 text-white flex justify-between items-center shadow-lg flex-shrink-0 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative group">
                <div className="w-12 h-12 bg-transparent rounded-2xl flex items-center justify-center overflow-hidden p-1.5 group-hover:scale-105 transition-transform">
                  <img src="/mnam-logo.png" alt="Bot" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-[3px] border-primary rounded-full shadow-lg">
                  <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50"></span>
                </div>
              </div>
              <div>
                <span className="font-bold text-base block">مساعد منام</span>
                <span className="text-[11px] text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  متصل الآن • ذكاء اصطناعي
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-200 relative z-10 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area - محسن */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                {m.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-transparent flex items-center justify-center ml-2 mt-1 flex-shrink-0 p-1 overflow-hidden">
                    <img src="/mnam-logo.png" alt="Bot" className="w-full h-full object-contain" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${m.role === 'user'
                  ? 'bg-gradient-to-r from-primary to-violet-600 text-white rounded-tr-sm shadow-lg shadow-primary/20'
                  : 'bg-white text-slate-700 rounded-tl-sm border border-slate-100 shadow-md'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end items-center gap-2 animate-in fade-in duration-200">
                <div className="bg-white px-5 py-4 rounded-2xl rounded-tl-sm border border-slate-100 shadow-md flex gap-1.5 items-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce [animation-delay:0.15s]"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions & Input - محسن */}
          <div className="bg-white border-t border-slate-100 flex-shrink-0 safe-area-bottom">
            {messages.length < 3 && (
              <div className="px-3 py-3 flex gap-2 overflow-x-auto no-scrollbar">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="flex-shrink-0 text-xs bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 hover:border-primary hover:bg-primary/5 hover:text-primary px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap font-medium shadow-sm hover:shadow-md"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="p-3 pt-2 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب سؤالك هنا..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all text-right placeholder:text-slate-400"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className={`p-3 rounded-xl transition-all duration-200 ${!input.trim() || isLoading
                  ? 'bg-slate-100 text-slate-400'
                  : 'bg-gradient-to-r from-primary to-violet-600 text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95'
                  }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform -rotate-90" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* زر فتح المساعد - محسن */
        <div className="relative">
          {/* Ping Notification - خارج الزر */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 z-50">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white shadow-md"></span>
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-violet-600 to-indigo-600 text-white rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-110 transition-all duration-300 z-40 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

            {/* Icon */}
            <svg className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>

            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              اسألني أي شي! 💬
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;