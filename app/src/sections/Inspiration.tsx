import { useEffect, useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

interface Polaroid {
  id: number;
  image: string;
  caption: string;
  location: string;
  rotation: number;
}

const polaroids: Polaroid[] = [
  {
    id: 1,
    image: '/polaroid-coxsbazar.jpg',
    caption: 'Sunset Stroll',
    location: "Cox's Bazar Beach",
    rotation: -3,
  },
  {
    id: 2,
    image: '/polaroid-rangamati.jpg',
    caption: 'Morning Mist',
    location: 'Kaptai Lake, Rangamati',
    rotation: 2,
  },
  {
    id: 3,
    image: '/polaroid-madhabkunda.jpg',
    caption: 'Rainbow Falls',
    location: 'Madhabkunda Waterfall',
    rotation: -2,
  },
  {
    id: 4,
    image: '/polaroid-satchari.jpg',
    caption: 'Forest Light',
    location: 'Satchari National Park',
    rotation: 3,
  },
];

const Inspiration = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          sectionObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      headerObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inspiration"
      ref={sectionRef}
      className="py-20 md:py-28 bg-light-green overflow-hidden"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="inline-block font-body text-sm uppercase tracking-wider text-emerald mb-3">
              <Camera className="w-4 h-4 inline-block mr-2" />
              Visual Journey
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-emerald-dark mb-4">
              Travel Inspiration
            </h2>
            <p className="font-body text-gray-600 max-w-xl text-base sm:text-lg">
              Moments captured in time. Let these images inspire your next adventure across Bangladesh.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white card-shadow flex items-center justify-center text-emerald-dark hover:bg-emerald hover:text-white transition-all duration-300 hover:card-shadow-hover"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white card-shadow flex items-center justify-center text-emerald-dark hover:bg-emerald hover:text-white transition-all duration-300 hover:card-shadow-hover"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Polaroid Gallery - Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 md:gap-8 overflow-x-auto custom-scrollbar px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {polaroids.map((polaroid, index) => (
          <div
            key={polaroid.id}
            className={`flex-shrink-0 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
              scrollSnapAlign: 'start',
            }}
          >
            <div
              className="polaroid rounded-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-0"
              style={{ transform: `rotate(${polaroid.rotation}deg)` }}
            >
              {/* Image */}
              <div className="w-64 sm:w-72 h-80 sm:h-96 overflow-hidden">
                <img
                  src={polaroid.image}
                  alt={polaroid.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="font-display text-xl text-emerald-dark">
                  {polaroid.caption}
                </p>
                <p className="font-body text-sm text-gray-500 mt-1">
                  {polaroid.location}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div
          className={`flex-shrink-0 flex items-center justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: `${polaroids.length * 150}ms`,
            scrollSnapAlign: 'start',
          }}
        >
          <div className="w-64 sm:w-72 h-[420px] sm:h-[480px] bg-white rounded-sm polaroid flex flex-col items-center justify-center gap-4 cursor-pointer group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-light-green flex items-center justify-center group-hover:bg-emerald transition-colors duration-300">
              <Camera className="w-8 h-8 text-emerald group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="text-center">
              <p className="font-display text-xl text-emerald-dark mb-1">
                View More
              </p>
              <p className="font-body text-sm text-gray-500">
                Explore our gallery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
