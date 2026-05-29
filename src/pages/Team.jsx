import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Brigitte Watson",
      role: "Principal Interior Architect",
      bio: "Master of structural spatial flows with over a decade of shaping luxury residential blueprints.",
      image: "/team1.jpg" 
    },
    {
      name: "Alan Torres",
      role: "Lead Furniture Designer",
      bio: "Specializes in sourcing and crafting custom, sustainable timber installations and bespoke minimalist upholstery.",
      image: "/team3.jpg" 
    },
    {
      name: "Adora Holmes",
      role: "Material & Texture Curator",
      bio: "Expertise in organic stones, high-end linens, and complex micro-cement compositions that evoke understated luxury.",
      image: "/team2.jpg" 
    },
    {
      name: "James Maxwell",
      role: "Architectural Lighting Engineer",
      bio: "Designing micro-recessed layout points and ambient lighting schemes that alter the perception of physical space.",
      image: "/team4.jpg" 
    }
  ];

  return (
    <section id="team" className="w-full bg-neutral-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section heading */}
        <div className="space-y-4 mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-gold-accent" />
            <p className="text-xs uppercase tracking-[0.25em] font-medium text-gold-accent">The Minds Behind VelvetHaus</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-white">
            Meet Our Team <span className="italic font-normal text-gray-300">Collective</span>
          </h2>
        </div>

        {/* Left aligned grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group space-y-4"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition-colors duration-500 backdrop-blur-[1px] group-hover:backdrop-blur-none" />
                
                <div className="absolute bottom-4 left-4 flex gap-2 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <a href="#" className="rounded-full bg-white/10 backdrop-blur-md p-3 text-white hover:bg-white hover:text-black transition-colors duration-300 border border-white/10">
                    <MessageSquare size={14} />
                  </a>
                  <a href="#" className="rounded-full bg-white/10 backdrop-blur-md p-3 text-white hover:bg-white hover:text-black transition-colors duration-300 border border-white/10">
                    <Mail size={14} />
                  </a>
                </div>
              </div>

              {/* Profile data */}
              <div className="space-y-1 text-left">
                <h3 className="font-serif text-xl font-light text-white tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[11px] uppercase tracking-widest text-gold-accent font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400 font-light leading-relaxed pt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}