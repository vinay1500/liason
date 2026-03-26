import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export const ExpertiseItemDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // For now, we'll use placeholder content - this will be populated from actual data
  const getItemContent = () => {
    return {
      title: id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Expertise Item',
      content: `
        <h2>${id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
        <p>This is a detailed page about ${id}. Our expert legal team provides comprehensive services in this area.</p>
        
        <h3>Our Services Include:</h3>
        <ul>
          <li>Expert consultation and strategic advice</li>
          <li>Document drafting and review</li>
          <li>Negotiation support</li>
          <li>Litigation and dispute resolution</li>
          <li>Compliance and regulatory guidance</li>
        </ul>
        
        <h3>Why Choose Our Services?</h3>
        <p>With years of experience and deep expertise in ${category}, our legal professionals understand the complexities and nuances of this practice area. We provide tailored solutions that protect your interests while achieving your goals.</p>
        
        <h3>Get Started</h3>
        <p>Contact us today to discuss how we can help with your ${id} needs. Our team is ready to provide the expert guidance you require.</p>
      `
    };
  };

  const item = getItemContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Expertise
        </button>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-4">
            {category}
          </span>
          <h1 
            className="text-5xl md:text-6xl mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </h1>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: item.content }}
          style={{ 
            fontFamily: "'Inter', sans-serif",
            lineHeight: '1.8'
          }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <button className="px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </article>
    </div>
  );
};
