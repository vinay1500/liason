// import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Spotlight } from './components/Spotlight';
import { IntroSection } from './components/IntroSection';
import { CarouselSection } from './components/CarouselSection';
import { DetailedExpertise } from './components/DetailedExpertise';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black/10">
      <Navbar />
      
      <main>
        {/* Stage 1: The Introductory Vision */}
        <IntroSection />

        {/* Stage 2: The Core Hero Identity */}
        <Hero image="https://images.unsplash.com/photo-1758448656987-cfae6bf225e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />

        {/* Stage 3: The Interactive Focus */}
        <CarouselSection />

        {/* Stage 4: News & Insights Spotlight (Based on provided image) */}
        <Spotlight />

        {/* Stage 5: Comprehensive Legal Expertise (Expanded List) */}
        <DetailedExpertise />

        {/* Stage 6: Talent & Career Opportunities */}
        <CareersSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
