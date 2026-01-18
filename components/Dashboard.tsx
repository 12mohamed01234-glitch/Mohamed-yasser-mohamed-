
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SiteData } from '../types';

const Dashboard: React.FC = () => {
  const [sites, setSites] = useState<SiteData[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('smartsite_sites') || '[]');
    setSites(saved);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">My Factory</h1>
          <p className="text-gray-500 font-medium">Manage your active Sitezy deployments.</p>
        </div>
        <Link to="/wizard" className="bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-extrabold hover:bg-black transition-all shadow-xl shadow-slate-200">
          <i className="fas fa-plus mr-3 opacity-40"></i> Create New
        </Link>
      </div>

      {sites.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-[3rem] p-24 text-center shadow-sm">
          <div className="w-24 h-24 sitezy-gradient text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-indigo-500/20">
            <i className="fas fa-box-open text-4xl"></i>
          </div>
          <h2 className="text-3xl font-black mb-4">Empty Library</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-12 font-medium">
            Your high-converting web presence is just 60 seconds away. Let's start the assembly.
          </p>
          <Link to="/wizard" className="text-indigo-600 font-black hover:underline tracking-tight text-lg">
            Launch Wizard &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sites.map(site => (
            <div key={site.id} className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
              <div className="h-60 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-40" 
                  alt="" 
                />
                <div className="absolute bottom-6 left-6 z-20">
                   <div className="text-white font-black text-2xl tracking-tight">{site.businessName}</div>
                   <div className="text-white/50 text-xs font-bold uppercase tracking-widest mt-1">{site.businessType}</div>
                </div>
                <div className="absolute top-6 right-6 bg-green-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest z-20 shadow-lg">
                  Deployed
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-10">
                   <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center">
                         <i className={`fas ${site.language === 'Arabic' ? 'fa-align-right' : 'fa-align-left'} text-[10px] text-slate-300`}></i>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center">
                         <i className="fas fa-palette text-[10px] text-slate-300"></i>
                      </div>
                   </div>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{new Date(site.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link to={`/preview/${site.id}`} className="bg-slate-50 text-slate-900 py-4 rounded-xl text-center font-black text-sm hover:bg-slate-100 transition-colors">
                    Visit Site
                  </Link>
                  <button className="bg-indigo-50 text-indigo-600 py-4 rounded-xl text-center font-black text-sm hover:bg-indigo-100 transition-colors">
                    Config
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
