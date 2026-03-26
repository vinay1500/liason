import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, FileText, Download, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const REPORTS = [
  {
    id: 1,
    title: 'Global M&A Market Outlook 2026',
    subtitle: 'Navigating cross-border transactions in a changing regulatory landscape',
    category: 'Corporate & M&A',
    date: 'March 2026',
    pages: 48,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Banking & Finance Sector Review',
    subtitle: 'Key trends in lending, regulatory frameworks, and fintech innovation',
    category: 'Banking & Finance',
    date: 'February 2026',
    pages: 62,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Capital Markets Quarterly Update',
    subtitle: 'IPO activity, securities regulation, and market trends',
    category: 'Capital Markets',
    date: 'January 2026',
    pages: 36,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 4,
    title: 'ESG & Sustainability Report',
    subtitle: 'Corporate governance, environmental compliance, and social responsibility',
    category: 'Regulatory',
    date: 'December 2025',
    pages: 54,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Technology & Digital Assets',
    subtitle: 'Blockchain, cryptocurrency regulation, and AI governance',
    category: 'Technology',
    date: 'November 2025',
    pages: 42,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Dispute Resolution Insights',
    subtitle: 'Arbitration trends, litigation strategies, and alternative dispute resolution',
    category: 'Dispute Resolution',
    date: 'October 2025',
    pages: 38,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

export const MarketReports = () => {
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
            RESEARCH & ANALYSIS
          </span>
          <h1 className="text-6xl md:text-8xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Market Reports
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            In-depth analysis and insights into legal trends, market dynamics, and regulatory developments shaping global business.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: FileText, value: '120+', label: 'Published Reports' },
            { icon: TrendingUp, value: '40+', label: 'Industry Sectors' },
            { icon: Calendar, value: 'Quarterly', label: 'Update Frequency' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-gray-50 rounded-[2.5rem] space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm">
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Latest Reports
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REPORTS.map((report, i) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                  <ImageWithFallback
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {report.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={18} className="text-black" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {report.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FileText size={14} />
                      {report.pages} pages
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {report.subtitle}
                  </p>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-2">
                    <Download size={14} />
                    Download Report
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 p-16 bg-black text-white rounded-[3rem] text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Subscribe to Market Reports
          </h2>
          <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Receive our latest research and analysis directly in your inbox.
          </p>
          <button className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
            Subscribe Now
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
