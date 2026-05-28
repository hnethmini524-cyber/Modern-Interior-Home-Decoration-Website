import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export default function PortfolioCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/5 aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
    >
      {/* Project image showcase */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Default linear overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />

      <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

      <div className="absolute top-6 right-6 z-20 translate-y-2 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-full bg-white/10 backdrop-blur-md p-4 text-white border border-white/20 hover:bg-white hover:text-black transition-colors duration-300">
          <Maximize2 size={16} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold-accent font-medium mb-2">
          {project.category}
        </p>
        <h3 className="font-serif text-2xl lg:text-3xl font-light text-white leading-tight tracking-wide">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 font-light max-h-0 opacity-0 overflow-hidden group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-out">
          {project.location} &mdash; {project.year}
        </p>
      </div>
    </motion.div>
  );
}