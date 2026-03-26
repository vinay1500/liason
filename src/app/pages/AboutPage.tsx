import React from 'react';
import { motion } from 'motion/react';
import { Globe, Shield, Users, Award, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 block">
            OUR FIRM
          </span>
          <h1 className="text-6xl md:text-8xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Excellence as our standard.
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Legal Connect is a premier global law firm dedicated to helping world-leading corporations and financial institutions navigate their most complex legal challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          <div className="aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Office" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              A New Era of Legal Partnership
            </h2>
            <p className="text-gray-500 leading-relaxed font-light">
              Founded on the principles of integrity and innovation, we have built a network that spans across 40+ countries. Our multidisciplinary team combines deep local knowledge with a seamless global perspective.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-4xl font-bold mb-2">120+</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Partners Worldwide</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">40+</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Global Offices</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Globe, title: 'Global Presence', desc: 'Seamless service across all major financial centers.' },
            { icon: Shield, title: 'Uncompromising Integrity', desc: 'The highest ethical standards in every matter.' },
            { icon: Users, title: 'Collaborative Culture', desc: 'Unified teams working toward your success.' },
            { icon: Award, title: 'Excellence in Execution', desc: 'Precision and quality in every legal brief.' }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
