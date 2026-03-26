import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const NEWS_ITEMS = [
  {
    id: 1,
    type: 'Press Release',
    date: 'March 8, 2026',
    title: 'Legal Connect Advises on $2.4B Cross-Border Acquisition',
    excerpt: 'Our team successfully advised a leading technology company on its landmark acquisition of a European software firm.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true
  },
  {
    id: 2,
    type: 'Award',
    date: 'March 5, 2026',
    title: 'Legal Connect Named "Law Firm of the Year" for M&A',
    excerpt: 'Recognized for outstanding achievement in cross-border mergers and acquisitions across multiple jurisdictions.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: true
  },
  {
    id: 3,
    type: 'Firm News',
    date: 'March 1, 2026',
    title: 'New Partners Appointed Across Global Offices',
    excerpt: 'We are proud to announce the promotion of 12 new partners across our Corporate, Finance, and Technology practices.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false
  },
  {
    id: 4,
    type: 'Press Release',
    date: 'February 28, 2026',
    title: 'Legal Connect Expands Asia-Pacific Presence',
    excerpt: 'Opening of new office in Singapore strengthens our capability to serve clients in the fastest-growing region.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false
  },
  {
    id: 5,
    type: 'Event',
    date: 'February 25, 2026',
    title: 'Annual Legal Innovation Summit 2026',
    excerpt: 'Join us for our flagship event exploring the intersection of law, technology, and business transformation.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false
  },
  {
    id: 6,
    type: 'Award',
    date: 'February 20, 2026',
    title: 'Top Rankings in Legal 500 and Chambers',
    excerpt: 'Legal Connect receives top-tier rankings across multiple practice areas in the latest industry guides.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false
  },
  {
    id: 7,
    type: 'Firm News',
    date: 'February 15, 2026',
    title: 'Launch of ESG Advisory Practice',
    excerpt: 'New dedicated team to help clients navigate environmental, social, and governance challenges.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false
  },
  {
    id: 8,
    type: 'Press Release',
    date: 'February 10, 2026',
    title: 'Legal Connect Advises on Major IPO',
    excerpt: 'Successfully guided a fintech unicorn through its $1.8B initial public offering on multiple exchanges.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    featured: false
  }
];

const NEWS_TYPES = ['All', 'Press Release', 'Award', 'Firm News', 'Event'];

export const Newsroom = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = NEWS_ITEMS.filter(item => {
    const typeMatch = selectedType === 'All' || item.type === selectedType;
    const searchMatch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && searchMatch;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Press Release':
        return 'bg-blue-600';
      case 'Award':
        return 'bg-yellow-600';
      case 'Firm News':
        return 'bg-green-600';
      case 'Event':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 block">
            LATEST UPDATES
          </span>
          <h1 className="text-6xl md:text-8xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Newsroom
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
            Stay up to date with the latest news, announcements, and achievements from Legal Connect.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 rounded-full border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {NEWS_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedType === type
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Featured
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredNews.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-2 ${getTypeColor(item.type)} text-white text-[10px] font-bold uppercase tracking-widest rounded-full`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {item.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors pt-2">
                      Read More
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        {regularNews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              All News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {regularNews.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 ${getTypeColor(item.type)} text-white text-[9px] font-bold uppercase tracking-widest rounded-full`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-gray-400 font-light">No news items found matching your criteria.</p>
          </div>
        )}

        {/* Media Contact */}
        <div className="mt-32 p-16 bg-gray-50 rounded-[3rem]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Media Inquiries
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              For press inquiries and media relations, please contact our communications team.
            </p>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">press@legalconnect.com</p>
              <p className="text-sm">+1 (555) 000-1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
