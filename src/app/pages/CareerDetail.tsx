import React from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Send, MapPin, Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const CareerDetail = () => {
  const { id } = useParams();
  const role = decodeURIComponent(id || '');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12">
          <ArrowLeft size={16} />
          Back to Careers
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-black/5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                OPEN POSITION
              </span>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {role}
              </h1>
            </div>
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors flex items-center gap-2">
              Apply Now
              <Send size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-100 mb-12">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
              </div>
              <p className="text-sm font-semibold">Global / Remote</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Type</span>
              </div>
              <p className="text-sm font-semibold">Full-time</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Posted</span>
              </div>
              <p className="text-sm font-semibold">2 days ago</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <Send size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Department</span>
              </div>
              <p className="text-sm font-semibold">Legal Ops</p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4">About the Role</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                We are looking for exceptional {role.toLowerCase()} to join our fast-paced legal team. You will be responsible for handling high-stakes matters while collaborating with our global network of experts. This is a unique opportunity to work at the intersection of law, technology, and global finance.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Key Responsibilities</h3>
              <ul className="list-disc pl-5 text-gray-500 space-y-2 font-light">
                <li>Collaborate with senior counsel on complex multi-jurisdictional matters.</li>
                <li>Conduct in-depth legal research and draft high-quality legal documents.</li>
                <li>Participate in client meetings and provide strategic legal input.</li>
                <li>Stay updated with the latest legal technologies and industry trends.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Qualifications</h3>
              <ul className="list-disc pl-5 text-gray-500 space-y-2 font-light">
                <li>Exceptional academic record in Law or related field.</li>
                <li>Strong analytical and communication skills.</li>
                <li>Ability to work under pressure and meet tight deadlines.</li>
                <li>Passion for innovation in the legal industry.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
