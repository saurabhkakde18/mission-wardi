import React from 'react';
import { Share2, Send, MessageCircle, Video, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark" style={{ color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-4 gap-8" style={{ marginBottom: '4rem' }}>
          
          <div style={{ gridColumn: 'span 1' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
              MISSION WARDI<br/>
              <span style={{ fontSize: '1rem', color: 'white', fontWeight: '400' }}>CAREER ACADEMY, JALNA</span>
            </h2>
            <p style={{ color: 'var(--accent-color)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Dream • Prepare • Achieve"
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
              "तुमची वर्दी, आमचं स्वप्न!"
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Share2 size={18}/></a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Send size={18}/></a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MessageCircle size={18}/></a>
              <a href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Video size={18}/></a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
              <li><a href="#home" style={{ hover: { color: 'var(--primary-color)' } }}>Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#physical">Physical Training</a></li>
              <li><a href="#courses">Written Preparation</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>More</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#home">Gallery</a></li>
              <li><a href="#admission">Admissions</a></li>
              <li><a href="#admission">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={20} className="text-primary" />
                <span>9765770076</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={20} className="text-primary" />
                <span>Jalna, Maharashtra</span>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,87,34,0.1)', borderRadius: '8px', border: '1px solid rgba(255,87,34,0.3)', textAlign: 'center' }}>
              <p style={{ fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>कठीण मेहनत • सच्ची लगन • मजबूत इरादा</p>
              <a href="#join-form" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', width: '100%', display: 'inline-block', textAlign: 'center' }}>
                JOIN MISSION WARDI
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
          <p>© 2026 Mission Wardi Career Academy. All Rights Reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Admin panel features available for managing content dynamically.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
