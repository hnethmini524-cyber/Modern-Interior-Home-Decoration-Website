import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-4">
        {/* Brand identity */}
        <a href="#" className="font-serif text-xl md:text-2xl font-medium tracking-widest text-white uppercase">
          VelvetHaus <span className="font-light text-gold-accent"> Interiors</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-xs tracking-widest text-gray-200 uppercase font-medium transition-colors duration-300 hover:text-white group"
            >
              {link.name}
              <span className="absolute bottom-[-6px] left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-gold-accent border border-white/20 rounded-full px-6 py-2 text-xs uppercase tracking-widest text-black hover:bg-white hover:text-black transition-all duration-300">
            Enquire Now
          </button>
        </div>

        {/* Mobile menu button for responsiveness */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-md p-6 border-b border-white/10 md:hidden flex flex-col space-y-4 text-center"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-widest text-gray-300 uppercase py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}