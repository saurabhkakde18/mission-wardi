import React from 'react';
import { Calendar, PhoneCall, ArrowRight, Shield } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge animate-fade-in">
          <Shield size={18} /> MISSION WARDI CAREER ACADEMY, JALNA
        </div>
        
        <h1 className="hero-title animate-fade-in">
          मिशन वर्दी करिअर अकॅडमी, <span className="text-accent">जालना</span>
        </h1>
        
        <div className="hero-taglines animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="main-tagline">"कठीण मेहनत • सच्ची लगन • मजबूत इरादा"</p>
          <p className="sub-tagline">"यही है मिशन वर्दी का वादा...!"</p>
        </div>



        <div className="hero-cta animate-fade-in" style={{animationDelay: '0.6s'}}>
          <a href="https://wa.me/919765770076?text=Hi,%20I%20want%20to%20Join%20the%20New%20Batch!" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            JOIN NEW BATCH <ArrowRight size={20} />
          </a>
          <a href="https://wa.me/919765770076?text=Hi,%20I%20want%20to%20book%20a%207%20Day%20Demo!" target="_blank" rel="noopener noreferrer" className="btn btn-outline hero-btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={20} /> 7 DAY DEMO BOOK करा
          </a>
          <a href="tel:9765770076" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <PhoneCall size={20} /> 9765770076
          </a>
        </div>
        
        <div className="hero-footer-text animate-fade-in" style={{animationDelay: '0.8s'}}>
          <p>"आजची मेहनत, उद्याची वर्दी!"</p>
          <p>"तुमची वर्दी, आमचं स्वप्न!"</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
