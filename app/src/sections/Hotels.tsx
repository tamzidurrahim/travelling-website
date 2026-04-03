import { useEffect, useRef, useState } from 'react';
import { Star, MapPin, ArrowRight, Bed } from 'lucide-react';

interface Hotel {
  id: number;
  name: string;
  location: string;
  destination: string;
  rating: number;
  priceRange: string;
  description: string;
  image: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Sea Pearl Beach Resort & Spa',
    location: "Cox's Bazar",
    destination: "Cox's Bazar",
    rating: 4.8,
    priceRange: 'BDT 8,000+',
    description: 'Beachside resort with high reviews on amenities and service. Prices vary seasonally.',
    image: '/hotel-seapearl.jpg',
  },
  {
    id: 2,
    name: 'Sayeman Beach Resort',
    location: "Cox's Bazar",
    destination: "Cox's Bazar",
    rating: 4.7,
    priceRange: 'BDT 7,500+',
    description: 'Premium beachfront views with pools and private beach access.',
    image: '/hotel-sayeman.jpg',
  },
  {
    id: 3,
    name: 'Grand Sylhet Hotel & Resort',
    location: 'Sylhet City',
    destination: 'Sylhet',
    rating: 4.5,
    priceRange: 'BDT 5,000+',
    description: 'Highly rated 4+ star city hotel perfect for accessing tea gardens.',
    image: '/hotel-grandsylhet.jpg',
  },
  {
    id: 4,
    name: 'Jolpoddo Retreat',
    location: 'Sreemangal',
    destination: 'Sylhet',
    rating: 4.6,
    priceRange: 'BDT 4,500+',
    description: 'Serene nature stay in Sreemangal surrounded by tea estates.',
    image: '/hotel-jolpoddo.jpg',
  },
  {
    id: 5,
    name: 'Holiday Inn Dhaka City Centre',
    location: 'Dhaka',
    destination: 'Dhaka',
    rating: 4.7,
    priceRange: 'BDT 9,000+',
    description: 'International comfort in the capital with world-class amenities.',
    image: '/hotel-holidayinn.jpg',
  },
  {
    id: 6,
    name: 'Hostel by zooFamily',
    location: 'Uttara, Dhaka',
    destination: 'Dhaka',
    rating: 4.2,
    priceRange: 'BDT 1,500+',
    description: 'Budget-friendly option in Uttara with clean, comfortable rooms.',
    image: '/hotel-zoofamily.jpg',
  },
];

const HotelCard = ({ hotel, index }: { hotel: Hotel; index: number }) => {
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
      className={`group bg-white rounded-2xl overflow-hidden card-shadow transition-all duration-700 hover:card-shadow-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-body text-sm font-medium text-gray-800">
            {hotel.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-emerald text-xs mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-body">{hotel.location}</span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl text-emerald-dark mb-2 group-hover:text-emerald transition-colors duration-300 line-clamp-1">
          {hotel.name}
        </h3>

        <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {hotel.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-emerald" />
            <span className="font-body text-sm font-medium text-emerald-dark">
              From {hotel.priceRange}
            </span>
          </div>

          <button className="inline-flex items-center gap-1.5 text-emerald font-body font-medium text-sm group/btn">
            Book Hotel
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Hotels = () => {
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
    <section id="hotels" className="py-20 md:py-28 bg-white">
      <div className="section-padding">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-body text-sm uppercase tracking-wider text-emerald mb-3">
            Rest & Recharge
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-emerald-dark mb-4">
            Where to Stay
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Handpicked accommodations for every budget. From luxury resorts to cozy hostels.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hotels.map((hotel, index) => (
            <HotelCard key={hotel.id} hotel={hotel} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
