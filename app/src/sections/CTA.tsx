import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Compass } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/dest-rangamati.jpg"
          alt="Beautiful Bangladesh Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
              <Compass className="w-8 h-8 text-emerald" />
            </div>
          </div>

          <h2
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to Explore?
          </h2>

          <p
            className={`font-body text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Start planning your journey through the land of rivers, hills, and endless stories. Bangladesh awaits.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="inline-flex items-center gap-2 bg-white text-emerald-dark px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 hover:bg-emerald hover:text-white hover:shadow-lg hover:shadow-emerald/30">
              Plan Your Trip
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:bg-white/10 hover:border-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-off-white to-transparent" />
    </section>
  );
};

export default CTA;
