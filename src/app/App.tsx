import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Spotlight } from './components/Spotlight';
import { IntroSection } from './components/IntroSection';
import { CarouselSection } from './components/CarouselSection';
import { DetailedExpertise } from './components/DetailedExpertise';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// New Page Components
import { ServiceDetail } from './pages/ServiceDetail';
import { CareerDetail } from './pages/CareerDetail';
import { ExpertiseDetail } from './pages/ExpertiseDetail';
import { ExpertiseItemDetail } from './pages/ExpertiseItemDetail';
import { ClientDashboard } from './pages/ClientDashboard';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetail } from './pages/InsightDetail';
import { MarketReports } from './pages/MarketReports';
import { Newsroom } from './pages/Newsroom';
import { ProBono } from './pages/ProBono';
import { CareersPage } from './pages/CareersPage';

const HomePage = () => (
  <main>
    <IntroSection />
    <Hero image="https://images.unsplash.com/photo-1758448656987-cfae6bf225e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
    <CarouselSection />
    <Spotlight />
    <DetailedExpertise />
    <CareersSection />
  </main>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black selection:bg-black/10">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
          <Route path="/expertise/:id" element={<ExpertiseDetail />} />
          <Route path="/expertise-item/:id" element={<ExpertiseItemDetail />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="/market-reports" element={<MarketReports />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/pro-bono" element={<ProBono />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;