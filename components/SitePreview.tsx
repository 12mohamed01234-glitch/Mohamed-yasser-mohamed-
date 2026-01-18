
import React from 'react';
import { SiteData, Language } from '../types';

interface SitePreviewProps {
  data: SiteData;
  isIframe?: boolean;
}

const SitePreview: React.FC<SitePreviewProps> = ({ data, isIframe = false }) => {
  const isArabic = data.language === Language.AR;
  const isDark = data.palette.background.includes('020617') || data.palette.background.includes('0F172A');
  const dir = isArabic ? 'rtl' : 'ltr';
  const p = data.palette;
  const s = data.uiStyle;

  // Animation CSS Helpers
  const getAnimationClass = () => {
    if (s.animation.type === 'fade') return 'animate-fade-in-slow';
    if (s.animation.type === 'spring') return 'animate-bounce-subtle';
    return 'animate-slide-up';
  };

  return (
    <div 
      dir={dir} 
      className={`min-h-screen selection:bg-indigo-100 transition-all duration-700 ${isArabic ? 'font-arabic' : 'font-sans'}`}
      style={{ backgroundColor: p.background, color: p.text }}
    >
      {/* Global Navigation */}
      <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl px-6 md:px-12 py-5 flex justify-between items-center ${isDark ? 'bg-slate-950/80 border-white/5' : 'bg-white/80 border-gray-100'}`}>
        <div className="text-2xl font-black tracking-tighter" style={{ color: p.primary }}>
          {data.businessName.toUpperCase()}
        </div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest opacity-60">
          <a href="#services" className="hover:opacity-100 transition-opacity">{isArabic ? 'الخدمات' : 'Services'}</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">{isArabic ? 'من نحن' : 'About'}</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">{isArabic ? 'اتصل بنا' : 'Contact'}</a>
        </div>
        <a 
          href={`https://wa.me/${data.whatsappNumber}`}
          className="px-8 py-3 font-bold transition-all hover:scale-105 active:scale-95 text-white shadow-xl"
          style={{ backgroundColor: p.primary, borderRadius: s.borderRadius }}
        >
          {isArabic ? 'تواصل معنا' : 'Get Started'}
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-40 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <div 
            className={`inline-block px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] mb-10 ${getAnimationClass()}`}
            style={{ backgroundColor: `${p.primary}15`, color: p.primary, borderRadius: '100px' }}
          >
            {data.businessType}
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1] tracking-tight">
            {data.generatedContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-50 max-w-3xl mb-14 leading-relaxed font-medium">
            {data.generatedContent.hero.subtitle}
          </p>
          <button 
            className="px-12 py-5 text-lg font-bold shadow-2xl transition-all hover:-translate-y-1 text-white" 
            style={{ backgroundColor: p.primary, borderRadius: s.borderRadius, boxShadow: s.shadow }}
          >
            {data.generatedContent.hero.cta}
          </button>
        </div>
        
        {/* Dynamic Background Mesh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-1/4 w-[800px] h-[800px] blur-[120px] rounded-full" style={{ background: `radial-gradient(circle, ${p.primary} 0%, transparent 70%)` }}></div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black mb-6">{data.generatedContent.services.title}</h2>
            <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 mx-auto" style={{ color: p.primary }}></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {data.generatedContent.services.items.map((item, i) => (
              <div 
                key={i} 
                className={`p-10 border transition-all hover:-translate-y-3 group ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}
                style={{ borderRadius: s.borderRadius, boxShadow: s.shadow }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `${p.primary}15`, color: p.primary }}>
                  <i className={`fas ${item.icon} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                <p className="opacity-50 text-base leading-relaxed mb-8">{item.description}</p>
                <div className="font-black text-xl flex items-center gap-2" style={{ color: p.primary }}>
                  <span className="text-sm opacity-40">{data.currency}</span>
                  <span>{Math.floor(Math.random() * 500) + 100}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 px-6 md:px-12 ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-10 rounded-full opacity-10 blur-[100px]" style={{ backgroundColor: p.primary }}></div>
            <img 
              src={`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800`} 
              className="relative shadow-2xl object-cover w-full h-[500px]"
              style={{ borderRadius: s.borderRadius }}
              alt="Workspace"
            />
          </div>
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <h2 className="text-5xl font-black mb-10 leading-tight">{data.generatedContent.about.title}</h2>
            <p className="text-xl opacity-60 leading-relaxed">
              {data.generatedContent.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12">
        <div className={`max-w-7xl mx-auto p-12 md:p-24 text-white flex flex-col md:flex-row gap-20 overflow-hidden relative ${isDark ? 'bg-white/5' : 'bg-slate-950'}`} style={{ borderRadius: s.borderRadius }}>
          <div className="relative z-10 flex-1">
            <h2 className="text-5xl font-black mb-12">{data.generatedContent.contact.title}</h2>
            <div className="space-y-10">
              <ContactLink icon="fa-at" label={data.generatedContent.contact.email} />
              <ContactLink icon="fa-whatsapp" label={data.generatedContent.contact.whatsapp} />
              <ContactLink icon="fa-map-marker-alt" label={data.generatedContent.contact.address} />
            </div>
          </div>
          <div className="relative z-10 flex-1 bg-white/5 backdrop-blur-3xl p-10 border border-white/10" style={{ borderRadius: s.borderRadius }}>
            <div className="space-y-6">
              <input type="text" placeholder={isArabic ? 'الاسم بالكامل' : 'Full Name'} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-white/40 transition-all" />
              <textarea rows={4} placeholder={isArabic ? 'كيف يمكننا مساعدتك؟' : 'How can we help?'} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-white/40 transition-all"></textarea>
              <button className="w-full py-5 text-lg font-bold transition-all hover:brightness-110 active:scale-95" style={{ backgroundColor: p.primary, borderRadius: s.borderRadius }}>
                {isArabic ? 'إرسال الرسالة' : 'Send Inquiry'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-xs font-bold uppercase tracking-[0.3em] opacity-20">
        &copy; {new Date().getFullYear()} {data.businessName} &bull; Built with SmartSite AI
      </footer>
      
      <style>{`
        @keyframes fade-in-slow { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce-subtle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-fade-in-slow { animation: fade-in-slow 1.2s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const ContactLink = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex items-center gap-8 group cursor-pointer">
    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-slate-950 transition-all duration-500">
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <span className="text-lg font-bold opacity-60 group-hover:opacity-100 transition-opacity">{label}</span>
  </div>
);

export default SitePreview;
