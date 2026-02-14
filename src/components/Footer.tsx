import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Section 1: Brand & Contact */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
              LEGAL CONNECT
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">contact@legalconnect.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">+1 (555) 000-1234</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                <MapPin size={18} className="mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm leading-relaxed">
                  125 Global Financial Center<br />
                  London, EC2V 6BT<br />
                  United Kingdom
                </span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Expertise</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Corporate & M&A</li>
                <li className="hover:text-white cursor-pointer transition-colors">Banking & Finance</li>
                <li className="hover:text-white cursor-pointer transition-colors">Capital Markets</li>
                <li className="hover:text-white cursor-pointer transition-colors">Dispute Resolution</li>
                <li className="hover:text-white cursor-pointer transition-colors">Digital Assets & AI</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Legal Insights</li>
                <li className="hover:text-white cursor-pointer transition-colors">Market Reports</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Newsroom</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pro Bono</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Map Section */}
          <div className="relative h-full min-h-[300px] lg:min-h-0 group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Global Coverage</h4>
            <div className="relative w-full aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
              {/* Stylized SVG Map Placeholder */}
              <div className="absolute inset-0 p-8 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                <Globe size={180} strokeWidth={0.5} className="text-blue-500 animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-1">Our Network</p>
                <p className="text-[10px] text-gray-400">Presence in 40+ countries across 5 continents.</p>
                <button className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:text-blue-400 transition-colors">
                  View Full Map
                </button>
              </div>
              {/* Pins on map */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
              <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
              <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Legal Disclaimer</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
          <p>© 2026 LEGAL CONNECT GLOBAL. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};
