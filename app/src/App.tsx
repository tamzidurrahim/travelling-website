import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Destinations from './sections/Destinations';
import Hotels from './sections/Hotels';
import Inspiration from './sections/Inspiration';
import Gear from './sections/Gear';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />
      <main>
        <Hero />
        <Destinations />
        <Hotels />
        <Inspiration />
        <Gear />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
