import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Reviews', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer className="relative w-full bg-neutral-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105 animate-subtle-zoom"
        style={{ backgroundImage: `url('/hero.png')` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950 to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
        
        {/* Information column */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="font-serif text-3xl tracking-wide font-light">
            TIMMERMAN
          </h3>
          <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-sm tracking-wide">
            Architecting spaces of quiet luxury and sensory narratives. Every structural detail is carefully tailored to curate bespoke realities that resonate with quiet elegance.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="rounded-full border border-white/10 p-3 text-gray-400 hover:text-white hover:border-white transition-all duration-300">
              <MessageSquare size={14} />
            </a>
            <a href="#" className="rounded-full border border-white/10 p-3 text-gray-400 hover:text-white hover:border-white transition-all duration-300">
              <Mail size={14} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2 lg:col-start-6 space-y-4">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold-accent font-medium">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm font-light text-gray-400">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="group relative inline-block hover:text-white transition-colors duration-300 py-1">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold-accent font-medium">
            Contact Us
          </h4>
          <ul className="space-y-3.5 text-xs md:text-sm font-light text-gray-400">
            <li className="flex items-center gap-3 group">
              <Phone size={14} className="text-gray-500 group-hover:text-gold-accent transition-colors duration-300" />
              <a href="tel:+94123456789" className="hover:text-white transition-colors duration-300">+94 11 234 5678</a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={14} className="text-gray-500 group-hover:text-gold-accent transition-colors duration-300" />
              <a href="mailto:info@timmerman.studio" className="hover:text-white transition-colors duration-300">info@timmerman.studio</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-gray-500 mt-0.5" />
              <span className="leading-relaxed">Guildford Crescent,<br />Colombo 07, Sri Lanka</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold-accent font-medium">
            Subscribe For More
          </h4>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Receive exclusive notifications regarding incoming project releases and spatial case studies.
          </p>
          <form className="space-y-3 pt-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-transparent border-b border-white/10 pb-2 text-xs md:text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-gold-accent transition-colors duration-300"
              />
            </div>
            <div className="relative flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-white/10 pb-2 pr-8 text-xs md:text-sm font-light text-white placeholder-gray-600 focus:outline-none focus:border-gold-accent transition-colors duration-300"
              />
              <button type="submit" className="absolute right-0 bottom-2 text-gray-400 hover:text-gold-accent transition-colors duration-300">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-light tracking-wider uppercase">
        <p>&copy; {currentYear} TIMMERMAN STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}