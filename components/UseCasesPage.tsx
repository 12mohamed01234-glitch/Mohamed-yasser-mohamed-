
import React from 'react';
import { Link } from 'react-router-dom';

const UseCasesPage: React.FC = () => {
  const cases = [
    { title: "Healthcare & Wellness", icon: "fa-stethoscope", color: "#10B981", desc: "Clinics, dentists, and private practices in Egypt and GCC." },
    { title: "Legal & Consulting", icon: "fa-scale-balanced", color: "#0F172A", desc: "Lawyers, architects, and engineering consultants." },
    { title: "Hospitality & Retail", icon: "fa-utensils", color: "#EA580C", desc: "Restaurants, cafes, and local boutique shops." },
    { title: "Education & Coaching", icon: "fa-chalkboard-user", color: "#6366F1", desc: "Private tutors, training centers, and online schools." },
    { title: "Personal Branding", icon: "fa-user-tie", color: "#334155", desc: "CV websites for engineers, designers, and freelancers." },
    { title: "SaaS & Startups", icon: "fa-rocket", color: "#22D3EE", desc: "Product landing pages for the next wave of tech builders." },
  ];

  return (
    <div className="bg-white min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h1 className="text-6xl font-black tracking-tight mb-8">Built for Experts.</h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Sitezy understands the specific design language and conversion triggers of your industry.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((c, i) => (
            <div key={i} className="group p-12 bg-[#F8FAFC] rounded-[3rem] border border-transparent hover:border-indigo-100 transition-all hover:bg-white hover:shadow-2xl">
              <div className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-3xl text-white mb-10 shadow-xl" style={{ backgroundColor: c.color }}>
                <i className={`fas ${c.icon}`}></i>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight">{c.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-10">{c.desc}</p>
              <Link to="/wizard" className="inline-flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                Launch for {c.title.split(' ')[0]} <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;
