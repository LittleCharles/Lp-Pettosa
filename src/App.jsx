import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import LogosCarousel from './components/LogosCarousel';
import HowToUseSection from './components/HowToUseSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FrequentQuestions from './components/FrequentQuestions';
import PetBanner from './components/PetBanner';
import Footer from './components/Footer'; 
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <main className="m-0 p-0 box-border">
      <Header />
      <HeroSection />
      <LogosCarousel />
      <HowToUseSection />
      <ServicesSection />
      <TestimonialsSection />
      <FrequentQuestions />
      <PetBanner />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default App;