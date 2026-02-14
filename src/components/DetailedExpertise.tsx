import { useState } from 'react';
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import { LEGAL_EXPERTISE_DATA } from '../data/appData';
import { motion, AnimatePresence } from 'motion/react';

export const DetailedExpertise = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-full bg-gray-50/50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Navigation & Context */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <div className="mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">
                  PRACTICE AREAS
                </span>
                <h2 
                  className="text-5xl md:text-6xl mb-6 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  World-class<br />Legal Expertise
                </h2>
                <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                  Strategic advice across every major industry, navigating the complexities of modern global markets.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                {LEGAL_EXPERTISE_DATA.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`group flex items-center justify-between px-6 py-5 text-left rounded-2xl transition-all duration-300 ${
                      activeTab === idx 
                        ? 'bg-black text-white shadow-xl shadow-black/20' 
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-sm font-semibold transition-all ${activeTab === idx ? 'translate-x-2' : ''}`}>
                      {item.category}
                    </span>
                    <ChevronRight 
                      size={18} 
                      className={`transition-all duration-300 ${
                        activeTab === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`} 
                    />
                  </button>
                ))}
              </div>

              <div className="mt-12 p-8 border border-gray-100 rounded-3xl bg-gray-50/50">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Practice Resources</p>
                <button className="flex items-center gap-3 text-sm font-bold hover:text-blue-600 transition-colors group">
                  <Download size={18} className="text-gray-400 group-hover:text-blue-600" />
                  DOWNLOAD FIRM BROCHURE
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-12"
              >
                <div className="pb-12 border-b border-gray-100">
                  <h3 
                    className="text-4xl md:text-5xl mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {LEGAL_EXPERTISE_DATA[activeTab].category}
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-[2px] bg-blue-600 mt-3 flex-shrink-0" />
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                      {LEGAL_EXPERTISE_DATA[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {LEGAL_EXPERTISE_DATA[activeTab].items.map((item, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex flex-col gap-3">
                        <div className="h-0.5 w-0 group-hover:w-8 bg-blue-600 transition-all duration-300" />
                        <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                          {item.split(':')[0]}
                        </h4>
                        {item.includes(':') && (
                          <p className="text-sm text-gray-500 leading-relaxed font-light">
                            {item.split(':').slice(1).join(':').trim()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-12">
                  <button className="px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors flex items-center gap-3">
                    CONSULT A SPECIALIST
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
