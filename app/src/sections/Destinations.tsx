import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Cox's Bazar",
    location: 'Chittagong Division',
    description: 'The longest natural sea beach in the world, stretching 125km along the Bay of Bengal.',
    image: '/dest-coxsbazar.jpg',
  },
  {
    id: 2,
    name: 'Sylhet',
    location: 'Sylhet Division',
    description: 'Famous for its lush tea gardens, spiritual sites, and natural beauty.',
    image: '/dest-sylhet.jpg',
  },
  {
    id: 3,
    name: 'Rangamati',
    location: 'Chittagong Hill Tracts',
    description: 'Known for Kaptai Lake, indigenous culture, and stunning hill landscapes.',
    image: '/dest-rangamati.jpg',
  },
  {
    id: 4,
    name: 'Bandarban',
    location: 'Chittagong Hill Tracts',
    description: 'Home to the highest peaks of Bangladesh and breathtaking waterfalls.',
    image: '/dest-bandarban.jpg',
  },
  {
    id: 5,
    name: "Saint Martin's Island",
    location: 'Bay of Bengal',
    description: 'A small coral island with crystal clear waters and pristine beaches.',
    image: '/dest-saintmartin.jpg',
  },
  {
    id: 6,
    name: 'Madhabkunda Waterfall',
    location: 'Moulvibazar',
    description: 'The highest waterfall in Bangladesh, surrounded by lush green forest.',
    image: '/dest-madhabkunda.jpg',
  },
  {
    id: 7,
    name: 'Satchari National Park',
    location: 'Habiganj',
    description: 'A biodiversity hotspot with rare wildlife and dense tropical forest.',
    image: '/dest-satchari.jpg',
  },
];

const DestinationCard = ({ destination, index }: { destination: Destination; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-700 hover:card-shadow-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        marginTop: index % 3 === 1 ? '2rem' : index % 3 === 2 ? '1rem' : '0',
      }}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-1.5 text-emerald text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span className="font-body">{destination.location}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-emerald-dark mb-2 group-hover:text-emerald transition-colors duration-300">
          {destination.name}
        </h3>

        <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
          {destination.description}
        </p>

        <button className="inline-flex items-center gap-2 text-emerald font-body font-medium text-sm group/btn">
          Explore Place
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const Destinations = () => {
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
    <section id="destinations" className="py-20 md:py-28 bg-off-white">
      <div className="section-padding">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-body text-sm uppercase tracking-wider text-emerald mb-3">
            Explore the Unseen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-emerald-dark mb-4">
            Popular Destinations
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Curated experiences for every traveler. Discover the diverse landscapes and rich culture of Bangladesh.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
