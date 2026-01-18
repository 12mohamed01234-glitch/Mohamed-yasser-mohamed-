
import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-black tracking-tight mb-8 text-[#0F172A]">Simple, powerful pricing.</h1>
          <p className="text-xl text-gray-500 font-medium">No hidden fees. Scale your business at the speed of Sitezy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Starter */}
          <PricingCard 
            name="Starter" 
            price="0" 
            desc="Perfect for launching your first project."
            features={["1 AI Website", "Sitezy Subdomain", "Community Support", "Basic Analytics"]}
          />
          
          {/* Pro */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <PricingCard 
              featured 
              name="Pro" 
              price="29" 
              desc="The suite for professionals and small agencies."
              features={["Unlimited AI Sites", "Custom Domains", "Priority AI Queue", "Advanced SEO Tools", "White-label Option"]}
            />
          </div>

          {/* Enterprise */}
          <PricingCard 
            name="Enterprise" 
            price="99" 
            desc="For large firms with massive traffic needs."
            features={["Dedicated Support", "Custom API Access", "SLA Guarantee", "Unlimited Bandwidth", "SSO & Security"]}
          />
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ name, price, desc, features, featured = false }: any) => (
  <div className={`p-12 rounded-[3rem] border ${featured ? 'bg-[#0F172A] text-white border-transparent shadow-2xl scale-105' : 'bg-white border-slate-100 text-slate-900 shadow-sm'}`}>
    <div className="mb-10">
      <h3 className="text-2xl font-black mb-4 uppercase tracking-widest">{name}</h3>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-5xl font-black">${price}</span>
        <span className="opacity-40 font-bold uppercase tracking-widest text-xs">/ month</span>
      </div>
      <p className={`font-medium leading-relaxed ${featured ? 'text-white/60' : 'text-gray-400'}`}>{desc}</p>
    </div>
    <div className="space-y-6 mb-12">
      {features.map((f: string, i: number) => (
        <div key={i} className="flex items-center gap-4 text-sm font-bold">
          <i className="fas fa-check text-indigo-500"></i>
          <span>{f}</span>
        </div>
      ))}
    </div>
    <Link to="/wizard" className={`block text-center py-6 rounded-2xl font-black transition-all ${featured ? 'bg-white text-[#0F172A] hover:bg-slate-100' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
      Get Started
    </Link>
  </div>
);

export default PricingPage;
