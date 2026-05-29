import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  // Animation presets for staggered clean entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative h-[95vh] w-full bg-neutral-950 overflow-hidden flex items-end">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105 animate-subtle-zoom"
        style={{ backgroundImage: `url('/hero.png')` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-neutral-950/20" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 grid md:grid-cols-12 gap-8 items-end">
        
        {/* Main brand message */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-8 space-y-6"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-gold-accent" />
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-gold-accent">Architectural Excellence</p>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight"
          >
            Elevating Your <br />
            <span className="italic font-normal text-gray-100">Everyday Living</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-sm sm:text-base text-gray-300 font-light leading-relaxed tracking-wide"
          >
            We curate spaces that harmoniously balance contemporary luxury with pure architectural utility. Every line, texturing structure, and lighting angle is tailored precisely to your story.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <button className="group relative overflow-hidden bg-gold-accent text-neutral-950 px-8 py-4 rounded-full text-xs uppercase font-medium tracking-[0.2em] flex items-center gap-2 transition-all duration-300 hover:pr-10 shadow-xl">
              Explore Our Portfolio
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex md:col-span-4 flex-col items-end text-right border-l border-white/10 pl-6 self-end justify-self-end space-y-4 mb-2"
        >
          <div className="space-y-1">
            <p className="font-serif text-2xl text-white italic">01 / 04</p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400">Luxury Home Decoration Project</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}