import { useEffect, useRef, useState } from 'react';
import { ShoppingBag, ArrowRight, Backpack, Droplets, Footprints, CloudRain } from 'lucide-react';

interface GearItem {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  image: string;
  icon: React.ElementType;
}

const gearItems: GearItem[] = [
  {
    id: 1,
    name: 'Travel Backpack 40L',
    description: 'Versatile hiking and travel pack with multiple compartments, padded straps, and water-resistant material. Perfect for long tours across Bangladesh.',
    priceRange: 'BDT 3,500+',
    image: '/gear-backpack.png',
    icon: Backpack,
  },
  {
    id: 2,
    name: 'Insulated Water Bottle',
    description: 'Stainless steel 750ml bottle keeps drinks cold for 24 hours or hot for 12 hours. Essential for tropical climates.',
    priceRange: 'BDT 1,200+',
    image: '/gear-bottle.png',
    icon: Droplets,
  },
  {
    id: 3,
    name: 'Trekking Shoes',
    description: 'Durable outdoor shoes with rugged soles and waterproof leather. Ideal for hilly regions like Bandarban and Satchari.',
    priceRange: 'BDT 4,500+',
    image: '/gear-shoes.png',
    icon: Footprints,
  },
  {
    id: 4,
    name: 'Waterproof Rain Jacket',
    description: 'Lightweight, packable rain gear with breathable fabric. Essential for monsoon season travel in Bangladesh.',
    priceRange: 'BDT 2,800+',
    image: '/gear-rainjacket.png',
    icon: CloudRain,
  },
];

const GearCard = ({ item, index }: { item: GearItem; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = item.icon;

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-700 hover:card-shadow-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-52 sm:h-60 bg-gradient-to-br from-light-green to-white flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-emerald/10" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-emerald/10" />
        </div>

        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className={`relative z-10 w-40 h-40 sm:w-48 sm:h-48 object-contain transition-all duration-500 ${
            isHovered ? 'scale-110 -rotate-3' : 'scale-100 rotate-0'
          }`}
        />

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-emerald" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl text-emerald-dark mb-2 group-hover:text-emerald transition-colors duration-300">
          {item.name}
        </h3>

        <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-emerald" />
            <span className="font-body text-sm font-medium text-emerald-dark">
              From {item.priceRange}
            </span>
          </div>
        </div>

        {/* Buy Button - Slides up on hover */}
        <div
          className={`mt-4 transition-all duration-300 overflow-hidden ${
            isHovered ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <button className="w-full btn-primary flex items-center justify-center gap-2 py-2.5 text-sm">
            Buy Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Gear = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gear" className="py-20 md:py-28 bg-off-white">
      <div className="section-padding">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-body text-sm uppercase tracking-wider text-emerald mb-3">
            <ShoppingBag className="w-4 h-4 inline-block mr-2" />
            Travel Essentials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-emerald-dark mb-4">
            Gear & Rentals
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Essential equipment for your Bangladesh adventure. From lightweight backpacks to waterproof gear.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {gearItems.map((item, index) => (
            <GearCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-500 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-gray-500 text-sm">
            Prices are approximate and may vary by retailer. Visit local outdoor stores for best deals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gear;
