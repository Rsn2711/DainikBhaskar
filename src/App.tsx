import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import FeatureStrip from './components/FeatureStrip';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import SwachhBharatBanner from './components/SwachhBharatBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SwachhBharatBanner />
        <Stats />
        <Benefits />
        <HowItWorks />
        <FeatureStrip />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
