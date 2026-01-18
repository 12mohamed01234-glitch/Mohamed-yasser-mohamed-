
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInput, DesignArchetype, Language, Currency, SiteData } from '../types';
import { generateSiteContent } from '../services/geminiService';
import { ARCHETYPE_PALETTES, ARCHETYPE_STYLES, getArchetypeFromType } from '../services/designSystem';

const Wizard: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadStep, setLoadStep] = useState(0);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    servicesDescription: '',
    language: Language.EN,
    currency: Currency.USD,
    whatsappNumber: ''
  });

  const loadingMessages = [
    "Analyzing business DNA...",
    "Synthesizing high-conversion copy...",
    "Selecting industry-specific color palette...",
    "Optimizing responsive architecture...",
    "Injecting SEO metadata...",
    "Finalizing global deployment..."
  ];

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoadStep(prev => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    if (!formData.businessName || !formData.businessType) {
      setError('Required fields missing.');
      return;
    }

    setLoading(true);
    setLoadStep(0);
    setError('');
    try {
      const archetype = getArchetypeFromType(formData.businessType);
      const generatedContent = await generateSiteContent({ ...formData, archetype } as any);
      const palette = ARCHETYPE_PALETTES[archetype];
      const uiStyle = ARCHETYPE_STYLES[archetype];
      
      const siteId = Math.random().toString(36).substring(7);
      const siteData: SiteData = { 
        ...formData, 
        id: siteId, 
        archetype,
        palette,
        uiStyle,
        generatedContent, 
        status: 'draft', 
        createdAt: new Date().toISOString() 
      };
      
      const existing = JSON.parse(localStorage.getItem('smartsite_sites') || '[]');
      localStorage.setItem('smartsite_sites', JSON.stringify([...existing, siteData]));
      
      // Artificial delay for premium feel
      setTimeout(() => navigate(`/preview/${siteId}`), 1000);
    } catch (err) {
      setError('Assembly interrupted. Verify connection.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center space-y-12">
          <div className="relative inline-block">
             <div className="w-32 h-32 border-4 border-slate-100 rounded-[2.5rem] animate-pulse"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-sparkles text-4xl text-indigo-600 animate-bounce"></i>
             </div>
          </div>
          <div className="space-y-4">
             <h2 className="text-4xl font-black tracking-tight">{loadingMessages[loadStep]}</h2>
             <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full sitezy-gradient transition-all duration-700" style={{ width: `${((loadStep + 1) / loadingMessages.length) * 100}%` }}></div>
             </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-3xl p-8 text-left font-mono text-xs text-gray-400 space-y-2">
             <p className="text-green-500 font-bold"># SITEZY ASSEMBLY LOG</p>
             <p className="">{'>'} INITIALIZING ENGINE V2.5...</p>
             <p className="">{'>'} CALLING LLM GENERATOR...</p>
             {loadStep > 0 && <p className="">{'>'} CONTENT SYNTHESIZED SUCCESSFULLY.</p>}
             {loadStep > 2 && <p className="">{'>'} PALETTE MAPPED TO ARCHETYPE: {getArchetypeFromType(formData.businessType).toUpperCase()}</p>}
             <p className="animate-pulse">{'>'} PROCESSING...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
          <div className="h-full sitezy-gradient transition-all duration-700 ease-out" style={{ width: `${(step/2)*100}%` }}></div>
        </div>

        {error && <div className="mb-10 p-5 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 animate-shake">{error}</div>}

        {step === 1 ? (
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-6xl font-black tracking-tighter text-slate-950">Identity.</h2>
              <p className="text-gray-400 text-xl font-medium">Capture your business core.</p>
            </div>
            <div className="space-y-10">
              <Input label="Company Name" name="businessName" value={formData.businessName} onChange={handleInputChange} placeholder="e.g. Cairo Dental Care" />
              <Input label="Industry Sector" name="businessType" value={formData.businessType} onChange={handleInputChange} placeholder="e.g. Modern Clinic" />
              <div className="grid grid-cols-2 gap-10">
                <Select label="Market Language" name="language" value={formData.language} onChange={handleInputChange}>
                  <option value={Language.EN}>English (Global)</option>
                  <option value={Language.AR}>Arabic (Middle East)</option>
                </Select>
                <Select label="Currency" name="currency" value={formData.currency} onChange={handleInputChange}>
                  {Object.values(Currency).map(c => <option key={c} value={c}>{c}</option>)}
                </Select>
              </div>
            </div>
            <button onClick={() => setStep(2)} className="w-full py-8 bg-slate-950 text-white rounded-[2rem] font-black text-xl hover:bg-black hover:scale-[1.01] transition-all shadow-2xl shadow-slate-200">
              Next Stage
            </button>
          </div>
        ) : (
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-6xl font-black tracking-tighter text-slate-950">Vision.</h2>
              <p className="text-gray-400 text-xl font-medium">Describe your services in detail.</p>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Mission Statement & Services</label>
                <textarea 
                  name="servicesDescription"
                  value={formData.servicesDescription}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-10 bg-slate-50 border border-slate-100 rounded-[3rem] outline-none focus:border-indigo-500 focus:bg-white transition-all resize-none text-xl font-medium placeholder:text-slate-300"
                  placeholder="What makes you the best in your sector?"
                ></textarea>
              </div>
              <Input label="WhatsApp Line (International Format)" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleInputChange} placeholder="+20 123 456 7890" />
            </div>
            <div className="flex gap-8">
              <button onClick={() => setStep(1)} className="flex-1 py-8 bg-slate-50 text-slate-400 rounded-[2rem] font-black hover:bg-slate-100 transition-all">Back</button>
              <button onClick={handleGenerate} className="flex-[2] py-8 sitezy-gradient text-white rounded-[2rem] font-black text-xl hover:scale-[1.02] shadow-2xl shadow-indigo-100 transition-all">
                Assemble Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Input = ({ label, ...props }: any) => (
  <div className="space-y-4">
    <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{label}</label>
    <input {...props} className="w-full p-8 bg-slate-50 border border-slate-100 rounded-[2rem] outline-none focus:border-indigo-500 focus:bg-white transition-all text-xl font-medium placeholder:text-slate-300" />
  </div>
);

const Select = ({ label, children, ...props }: any) => (
  <div className="space-y-4">
    <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{label}</label>
    <select {...props} className="w-full p-8 bg-slate-50 border border-slate-100 rounded-[2rem] outline-none focus:border-indigo-500 focus:bg-white transition-all bg-white text-xl font-medium cursor-pointer appearance-none">{children}</select>
  </div>
);

export default Wizard;
