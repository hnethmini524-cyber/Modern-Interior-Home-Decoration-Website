import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import PortfolioCard from '../components/PortfolioCard';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Kitchen', 'Living Room', 'Wardrobe', 'Minimalist'];

  const projectsData = [
    {
      id: 1,
      title: "The Obsidian Culinary Suite",
      category: "Kitchen",
      location: "Colombo, LK",
      year: "2026",
      image: "/kitchen.png" 
    },
    {
      id: 2,
      title: "Walnut Slate Walk-In Lounge",
      category: "Wardrobe",
      location: "Downing St, UK",
      year: "2025",
      image: "/living-room.png"
    },
    {
      id: 3,
      title: "Sovereign Concrete Minimalism",
      category: "Minimalist",
      location: "Malibu, USA",
      year: "2026",
      image: "/hero.png"
    },
    {
      id: 4,
      title: "Monolithic Quartz Island Studio",
      category: "Kitchen",
      location: "Kandy, LK",
      year: "2026",
      image: "/kitchen.png"
    },
    {
      id: 5,
      title: "Linear Timber Pavilion Living",
      category: "Living Room",
      location: "Tokyo, JP",
      year: "2025",
      image: "/living-room.png"
    },
    {
      id: 6,
      title: "The Smoked Oak Wardrobe Space",
      category: "Wardrobe",
      location: "Milan, IT",
      year: "2026",
      image: "/library.png"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section className="w-full bg-neutral-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-gold-accent" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-gold-accent">Selected Works</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-white">
            Our Architectural <span className="italic font-normal text-gray-300">Portfolio</span>
          </h2>
        </div>

        {/* Navigation filters */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-white/10 pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative text-xs tracking-widest uppercase font-medium pb-2 transition-colors duration-300 focus:outline-none ${
                activeFilter === cat ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div 
                  layoutId="activeFilterLine"
                  className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-gold-accent"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <PortfolioCard 
                key={project.id} 
                project={project} 
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 backdrop-blur-md p-4 sm:p-6 md:p-10"
          >
            <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/5 border border-white/10 p-4 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* odal container card */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative max-w-6xl w-full bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/10 grid md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]"
            >
              <div 
                className="md:col-span-7 h-[40vh] md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              />
              
              <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-between overflow-y-auto bg-neutral-900 text-white">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-accent font-medium mb-2">
                      {selectedProject.category}
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4 border-t border-b border-white/10 py-6 text-sm text-gray-400 font-light">
                    <div className="flex justify-between"><span className="text-gray-500">Location</span><span>{selectedProject.location}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Completed</span><span>{selectedProject.year}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Design Studio</span><span>Timmerman Private Lab</span></div>
                  </div>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    A comprehensive architectural study utilizing hidden structural frameworks and bespoke material combinations. Designed to preserve sweeping spatial flows while maintaining absolute premium functionality.
                  </p>
                </div>

                <div className="pt-8">
                  <button className="group w-full border border-white/20 rounded-full py-4 text-xs uppercase tracking-widest text-white flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-300">
                    Request Full Project Case Study
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}