
import React from 'react';

const EngineInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <i className="fas fa-gear text-2xl animate-spin-slow"></i>
        </div>
        <h1 className="text-3xl font-bold">The SmartSite Engine</h1>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-purple-600 border-b pb-2">Factory Process: Blueprint to Reality</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          {[
            { step: '01', icon: 'fa-user-pen', title: 'Input Capture', desc: 'User business DNA collected via Wizard' },
            { step: '02', icon: 'fa-brain', title: 'AI Synthesis', desc: 'Copywriting tailored to MENA market' },
            { step: '03', icon: 'fa-puzzle-piece', title: 'Template Selection', desc: 'Optimized layout chosen by Business Type' },
            { step: '04', icon: 'fa-vial', title: 'Hydration', desc: 'Content & branding injected into HTML' },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm relative">
              <span className="absolute -top-3 -right-3 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xs">{item.step}</span>
              <i className={`fas ${item.icon} text-purple-600 text-xl mb-3`}></i>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-[11px] text-gray-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-purple-600 border-b pb-2">Safe AI Prompting</h2>
        <div className="bg-slate-900 rounded-2xl p-6 text-slate-300 font-mono text-sm leading-relaxed">
          <p className="text-indigo-400 mb-4"># System Instruction Strategy</p>
          <p>You are a <span className="text-yellow-400">Restricted Content Injector</span>. Do not generate code.</p>
          <p>Your ONLY output is a JSON object mapping to the following schema.</p>
          <p>Tone: Professional Middle-Eastern Business.</p>
          <p className="text-indigo-400 mt-6"># Why this works?</p>
          <p className="text-green-400">// By restricting AI to JSON and using pre-built templates, we prevent:</p>
          <p className="text-green-400">// 1. Broken HTML layouts</p>
          <p className="text-green-400">// 2. Prompt injections (XSS)</p>
          <p className="text-green-400">// 3. Inconsistent branding</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-6 text-purple-600 border-b pb-2">Example: Hydration Pattern</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Static Template (Before)</h3>
            <div className="bg-gray-100 p-4 rounded-xl text-[10px] font-mono whitespace-pre overflow-hidden">
{`<!-- Template ID: corporate_pro -->
<header class="bg-[{{COLOR}}]">
  <h1>{{TITLE}}</h1>
  <p>{{SUBTITLE}}</p>
  <a href="wa.me/{{WHATSAPP}}">
    Contact Now
  </a>
</header>`}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Injected Result (After)</h3>
            <div className="bg-indigo-50 p-4 rounded-xl text-[10px] font-mono border border-indigo-100 whitespace-pre overflow-hidden">
{`<!-- Live Rendered Output -->
<header class="bg-[#1E40AF]">
  <h1>Cairo Dental Center</h1>
  <p>Providing world-class care 
     in the heart of Heliopolis</p>
  <a href="wa.me/20123456789">
    Contact Now
  </a>
</header>`}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineInfo;
