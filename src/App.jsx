import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutLeadership from './components/AboutLeadership';
import Mentors from './components/Mentors';
import ForcesPreparation from './components/ForcesPreparation';
import Features from './components/Features';
import PhysicalEvents from './components/PhysicalEvents';
import SpecialPrograms from './components/SpecialPrograms';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import MedicalGuidance from './components/MedicalGuidance';
import AdmissionProcess from './components/AdmissionProcess';
import FAQ from './components/FAQ';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';
import './index.css';

function App() {
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
      <Gallery />
      <MedicalGuidance />
      <AdmissionProcess />
      <FAQ />
      <JoinForm />
      <Footer />
    </div>
  );
}

export default App;
