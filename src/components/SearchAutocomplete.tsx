import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Command } from 'cmdk';
import { SEARCHABLE_ITEMS } from '../data/appData';
import { motion, AnimatePresence } from 'motion/react';

export const SearchAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-black/5 w-48 lg:w-64 transition-all"
        />
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        {inputValue && (
          <button 
            onClick={() => setInputValue('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && inputValue.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-[100] max-h-[400px] overflow-hidden"
          >
            <Command className="w-full">
              <Command.List className="overflow-y-auto max-h-[400px] p-2">
                <Command.Empty className="p-4 text-sm text-gray-500 text-center">No results found.</Command.Empty>
                {SEARCHABLE_ITEMS.map((item, index) => (
                  <Command.Item 
                    key={index}
                    value={item}
                    onSelect={(val) => {
                      setInputValue(val);
                      setOpen(false);
                    }}
                    className="px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-50 aria-selected:bg-gray-100 transition-colors"
                  >
                    {item}
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
