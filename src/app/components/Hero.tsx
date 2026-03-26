import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

interface HeroProps {
  image: string;
}

export const Hero = ({ image }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="A&O Shearman Global Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 
            className="text-5xl md:text-8xl mb-8 leading-[1.1] tracking-tight" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowering your<br />global legal strategy.
          </h1>
          <p 
            className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Legal Connect provides a seamless platform for cross-border collaboration and specialized legal insights for the modern global enterprise.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              type="button"
              onClick={() => navigate('/about')}
              className="px-8 py-4 bg-white text-black font-semibold rounded-none hover:bg-gray-100 transition-colors"
            >
              Read more
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};