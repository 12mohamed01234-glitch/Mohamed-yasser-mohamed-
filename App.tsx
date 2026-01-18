
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams, Navigate, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Wizard from './components/Wizard';
import SitePreview from './components/SitePreview';
import ArchitectureInfo from './components/ArchitectureInfo';
import EngineInfo from './components/EngineInfo';
import PricingPage from './components/PricingPage';
import UseCasesPage from './components/UseCasesPage';
import { SiteData } from './types';

const Home: React.FC = () => (
  <div className="relative bg-[#F8FAFC]">
    {/* Hero Section: The "Speed of Thought" */}
    <header className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 text-center relative z-10">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-indigo-100 shadow-sm rounded-full text-[10px] font-black mb-12 tracking-[0.3em] text-indigo-600 animate-fade-in uppercase">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        V2.5 Assembly Engine Active
      </div>
      <h1 className="text-6xl md:text-[7rem] font-[800] mb-12 tracking-[-0.05em] leading-[0.85] text-[#0F172A]">
        Websites at the speed <br />
        of <span className="text-gradient">thought.</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-20 leading-relaxed font-medium">
        Sitezy is the autonomous factory for professional web presence. <br className="hidden md:block"/> Engineered for doctors, lawyers, and visionaries.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-32">
        <Link to="/wizard" className="bg-[#0F172A] text-white px-14 py-7 rounded-[2rem] text-xl font-[800] hover:bg-black transition-all shadow-2xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]">
          Build your site now
        </Link>
        <Link to="/use-cases" className="text-[#0F172A] font-bold px-10 py-7 flex items-center gap-3 hover:text-indigo-600 transition-colors border-2 border-transparent hover:border-indigo-50 rounded-[2rem]">
          Explore Archetypes
        </Link>
      </div>

      {/* Social Proof: Trust Bar */}
      <div className="pt-24 border-t border-slate-100">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-16">Powering growth for 25,000+ experts globally</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <BrandLogo name="STRIPE" />
           <BrandLogo name="NOTION" />
           <BrandLogo name="WEBFLOW" />
           <BrandLogo name="FRAMER" />
        </div>
      </div>
    </header>

    {/* Section 2: The "Archetype" Grid */}
    <section className="bg-white py-40 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">One engine. <br/> Infinite identities.</h2>
              <p className="text-xl text-gray-500 font-medium">Our AI doesn't use templates. It synthesizes a unique design DNA based on your industry's conversion psychology.</p>
           </div>
           <Link to="/use-cases" className="text-indigo-600 font-black flex items-center gap-2 group">
              View all use cases <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
           </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ArchetypeCard 
            title="The Healer" 
            desc="Soft palettes and high-trust layouts for medical professionals and clinics." 
            color="#10B981" 
            tag="HEALTH"
          />
          <ArchetypeCard 
            title="The Guardian" 
            desc="Structured, authoritative designs for law firms and engineering agencies." 
            color="#0F172A" 
            tag="PROFESSIONAL"
          />
          <ArchetypeCard 
            title="The Social" 
            desc="Vibrant, high-energy layouts for restaurants, retail, and community hubs." 
            color="#EA580C" 
            tag="RETAIL"
          />
        </div>
      </div>
    </section>

    {/* Section 3: How it Works (The Assembly Line) */}
    <section className="py-40 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-5xl font-black tracking-tighter mb-6">The Assembly Process</h2>
          <p className="text-xl text-gray-400 font-medium">Human intent meets machine precision in under 60 seconds.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-24 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden md:block"></div>
          <StepCard 
            num="01" 
            icon="fa-fingerprint" 
            title="Input DNA" 
            desc="You provide the raw business vision and goals."
          />
          <StepCard 
            num="02" 
            icon="fa-microchip-ai" 
            title="AI Synthesis" 
            desc="Our designer brain builds your copy and layout."
          />
          <StepCard 
            num="03" 
            icon="fa-rocket" 
            title="Instant Deploy" 
            desc="Your site is live on a global CDN in one click."
          />
        </div>
      </div>
    </section>

    {/* Section 4: Final CTA */}
    <section className="bg-[#0F172A] py-40 relative overflow-hidden">
       <div className="absolute inset-0 sitezy-gradient opacity-20 blur-3xl scale-150"></div>
       <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-12">Stop waiting. <br/> Start growing.</h2>
          <Link to="/wizard" className="inline-block bg-white text-[#0F172A] px-16 py-8 rounded-[2.5rem] text-2xl font-black shadow-2xl hover:scale-105 transition-all">
             Begin Assembly
          </Link>
       </div>
    </section>
  </div>
);

const BrandLogo = ({ name }: { name: string }) => (
  <div className="text-2xl font-black tracking-tighter">{name}</div>
);

const ArchetypeCard = ({ title, desc, color, tag }: any) => (
  <div className="bg-white border border-slate-100 p-10 rounded-[3rem] hover:shadow-2xl transition-all hover:-translate-y-2 group">
    <div className="text-[10px] font-black tracking-[0.2em] text-gray-300 mb-8 uppercase">{tag}</div>
    <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-white text-2xl" style={{ backgroundColor: color }}>
       <i className="fas fa-sparkles opacity-50"></i>
    </div>
    <h3 className="text-3xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed mb-10">{desc}</p>
    <div className="w-full h-1 bg-slate-50 rounded-full overflow-hidden">
       <div className="h-full group-hover:w-full w-0 transition-all duration-700" style={{ backgroundColor: color }}></div>
    </div>
  </div>
);

const StepCard = ({ num, icon, title, desc }: any) => (
  <div className="relative z-10 text-center flex flex-col items-center">
    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-[#F8FAFC] shadow-xl text-3xl text-indigo-600 mb-10">
       <i className={`fas ${icon}`}></i>
    </div>
    <div className="text-5xl font-black text-indigo-100 mb-4">{num}</div>
    <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 font-medium">{desc}</p>
  </div>
);

const PreviewWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('smartsite_sites') || '[]');
    const site = saved.find((s: SiteData) => s.id === id);
    setSiteData(site || null);
  }, [id]);

  if (!siteData) return <div className="p-20 text-center text-gray-500 font-bold uppercase tracking-widest">Site lost in production...</div>;

  return <SitePreview data={siteData} />;
};

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/engine" element={<EngineInfo />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/preview/:id" element={<PreviewWrapper />} />
        <Route path="/arch" element={<ArchitectureInfo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;
