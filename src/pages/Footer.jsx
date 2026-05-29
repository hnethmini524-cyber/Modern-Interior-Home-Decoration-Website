import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#footer' }
  ];

  return (
    <footer id="footer" className="relative w-full bg-neutral-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105 animate-subtle-zoom"
        style={{ backgroundImage: `url('/hero.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950 to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
        
        <div className="space-y-6">
          <h3 className="font-serif text-2xl tracking-widest font-light text-white">
            VelvetHaus Interiors
          </h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed tracking-wide pr-4">
            Architecting spaces of quiet luxury and sensory narratives. Every structural detail is carefully tailored to curate bespoke realities that resonate with quiet elegance.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="rounded-full border border-white/10 p-3 text-gray-400 hover:text-white hover:border-white transition-all duration-300">
              <Mail size={13} />
            </a>
            <a href="#" className="rounded-full border border-white/10 p-3 text-gray-400 hover:text-white hover:border-white transition-all duration-300">
              <MessageSquare size={13} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4 lg:pl-12">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold-accent font-medium">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-gray-400">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="group relative inline-block hover:text-white transition-colors duration-300 py-0.5">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-4">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold-accent font-medium">
            Contact Us
          </h4>
          <ul className="space-y-3.5 text-xs font-light text-gray-400">
            <li className="flex items-center gap-3 group">
              <Phone size={13} className="text-gray-500 group-hover:text-gold-accent transition-colors duration-300" />
              <a href="tel:+94112345678" className="hover:text-white transition-colors duration-300">+94 11 234 5678</a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={13} className="text-gray-500 group-hover:text-gold-accent transition-colors duration-300" />
              <a href="mailto:info@velvethaus.interiors" className="hover:text-white transition-colors duration-300">info@velvethaus.interiors</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={13} className="text-gray-500 mt-0.5" />
              <span className="leading-relaxed">Colombo 07, Sri Lanka</span>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="space-y-4">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold-accent font-medium">
            For More Details
          </h4>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Receive exclusive notifications regarding incoming project releases and spatial case studies.
          </p>
          <form className="space-y-4 pt-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full bg-neutral-900/50 border border-white/5 rounded-xl px-4 py-3 text-xs font-light text-white placeholder-gray-600 focus:outline-none focus:border-gold-accent focus:bg-neutral-900 transition-all duration-300"
            />
            
            <div className="relative flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-neutral-900/50 border border-white/5 rounded-xl px-4 py-3 text-xs font-light text-white placeholder-gray-600 focus:outline-none focus:border-gold-accent focus:bg-neutral-900 transition-all duration-300"
              />
              
              <button 
                type="submit" 
                className="bg-gold-accent hover:bg-white text-black font-medium tracking-wider text-[10px] uppercase px-5 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                Join
                <ArrowRight size={12} />
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-light tracking-widest uppercase">
        <p>&copy; {currentYear} VelvetHaus Interiors. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}