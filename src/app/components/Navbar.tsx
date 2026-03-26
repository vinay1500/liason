import React, { useState, useEffect } from 'react';
import { Menu, Globe, ChevronDown, User, Settings, LogOut, Bell, ChevronRight, X } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SearchAutocomplete } from './SearchAutocomplete';
import { SERVICES_DATA, CAREERS_DATA, LEGAL_EXPERTISE_DATA } from '../data/appData';
import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const navigate = useNavigate();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeExpertiseIdx, setActiveExpertiseIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);

  // Close mobile menu when screen gets larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Helper function to generate URL-friendly IDs from item text
  const generateItemId = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  const handleNavigation = (path: string, closeDropdown: () => void) => {
    closeDropdown();
    navigate(path);
  };

  const handleMobileNavigation = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const servicesDropdown = (
    <div className="w-[600px] p-6 flex flex-col gap-1">
      <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">
        Our Services
      </h5>
      {SERVICES_DATA.map((service, i) => {
        const title = service.split('–')[0].split(':')[0].trim();
        return (
          <DropdownMenu.Item 
            key={i} 
            onSelect={() => handleNavigation(`/services/${encodeURIComponent(title)}`, () => setServicesOpen(false))}
            className="group flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 outline-none cursor-pointer transition-all border border-transparent hover:border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[14px] font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {title}
              </span>
            </div>
          </DropdownMenu.Item>
        );
      })}
    </div>
  );

  const careersDropdown = (
    <div className="w-[320px] p-4 flex flex-col gap-1">
      <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">
        Join our team
      </h5>
      <DropdownMenu.Item 
        onSelect={() => handleNavigation('/careers', () => setCareersOpen(false))}
        className="group flex items-center justify-between px-4 py-4 rounded-xl hover:bg-blue-50 outline-none cursor-pointer transition-all border border-blue-100 bg-blue-50/30 mb-2"
      >
        <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
          View All Careers
        </span>
        <ChevronRight size={14} className="text-blue-600 opacity-60 group-hover:opacity-100 transition-all" />
      </DropdownMenu.Item>
      {CAREERS_DATA.map((career, i) => (
        <DropdownMenu.Item 
          key={i} 
          onSelect={() => handleNavigation(`/careers/${encodeURIComponent(career)}`, () => setCareersOpen(false))}
          className="group flex items-center justify-between px-4 py-4 rounded-xl hover:bg-gray-50 outline-none cursor-pointer transition-all border border-transparent hover:border-gray-100"
        >
          <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {career}
          </span>
          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        </DropdownMenu.Item>
      ))}
    </div>
  );

  const expertiseDropdown = (
    <div className="w-[1000px] flex h-[600px] overflow-hidden">
      {/* Sidebar Categories */}
      <div className="w-1/3 bg-gray-50/50 border-r border-gray-100 p-6 flex flex-col gap-2">
        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">
          Practice Areas
        </h5>
        {LEGAL_EXPERTISE_DATA.map((cat, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={() => setActiveExpertiseIdx(i)}
            onClick={() => handleNavigation(`/expertise/${encodeURIComponent(cat.category)}`, () => setExpertiseOpen(false))}
            className={`flex items-center justify-between px-4 py-4 rounded-xl text-left transition-all group ${
              activeExpertiseIdx === i 
                ? 'bg-white shadow-lg shadow-black/5 text-blue-600 font-semibold' 
                : 'text-gray-600 hover:bg-gray-100/50'
            }`}
          >
            <span className="text-sm">{cat.category}</span>
            <ChevronDown size={14} className={`opacity-40 transition-transform ${activeExpertiseIdx === i ? '-rotate-90 opacity-100' : ''}`} />
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-2/3 p-10 bg-white overflow-y-auto custom-scrollbar">
        <div className="max-w-xl">
          <h4 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {LEGAL_EXPERTISE_DATA[activeExpertiseIdx].category}
          </h4>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed italic">
            {LEGAL_EXPERTISE_DATA[activeExpertiseIdx].description}
          </p>
          
          <div className="grid grid-cols-1 gap-y-4">
            {LEGAL_EXPERTISE_DATA[activeExpertiseIdx].items.map((item, j) => {
              const itemId = generateItemId(item);
              return (
                <DropdownMenu.Item 
                  key={j} 
                  onSelect={() => handleNavigation(`/expertise-item/${itemId}`, () => setExpertiseOpen(false))}
                  className="group flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50/50 outline-none cursor-pointer transition-all"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm text-gray-700 group-hover:text-black transition-colors leading-relaxed">
                    {item}
                  </span>
                </DropdownMenu.Item>
              );
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button 
              type="button"
              onClick={() => handleNavigation(`/expertise/${encodeURIComponent(LEGAL_EXPERTISE_DATA[activeExpertiseIdx].category)}`, () => setExpertiseOpen(false))}
              className="text-xs font-bold uppercase tracking-widest text-blue-600 hover:underline"
            >
              View Full Practice Overview →
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="bg-black text-white text-[10px] uppercase tracking-[0.2em] py-2 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center font-bold">
            <div className="flex gap-4">
              <span className="hover:text-gray-300 cursor-pointer transition-colors">Global Office Network</span>
              <span className="opacity-40">|</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">Contact Us</span>
            </div>
            <div className="flex gap-4">
              <Globe size={12} className="inline mr-1" />
              <span className="hover:text-gray-300 cursor-pointer transition-colors">EN</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link to="/" className="flex flex-col leading-none cursor-pointer group">
              <span className="text-xl md:text-2xl font-bold tracking-tighter transition-all group-hover:tracking-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                LEGAL CONNECT
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/about" className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap py-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                About Us
              </Link>
              
              <DropdownMenu.Root open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenu.Trigger 
                  className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap outline-none py-4 cursor-pointer bg-transparent border-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Services
                  <ChevronDown size={14} className="opacity-50" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="z-[60] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 animate-in fade-in zoom-in slide-in-from-top-2 duration-300 overflow-hidden"
                    sideOffset={8}
                    align="center"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    {servicesDropdown}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <DropdownMenu.Root open={expertiseOpen} onOpenChange={setExpertiseOpen}>
                <DropdownMenu.Trigger 
                  className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap outline-none py-4 cursor-pointer bg-transparent border-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Legal Expertise
                  <ChevronDown size={14} className="opacity-50" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="z-[60] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 animate-in fade-in zoom-in slide-in-from-top-2 duration-300 overflow-hidden"
                    sideOffset={8}
                    align="center"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    {expertiseDropdown}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <Link to="/insights" className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap py-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Blogs and Insights
              </Link>
              
              <DropdownMenu.Root open={careersOpen} onOpenChange={setCareersOpen}>
                <DropdownMenu.Trigger 
                  className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap outline-none py-4 cursor-pointer bg-transparent border-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Careers
                  <ChevronDown size={14} className="opacity-50" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="z-[60] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 animate-in fade-in zoom-in slide-in-from-top-2 duration-300 overflow-hidden"
                    sideOffset={8}
                    align="start"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    {careersDropdown}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <Link to="/" className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap py-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Global Coverage
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <SearchAutocomplete />
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <button 
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-gray-900 text-white rounded-full hover:bg-black transition-all cursor-pointer group"
              >
                <span className="text-xs md:text-sm font-semibold">Dashboard</span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-white/50 transition-colors -mr-1">
                  <img 
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>

              <DropdownMenu.Root open={userMenuOpen} onOpenChange={setUserMenuOpen}>
                <DropdownMenu.Trigger 
                  type="button"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none cursor-pointer bg-transparent border-0"
                >
                  <ChevronDown size={16} className="text-gray-400" />
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="z-[60] min-w-[220px] bg-white rounded-lg p-2 shadow-xl border border-gray-100 animate-in fade-in zoom-in duration-200"
                    sideOffset={8}
                    align="end"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <div className="px-3 py-2 border-b border-gray-50 mb-1">
                      <p className="text-sm font-bold">Alexander Vance</p>
                      <p className="text-xs text-gray-500">Senior Partner</p>
                    </div>
                    <DropdownMenu.Item 
                      onSelect={() => handleNavigation('/dashboard', () => setUserMenuOpen(false))}
                      className="flex items-center gap-2 px-3 py-2 text-sm outline-none cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <User size={16} /> Dashboard
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm outline-none cursor-pointer hover:bg-gray-50 rounded-md transition-colors">
                      <Settings size={16} /> Settings
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm outline-none cursor-pointer hover:bg-gray-50 rounded-md transition-colors">
                      <Bell size={16} /> Notifications
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-px bg-gray-100 my-1" />
                    <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 outline-none cursor-pointer hover:bg-red-50 rounded-md transition-colors">
                      <LogOut size={16} /> Sign out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            <button 
              type="button" 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white z-[70] lg:hidden shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10">
                <span className="text-xl font-bold tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
                  LEGAL CONNECT
                </span>
                <button 
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* User Profile Section */}
              <div className="p-6 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Alexander Vance</p>
                    <p className="text-xs text-gray-500">Senior Partner</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleMobileNavigation('/dashboard')}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-black transition-colors"
                >
                  Go to Dashboard
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-6 space-y-2">
                <Link 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">About Us</span>
                  <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </Link>

                {/* Services Accordion */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Services</span>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        <div className="p-2 space-y-1">
                          {SERVICES_DATA.map((service, i) => {
                            const title = service.split('–')[0].split(':')[0].trim();
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => handleMobileNavigation(`/services/${encodeURIComponent(title)}`)}
                                className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors text-sm text-gray-700 hover:text-blue-600"
                              >
                                {title}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Legal Expertise Accordion */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Legal Expertise</span>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform ${mobileExpertiseOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpertiseOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        <div className="p-2 space-y-1">
                          {LEGAL_EXPERTISE_DATA.map((cat, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleMobileNavigation(`/expertise/${encodeURIComponent(cat.category)}`)}
                              className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors text-sm font-medium text-gray-700 hover:text-blue-600"
                            >
                              {cat.category}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/insights" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Blogs and Insights</span>
                  <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </Link>

                {/* Careers Accordion */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">Careers</span>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform ${mobileCareersOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileCareersOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        <div className="p-2 space-y-1">
                          <button
                            type="button"
                            onClick={() => handleMobileNavigation('/careers')}
                            className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors text-sm font-bold text-blue-600"
                          >
                            View All Careers
                          </button>
                          {CAREERS_DATA.map((career, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleMobileNavigation(`/careers/${encodeURIComponent(career)}`)}
                              className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors text-sm text-gray-700 hover:text-blue-600"
                            >
                              {career}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Global Coverage</span>
                  <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-100 space-y-2">
                <button 
                  type="button"
                  className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left"
                >
                  <Settings size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">Settings</span>
                </button>
                <button 
                  type="button"
                  className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors text-left"
                >
                  <Bell size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">Notifications</span>
                </button>
                <button 
                  type="button"
                  className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-red-50 transition-colors text-left text-red-600"
                >
                  <LogOut size={18} />
                  <span className="text-sm font-medium">Sign out</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
