import React from 'react';
import { Phone, MessageCircle, FileEdit, MapPin, Navigation } from 'lucide-react';

const AdmissionProcess = () => {
  return (
    <section className="section-padding" id="admission">
      <div className="container">
        
        <div className="grid grid-cols-2 gap-8" style={{ marginBottom: '4rem' }}>
          <div>
            <div className="section-header" style={{ textAlign: 'left' }}>
              <h4 className="section-subtitle">Location</h4>
              <h2 className="section-title">आमचे Training Ground</h2>
              <p className="section-desc">Visit us for a demo or start your physical training.</p>
            </div>
            
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin size={24} className="text-primary" style={{ marginTop: '0.25rem' }} />
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Address</h4>
                  <p style={{ color: 'var(--text-muted)' }}>
                    डॉ. फेजर बॉईज मैदान समोर,<br />
                    नवीन साई मंदिर जवळ,<br />
                    आझाद मैदान, जालना.
                  </p>
                </div>
              </div>
              <button className="btn btn-outline" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                <Navigation size={18} /> GET DIRECTIONS
              </button>
            </div>
          </div>

          <div className="glass-card" style={{ background: 'var(--primary-color)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Admission Contact</h3>
            <a href="tel:9765770076" style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '2rem', display: 'block' }}>
              9765770076
            </a>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="tel:9765770076" className="btn" style={{ background: 'white', color: 'var(--primary-color)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={20} /> CALL NOW
              </a>
              <a href="https://wa.me/919765770076?text=Hi%20Mission%20Wardi,%20I%20need%20details%20about%20admission!" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={20} /> WHATSAPP
              </a>
              <a href="https://wa.me/919765770076?text=Hi,%20I%20want%20to%20Apply%20Now%20for%20the%20new%20batch!" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileEdit size={20} /> APPLY NOW
              </a>
            </div>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Admission Process</h2>
          <p className="section-desc">A simple 4-step process to join Mission Wardi Career Academy. 7 Day Demo Available!</p>
        </div>

        <div className="grid grid-cols-4 gap-6 relative">
          {[
            { step: '01', title: 'Contact Academy', desc: 'Call or WhatsApp us for inquiry.' },
            { step: '02', title: 'Counselling', desc: 'Discuss your goals with our experts.' },
            { step: '03', title: 'Select Course', desc: 'Choose the right batch and module.' },
            { step: '04', title: 'Start Training', desc: 'Begin your journey towards success.' }
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(255,87,34,0.1)', fontFamily: 'var(--font-heading)', marginBottom: '-1rem' }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', position: 'relative' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
