import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewsData = [
    {
      quote: "Timmerman completely altered how we experience our home. Their spatial vision transformed our dark, narrow kitchen footprint into a sweeping, sun-drenched architectural marvel that functions beautifully.",
      author: "Elena Rostova",
      project: "The Obsidian Culinary Suite Project",
      location: "Colombo"
    },
    {
      quote: "Absolute masters of material balance. The execution of the raw concrete walls paired with premium smoked walnut custom joinery brought an incredible sense of quiet luxury to our estate.",
      author: "Marcus Vance",
      project: "Linear Timber Pavilion Living",
      location: "Malibu"
    },
    {
      quote: "Their focus on custom lighting architecture is what sets them apart. At night, our studio transforms into a striking sanctuary. It feels like living inside a modern high-end art gallery layout.",
      author: "Sora Takahashi",
      project: "Sovereign Concrete Minimalism",
      location: "Tokyo"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section className="w-full bg-neutral-950 py-24 lg:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Decorative structure */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-gold-accent" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-gold-accent">Client Testimonials</p>
            <span className="h-[1px] w-6 bg-gold-accent" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-white">
            What They Say <span className="italic font-normal text-gray-300">About Us</span>
          </h2>
        </div>

        <div className="relative min-h-[320px] md:min-h-[260px] flex items-center justify-center bg-neutral-900/40 rounded-[2.5rem] p-8 md:p-16 border border-white/5 backdrop-blur-sm">
          <div className="absolute top-8 left-8 text-neutral-800 pointer-events-none">
            <Quote size={50} strokeWidth={1} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center space-y-8 max-w-3xl z-10"
            >
              <p className="font-serif text-lg sm:text-2xl font-light text-gray-200 leading-relaxed tracking-wide italic">
                "{reviewsData[activeIndex].quote}"
              </p>
              
              {/* Review identity */}
              <div className="space-y-1">
                <h4 className="text-sm uppercase tracking-[0.2em] font-medium text-white">
                  {reviewsData[activeIndex].author}
                </h4>
                <p className="text-xs text-gold-accent font-light">
                  {reviewsData[activeIndex].project} &mdash; {reviewsData[activeIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="rounded-full border border-white/10 p-4 text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft size={16} />
          </button>
          
          {/* Pagination */}
          <div className="flex gap-2">
            {reviewsData.map((_, i) => (
              <span 
                key={i}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  activeIndex === i ? 'w-8 bg-gold-accent' : 'w-2 bg-neutral-800'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="rounded-full border border-white/10 p-4 text-white hover:bg-white hover:text-black transition-all duration-300 focus:outline-none"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}