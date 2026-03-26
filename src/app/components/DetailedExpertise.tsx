import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import { LEGAL_EXPERTISE_DATA } from '../data/appData';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import jsPDF from 'jspdf';

export const DetailedExpertise = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const navigate = useNavigate();

  // Generate a URL-friendly ID from the item text
  const generateItemId = (item: string) => {
    return item.split(':')[0]
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  // Get short description (first 120 characters)
  const getShortDescription = (item: string) => {
    const text = item.includes(':') ? item.split(':').slice(1).join(':').trim() : item;
    return text.length > 120 ? text.substring(0, 120) + '...' : text;
  };

  // Generate PDF with all legal expertise information
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    let yPosition = margin;

    // Helper function to check if we need a new page
    const checkAddPage = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
        return true;
      }
      return false;
    };

    // Add text with wrapping
    const addWrappedText = (text: string, x: number, fontSize: number, maxWidth: number, lineHeight: number) => {
      pdf.setFontSize(fontSize);
      const lines = pdf.splitTextToSize(text, maxWidth);
      lines.forEach((line: string) => {
        checkAddPage(lineHeight);
        pdf.text(line, x, yPosition);
        yPosition += lineHeight;
      });
    };

    // Cover Page
    pdf.setFillColor(0, 0, 0);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(36);
    pdf.text('Legal Expertise', pageWidth / 2, pageHeight / 2 - 20, { align: 'center' });
    
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Comprehensive Practice Areas Guide', pageWidth / 2, pageHeight / 2 + 10, { align: 'center' });
    
    pdf.setFontSize(12);
    pdf.text('Professional Services Firm', pageWidth / 2, pageHeight / 2 + 30, { align: 'center' });
    pdf.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), pageWidth / 2, pageHeight / 2 + 45, { align: 'center' });

    // Table of Contents
    pdf.addPage();
    yPosition = margin;
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(24);
    pdf.text('Table of Contents', margin, yPosition);
    yPosition += 15;

    pdf.setDrawColor(37, 99, 235); // Blue color
    pdf.setLineWidth(0.5);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    LEGAL_EXPERTISE_DATA.forEach((category, index) => {
      checkAddPage(8);
      pdf.setTextColor(37, 99, 235);
      pdf.text(`${index + 1}. ${category.category}`, margin + 5, yPosition);
      yPosition += 8;
    });

    // Content Pages
    LEGAL_EXPERTISE_DATA.forEach((category, catIndex) => {
      pdf.addPage();
      yPosition = margin;

      // Category Header with colored background
      pdf.setFillColor(37, 99, 235); // Blue background
      pdf.rect(0, yPosition - 8, pageWidth, 20, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(20);
      pdf.text(`${catIndex + 1}. ${category.category}`, margin, yPosition + 5);
      yPosition += 25;

      // Category Description
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
      const descLines = pdf.splitTextToSize(category.description, contentWidth);
      descLines.forEach((line: string) => {
        checkAddPage(6);
        pdf.text(line, margin, yPosition);
        yPosition += 6;
      });
      
      yPosition += 8;

      // Blue divider line
      pdf.setDrawColor(37, 99, 235);
      pdf.setLineWidth(0.3);
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;

      // Expertise Items
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);
      checkAddPage(8);
      pdf.text('Expertise Areas:', margin, yPosition);
      yPosition += 10;

      category.items.forEach((item, itemIndex) => {
        const title = item.split(':')[0];
        const description = item.includes(':') ? item.split(':').slice(1).join(':').trim() : '';

        // Check if we need space for the item (title + description)
        const estimatedSpace = 20 + (description ? 15 : 0);
        checkAddPage(estimatedSpace);

        // Item number and title with light gray background
        pdf.setFillColor(249, 250, 251); // Light gray
        pdf.rect(margin, yPosition - 5, contentWidth, 10, 'F');
        
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.setTextColor(37, 99, 235);
        pdf.text(`${itemIndex + 1}. ${title}`, margin + 3, yPosition);
        yPosition += 10;

        // Description
        if (description) {
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(10);
          pdf.setTextColor(80, 80, 80);
          const descLines = pdf.splitTextToSize(description, contentWidth - 6);
          descLines.forEach((line: string) => {
            checkAddPage(5);
            pdf.text(line, margin + 6, yPosition);
            yPosition += 5;
          });
          yPosition += 3;
        }

        yPosition += 5;
      });
    });

    // Footer on all pages (except cover)
    const totalPages = pdf.internal.pages.length - 1; // Exclude the internal placeholder
    for (let i = 2; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(9);
      pdf.setTextColor(150, 150, 150);
      pdf.setFont('helvetica', 'normal');
      pdf.text(
        `Page ${i - 1} of ${totalPages - 1}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
      pdf.text(
        'Legal Expertise Guide | Confidential',
        margin,
        pageHeight - 10
      );
    }

    // Save the PDF
    pdf.save('Legal-Expertise-Comprehensive-Guide.pdf');
  };

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
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    onDoubleClick={() => navigate(`/expertise/${encodeURIComponent(item.category)}`)}
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
                <button 
                  type="button"
                  onClick={generatePDF}
                  className="flex items-center gap-3 text-sm font-bold hover:text-blue-600 transition-colors group"
                >
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
                  {LEGAL_EXPERTISE_DATA[activeTab].items.map((item, i) => {
                    const itemId = generateItemId(item);
                    const isExpanded = expandedItem === i;
                    const title = item.split(':')[0];
                    const description = item.includes(':') ? item.split(':').slice(1).join(':').trim() : '';
                    const shortDesc = getShortDescription(item);

                    return (
                      <div 
                        key={i} 
                        className="group relative"
                        onMouseEnter={() => setExpandedItem(i)}
                        onMouseLeave={() => setExpandedItem(null)}
                      >
                        <div className="flex flex-col gap-3">
                          <div className={`h-0.5 ${isExpanded ? 'w-8' : 'w-0'} bg-blue-600 transition-all duration-300`} />
                          <h4 className={`text-lg font-semibold ${isExpanded ? 'text-blue-600' : ''} transition-colors`}>
                            {title}
                          </h4>
                          
                          {/* Expandable Description */}
                          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                            {description && (
                              <p className="text-sm text-gray-600 leading-relaxed font-light line-clamp-3 mb-3">
                                {shortDesc}
                              </p>
                            )}
                            <button
                              type="button"
                              onClick={() => navigate(`/expertise-item/${itemId}`)}
                              className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
                            >
                              Read More
                              <ArrowRight size={14} />
                            </button>
                          </div>

                          {/* Original description (hidden when expanded) */}
                          {!isExpanded && description && (
                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                              {description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-12">
                  <button type="button" className="px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors flex items-center gap-3">
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