import React from 'react';
import { ShieldAlert, Crosshair, Target, Award, Star } from 'lucide-react';

const forces = [
  { name: "ARMY", icon: <Star size={32} />, color: "#4CAF50" },
  { name: "POLICE", icon: <ShieldAlert size={32} />, color: "#2196F3" },
  { name: "FOREST GUARD", icon: <Target size={32} />, color: "#8BC34A" },
  { name: "BSF", icon: <Crosshair size={32} />, color: "#FF9800" },
  { name: "TA ARMY", icon: <Award size={32} />, color: "#795548" },
  { name: "CISF", icon: <ShieldAlert size={32} />, color: "#607D8B" },
  { name: "AIR FORCE", icon: <Star size={32} />, color: "#03A9F4" },
  { name: "NAVY", icon: <Target size={32} />, color: "#3F51B5" },
  { name: "ITBP", icon: <Crosshair size={32} />, color: "#009688" },
  { name: "CRPF", icon: <ShieldAlert size={32} />, color: "#E91E63" },
  { name: "महाराष्ट्र पोलीस", icon: <Star size={32} />, color: "#9C27B0" },
  { name: "SSC", icon: <Target size={32} />, color: "#F44336" },
  { name: "इतर सरकारी भरती", icon: <Award size={32} />, color: "#673AB7" }
];

const ForcesPreparation = () => {
  return (
    <section className="section-padding bg-dark dark-section" id="courses">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Career Paths</h4>
          <h2 className="section-title">ALL FORCES PHYSICAL + PAPER</h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            संपूर्ण Physical तयारी + Diet Plan + Fat Loss + Perfect Guidance
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6" style={{ marginTop: '3rem' }}>
          {forces.map((force, index) => (
            <div key={index} className="force-card glass-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ color: force.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {force.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{force.name}</h3>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
          * We provide recruitment preparation and training for these forces. We are an independent coaching academy and not officially affiliated with these organizations.
        </div>
      </div>
    </section>
  );
};

export default ForcesPreparation;
