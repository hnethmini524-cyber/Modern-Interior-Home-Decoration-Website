import { motion } from 'framer-motion';
import { Award, Compass, Layers, Sparkles } from 'lucide-react';

export default function AboutUs() {
  const metrics = [
    { icon: <Award size={20} className="text-gold-accent" />, value: "12+", label: "Years Premium Design Expertise" },
    { icon: <Layers size={20} className="text-gold-accent" />, value: "340+", label: "Bespoke Residences Realized" },
    { icon: <Compass size={20} className="text-gold-accent" />, value: "15+", label: "International Design Awards" },
    { icon: <Sparkles size={20} className="text-gold-accent" />, value: "100%", label: "Client Vision Satisfaction" }
  ];

  return (
    <section className="relative w-full bg-neutral-950 text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left side: Content & dynamic grid metrics */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold-accent" />
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-gold-accent">The Studio Narrative</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight tracking-wide">
              Crafting Spaces with <br />
              <span className="italic font-normal text-gray-300">Quiet Luxury</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed tracking-wide">
            We believe that an interior shouldn't just look spectacular; it must compose a sensory narrative. By blending natural raw textures, minimal geometric proportions, and architectural lighting layouts, we shape custom sanctuaries tailored perfectly to your lifestyle.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {metrics.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-5 rounded-2xl bg-neutral-900/50 border border-white/5 space-y-2 hover:border-gold-accent/20 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-light text-white tracking-tight">{item.value}</span>
                  {item.icon}
                </div>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium leading-tight">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side: Clean structured asymmetric images */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-[550px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-7 h-full rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-2xl border border-white/5"
            style={{ backgroundImage: `url('/kitchen.png')` }} 
          />
          <div className="col-span-5 grid grid-rows-2 gap-4 h-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-[2rem] overflow-hidden bg-cover bg-center border border-white/5"
              style={{ backgroundImage: `url('/living-room.png')` }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="rounded-[2rem] overflow-hidden bg-cover bg-center border border-white/5"
              style={{ backgroundImage: `url('/library.png')` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}