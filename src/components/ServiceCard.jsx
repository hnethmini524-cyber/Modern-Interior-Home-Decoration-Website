import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ number, title, description, image }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-neutral-900 p-6 h-[480px] border border-white/5"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-110 opacity-40 group-hover:opacity-50"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

      <div className="relative z-10 flex items-start justify-between">
        <span className="font-serif text-xl tracking-wider text-gold-accent italic">{number}</span>
        <div className="rounded-full border border-white/10 p-3 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Card content */}
      <div className="relative z-10 space-y-3">
        <h3 className="font-serif text-2xl lg:text-3xl font-light text-white tracking-wide">
          {title}
        </h3>
        <p className="text-xs lg:text-sm text-gray-400 font-light leading-relaxed tracking-wide">
          {description}
        </p>
        <div className="pt-2">
          <span className="inline-block w-0 h-[1px] bg-gold-accent transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
}