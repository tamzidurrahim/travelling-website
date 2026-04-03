import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-coxsbazar.jpg"
          alt="Cox's Bazar Beach at Sunrise"
          className={`w-full h-full object-cover transition-transform duration-[1800ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 section-padding">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-tight transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Discover
            <br />
            <span className="text-emerald">Bangladesh</span>
          </h1>

          {/* Subheading */}
          <p
            className={`font-body text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-xl transition-all duration-800 delay-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            Land of Rivers, Hills, and Endless Stories
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToDestinations}
            className={`btn-primary inline-flex items-center gap-2 text-base sm:text-lg transition-all duration-800 delay-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          >
            Start Your Journey
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
