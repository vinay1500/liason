import React from 'react';
import { motion } from 'motion/react';
import { Heart, Scale, Users, Globe, ArrowRight, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const IMPACT_AREAS = [
  {
    icon: Scale,
    title: 'Access to Justice',
    description: 'Providing legal representation to individuals and communities who cannot afford it.',
    stats: '500+ cases annually'
  },
  {
    icon: Users,
    title: 'Human Rights',
    description: 'Defending fundamental rights and supporting organizations fighting discrimination.',
    stats: '50+ organizations supported'
  },
  {
    icon: Globe,
    title: 'Environmental Protection',
    description: 'Advocating for sustainable practices and environmental conservation initiatives.',
    stats: '30+ environmental projects'
  },
  {
    icon: Heart,
    title: 'Social Justice',
    description: 'Supporting nonprofits working on education, healthcare, and community development.',
    stats: '100+ nonprofit partners'
  }
];

const CASE_STUDIES = [
  {
    id: 1,
    title: 'Refugee Rights Advocacy',
    description: 'Successfully represented asylum seekers in complex immigration proceedings, securing protection for vulnerable families.',
    impact: '150+ families protected',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Environmental Justice Campaign',
    description: 'Partnered with community groups to challenge harmful industrial practices affecting underserved neighborhoods.',
    impact: 'Protected 10,000+ residents',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Small Business Legal Clinic',
    description: 'Providing free legal advice to entrepreneurs from disadvantaged communities to help them launch and grow their businesses.',
    impact: '200+ businesses supported',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

export const ProBono = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 block">
            GIVING BACK
          </span>
          <h1 className="text-6xl md:text-8xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pro Bono<br />Commitment
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            At Legal Connect, we believe access to justice is a fundamental right. Our pro bono program reflects our commitment to using our legal expertise to serve those most in need.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { value: '15,000+', label: 'Pro Bono Hours' },
            { value: '500+', label: 'Cases Handled' },
            { value: '100+', label: 'Nonprofit Partners' },
            { value: '40+', label: 'Countries Served' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold mb-2 text-blue-600">{stat.value}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Impact Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMPACT_AREAS.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-gray-50 rounded-[2.5rem] space-y-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <area.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{area.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{area.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-bold text-blue-600">{area.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Recent Success Stories
          </h2>
          
          <div className="space-y-8">
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  
                  <div className={`space-y-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full">
                      Case Study
                    </div>
                    <h3 className="text-3xl font-bold group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <Award size={20} className="text-blue-600" />
                      <span className="text-sm font-bold text-blue-600">{study.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="mb-32 p-16 bg-black text-white rounded-[3rem]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recognized Excellence
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
              Our pro bono program has been recognized by leading legal organizations for our commitment to social justice and community service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'Pro Bono Institute Leadership Award',
                'Corporate Social Responsibility Excellence',
                'Access to Justice Recognition'
              ].map((award, i) => (
                <div key={i} className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <Award size={32} className="mx-auto mb-4 text-blue-400" />
                  <p className="text-sm font-semibold">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="p-16 bg-gray-50 rounded-[3rem]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Partner with Us
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
              If you represent a nonprofit organization or community group that could benefit from our legal expertise, we'd like to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-3 rounded-full">
                Apply for Pro Bono Support
                <ArrowRight size={16} />
              </button>
              <button className="px-12 py-5 border-2 border-black text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center gap-3 rounded-full">
                Contact Our Team
              </button>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              Email: probono@legalconnect.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
