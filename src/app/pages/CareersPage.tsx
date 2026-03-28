import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Users, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const CAREER_CATEGORIES = [
  {
    title: "Interns",
    description: "Start your legal journey with our comprehensive internship programs designed to build foundation.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Advocates",
    description: "Join our team of elite advocates and represent world-leading organizations in complex litigation.",
    icon: Briefcase,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Other Hirings",
    description: "Explore opportunities in paralegal research, legal operations, technology, and more.",
    icon: Users,
    color: "bg-purple-50 text-purple-600"
  }
];

const CURRENT_OPENINGS = [
  {
    id: 'interns',
    title: 'Legal Intern Program',
    category: 'Interns',
    location: 'Multiple Locations',
    type: 'Internship',
    description: 'Join our comprehensive internship program and gain hands-on experience across various practice areas.',
    requirements: ['Currently pursuing law degree', 'Strong academic record', 'Excellent research skills']
  },
  {
    id: 'advocates',
    title: 'Senior Associate - Corporate M&A',
    category: 'Advocates',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Lead complex cross-border M&A transactions for Fortune 500 clients.',
    requirements: ['5+ years M&A experience', 'Top-tier law firm background', 'Qualified solicitor']
  },
  {
    id: 'advocates',
    title: 'Banking & Finance Lawyer',
    category: 'Advocates',
    location: 'New York, USA',
    type: 'Full-time',
    description: 'Advise on structured finance, syndicated lending, and regulatory matters.',
    requirements: ['3+ years banking experience', 'US bar admission', 'Strong client relationships']
  },
  {
    id: 'advocates',
    title: 'Dispute Resolution Partner',
    category: 'Advocates',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Build and lead our Asia-Pacific dispute resolution practice.',
    requirements: ['10+ years litigation experience', 'Arbitration expertise', 'Business development track record']
  },
  {
    id: 'other-hirings',
    title: 'Legal Technology Specialist',
    category: 'Other Hirings',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive innovation in legal tech, implement AI solutions, and optimize workflows.',
    requirements: ['Legal tech experience', 'Technical background', 'Project management skills']
  },
  {
    id: 'other-hirings',
    title: 'Paralegal - Capital Markets',
    category: 'Other Hirings',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Support our capital markets team with deal execution and documentation.',
    requirements: ['Paralegal certification', 'Capital markets exposure', 'Detail-oriented']
  }
];

export const CareersPage = () => {
  const navigate = useNavigate();

  const generateCareerId = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

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
            JOIN OUR TEAM
          </span>
          <h1 className="text-6xl md:text-8xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Careers at<br />Legal Connect
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            We are always looking for exceptional talent to join our global network. Whether you are a student, a seasoned advocate, or a professional in legal operations, discover your next move with us.
          </p>
        </motion.div>

        {/* Hero Image */}
        <div className="mb-32 aspect-[21/9] rounded-[3rem] overflow-hidden bg-gray-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Careers at Legal Connect"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Why Join Us */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Legal Connect?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'World-Class Training', desc: 'Comprehensive development programs and mentorship from industry leaders.' },
              { title: 'Global Opportunities', desc: 'Work across borders with clients and colleagues in 40+ countries.' },
              { title: 'Innovation Culture', desc: 'Be at the forefront of legal technology and innovative service delivery.' },
              { title: 'Work-Life Balance', desc: 'Flexible arrangements and support for your wellbeing and personal growth.' },
              { title: 'Diverse & Inclusive', desc: 'A workplace that celebrates diversity and fosters belonging for all.' },
              { title: 'Competitive Packages', desc: 'Industry-leading compensation and comprehensive benefits.' }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-gray-50 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Categories */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Explore Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAREER_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/careers/${generateCareerId(category.title)}`)}
                className="p-10 border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-black/5 transition-all group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  {category.description}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors">
                  Explore Roles
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            Current Openings
          </h2>
          
          <div className="space-y-6">
            {CURRENT_OPENINGS.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => navigate(`/careers/${generateCareerId(job.title)}`)}
                className="group p-8 border border-gray-200 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full">
                        {job.category}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-blue-600 transition-colors flex-shrink-0">
                    <ArrowRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-16 bg-black text-white rounded-[3rem] text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented professionals. Send us your resume and we'll keep you in mind for future opportunities and give you first opportunity.
          </p>
          <button className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
            Submit Your Resume
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
