import React, { useState } from 'react';
import OTPLogin from './components/OTPLogin';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutLeadership from './components/AboutLeadership';
import Mentors from './components/Mentors';
import ForcesPreparation from './components/ForcesPreparation';
import Features from './components/Features';
import PhysicalEvents from './components/PhysicalEvents';
import SpecialPrograms from './components/SpecialPrograms';
import Facilities from './components/Facilities';
import MedicalGuidance from './components/MedicalGuidance';
import AdmissionProcess from './components/AdmissionProcess';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <OTPLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <AboutLeadership />
      <Mentors />
      <ForcesPreparation />
      <Features />
      <PhysicalEvents />
      <SpecialPrograms />
      <Facilities />
      <MedicalGuidance />
      <AdmissionProcess />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
