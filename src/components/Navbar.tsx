import { useState } from 'react';
import { Menu, Globe, ChevronDown, User, Settings, LogOut, Bell, ChevronRight } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SearchAutocomplete } from './SearchAutocomplete';
import { SERVICES_DATA, CAREERS_DATA, LEGAL_EXPERTISE_DATA } from '../data/appData';

interface NavItemProps {
  name: string;
  dropdownContent?: React.ReactNode;
}

const NavDropdown = ({ name, dropdownContent }: NavItemProps) => {
  if (!dropdownContent) {
    return (
      <a 
        href="#" 
        className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap py-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {name}
      </a>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button 
          className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center gap-1 whitespace-nowrap outline-none py-4 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {name}
          <ChevronDown size={14} className="opacity-50" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="z-[60] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 animate-in fade-in zoom-in slide-in-from-top-2 duration-300 overflow-hidden"
          sideOffset={8}
          align={name === 'Services' || name === 'Legal Expertise' ? 'center' : 'start'}
          style={{ width: 'max-content' }}
        >
          {dropdownContent}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const Navbar = () => {
  const servicesDropdown = (
    <div className="w-[600px] p-6 flex flex-col gap-1">
      <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">
        Our Services
      </h5>
      {SERVICES_DATA.map((service, i) => (
        <DropdownMenu.Item 
          key={i} 
          className="group flex flex-col items-start px-4 py-3 rounded-xl hover:bg-gray-50 outline-none cursor-pointer transition-all border border-transparent hover:border-gray-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[14px] font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {service.split('–')[0].split(':')[0].trim()}
            </span>
          </div>
          <span className="text-[11px] text-gray-500 leading-relaxed ml-4 mt-0.5">
            {service.includes('–') ? service.split('–')[1].trim() : service.includes(':') ? service.split(':')[1].trim() : ''}
          </span>
        </DropdownMenu.Item>
      ))}
    </div>
  );

  const careersDropdown = (
    <div className="w-[320px] p-4 flex flex-col gap-1">
      <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">
        Join our team
      </h5>
      {CAREERS_DATA.map((career, i) => (
        <DropdownMenu.Item 
          key={i} 
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

  const [activeExpertiseIdx, setActiveExpertiseIdx] = useState(0);

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
            onMouseEnter={() => setActiveExpertiseIdx(i)}
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
            {LEGAL_EXPERTISE_DATA[activeExpertiseIdx].items.map((item, j) => (
              <DropdownMenu.Item 
                key={j} 
                className="group flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50/50 outline-none cursor-pointer transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm text-gray-700 group-hover:text-black transition-colors leading-relaxed">
                  {item}
                </span>
              </DropdownMenu.Item>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const globalDropdown = (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="text-xs font-bold uppercase text-gray-400 mb-2">Regions</h5>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Europe</li>
            <li className="hover:text-blue-600 cursor-pointer">Middle East</li>
            <li className="hover:text-blue-600 cursor-pointer">Asia Pacific</li>
            <li className="hover:text-blue-600 cursor-pointer">Americas</li>
            <li className="hover:text-blue-600 cursor-pointer">Africa</li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs font-bold uppercase text-gray-400 mb-2">Network</h5>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Office Locator</li>
            <li className="hover:text-blue-600 cursor-pointer">Partner Network</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const peopleDropdown = (
    <div className="p-4 space-y-4">
      <h5 className="text-xs font-bold uppercase text-gray-400 mb-2">Find your expert</h5>
      <div className="space-y-3">
        <DropdownMenu.Item className="p-2 rounded-lg hover:bg-gray-50 outline-none cursor-pointer border border-gray-100">
          <p className="text-sm font-bold">Search by Name</p>
          <p className="text-xs text-gray-500">Find a specific professional</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="p-2 rounded-lg hover:bg-gray-50 outline-none cursor-pointer border border-gray-100">
          <p className="text-sm font-bold">Browse by Sector</p>
          <p className="text-xs text-gray-500">Find expertise in your industry</p>
        </DropdownMenu.Item>
      </div>
    </div>
  );

  return (
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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex flex-col leading-none cursor-pointer group">
            <span className="text-2xl font-bold tracking-tighter transition-all group-hover:tracking-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              LEGAL CONNECT
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <NavDropdown name="Find People" dropdownContent={peopleDropdown} />
            <NavDropdown name="Services" dropdownContent={servicesDropdown} />
            <NavDropdown name="Careers" dropdownContent={careersDropdown} />
            <NavDropdown name="Legal Expertise" dropdownContent={expertiseDropdown} />
            <NavDropdown name="Global Coverage" dropdownContent={globalDropdown} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SearchAutocomplete />

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-3 pl-4 pr-1 py-1 bg-gray-900 text-white rounded-full hover:bg-black transition-all cursor-pointer group">
                <span className="text-sm font-semibold ml-1">Dashboard</span>
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content 
                className="z-[60] min-w-[220px] bg-white rounded-lg p-2 shadow-xl border border-gray-100 animate-in fade-in zoom-in duration-200"
                sideOffset={8}
                align="end"
              >
                <div className="px-3 py-2 border-b border-gray-50 mb-1">
                  <p className="text-sm font-bold">Alexander Vance</p>
                  <p className="text-xs text-gray-500">Senior Partner</p>
                </div>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm outline-none cursor-pointer hover:bg-gray-50 rounded-md transition-colors">
                  <User size={16} /> Profile
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

          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
