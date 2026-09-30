import React from 'react';
import { HeartPulse, FileText, Info, Users, Goal, MessageCircle } from 'lucide-react';

const MedicalGuidance = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="section-header" style={{ textAlign: 'left' }}>
              <h4 className="section-subtitle">Medical Guidance</h4>
              <h2 className="section-title">Medical Preparation</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <HeartPulse size={24} className="text-primary" />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>General Fitness Preparation</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Basic fitness standards required for the forces.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <FileText size={24} className="text-primary" />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Medical Documentation</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Guidance on necessary medical certificates and documents.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Info size={24} className="text-primary" />
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Army/Govt Medical Process</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Information about recruitment medical procedures.</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 87, 34, 0.1)', borderLeft: '4px solid var(--primary-color)', padding: '1rem', borderRadius: '4px', fontSize: '0.85rem' }}>
              <strong>Disclaimer:</strong> Medical eligibility अंतिमतः संबंधित भरती संस्था/अधिकृत वैद्यकीय प्रक्रियेनुसार ठरते.
            </div>
          </div>

          <div>
            <div className="section-header" style={{ textAlign: 'left' }}>
              <h4 className="section-subtitle">Student Counselling</h4>
              <h2 className="section-title">Personal Guidance</h2>
            </div>
            
            <div className="glass-card">
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Users size={20} className="text-secondary"/> Career & Recruitment guidance</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FileText size={20} className="text-secondary"/> Study & Physical training planning</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Goal size={20} className="text-secondary"/> Personal performance discussion</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MessageCircle size={20} className="text-secondary"/> Motivation sessions</li>
              </ul>
              
              <a href="tel:9765770076" className="btn btn-secondary w-full" style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                मार्गदर्शनासाठी संपर्क करा: 9765770076
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalGuidance;
