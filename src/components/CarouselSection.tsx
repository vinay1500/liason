import { useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';

const SLIDE_DATA = [
  { title: "Global Expansion", category: "Strategy", image: "https://images.unsplash.com/photo-1701790644702-292e25180524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "Digital Assets", category: "Technology", image: "https://images.unsplash.com/photo-1761293877320-d78bffe24b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "Sustainable Energy", category: "Infrastructure", image: "https://images.unsplash.com/photo-1660760727016-2f0d1931ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "AI in Law", category: "Innovation", image: "https://images.unsplash.com/photo-1646583288948-24548aedffd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "M&A Trends", category: "Corporate", image: "https://images.unsplash.com/photo-1758519288417-d359ac3c494d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "Dispute Resolution", category: "Litigation", image: "https://images.unsplash.com/photo-1753787320279-e501f1a6ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "Financial Markets", category: "Regulation", image: "https://images.unsplash.com/photo-1764079833388-d480338ca16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "Modern Logistics", category: "Operations", image: "https://images.unsplash.com/photo-1726418529300-21a1be998883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  { title: "Regulatory Compliance", category: "Global", image: "https://images.unsplash.com/photo-1621562260628-b430926c9f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" }
];

export const CarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="relative group">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing px-6" ref={emblaRef}>
          <div className="flex gap-6">
            {SLIDE_DATA.map((slide, index) => (
              <div key={index} className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-black/5"
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70 mb-2 block">
                      {slide.category}
                    </span>
                    <h3 className="text-2xl font-semibold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {slide.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center justify-between">
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-4 rounded-full border border-gray-100 hover:bg-gray-50 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-4 rounded-full border border-gray-100 hover:bg-gray-50 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="h-[1px] flex-grow mx-12 bg-gray-100 relative">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};
