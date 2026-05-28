import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const servicesList = [
    {
      number: "01",
      title: "Architectural Space Planning",
      description: "Optimizing foundational fluid layouts, schematic scaling configurations, and structurally sound environmental circulation maps.",
      image: "/kitchen.png"
    },
    {
      number: "02",
      title: "Bespoke Furniture Curation",
      description: "Sourcing masterfully produced, high-end materials, artisanal accent structures, and exclusive custom upholstery design.",
      image: "/living-room.png"
    },
    {
      number: "03",
      title: "Luminance & Lighting Layouts",
      description: "Engineering advanced ambient atmospheres, recessed structural light points, and geometric architectural light mapping.",
      image: "/library.png"
    }
  ];

  return (
    <section className="w-full bg-neutral-950 py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold-accent" />
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-gold-accent">Expertise & Solutions</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-white">
              Our Design <span className="italic font-normal text-gray-300">Disciplines</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-400 font-light leading-relaxed tracking-wide">
            From blueprinted schematics to final structural styling, we oversee every precise stage of your interior transformation.
          </p>
        </div>

        {/* Services responsive card layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}