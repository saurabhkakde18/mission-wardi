import React from 'react';
import { Home, Utensils, BookOpen, Activity, Map, MonitorPlay } from 'lucide-react';

const facilitiesData = [
  { icon: <Home size={32} />, title: "राहण्याची सोय", desc: "Residential Facility" },
  { icon: <Utensils size={32} />, title: "निवासी जेवणाची सोय", desc: "Food Facility" },
  { icon: <BookOpen size={32} />, title: "क्लासेसची सोय", desc: "Classroom" },
  { icon: <Activity size={32} />, title: "Physical Training Area", desc: "मोठे Training Ground" },
  { icon: <MonitorPlay size={32} />, title: "Performance Tracking", desc: "Basic Student Facilities" },
  { icon: <Map size={32} />, title: "अभ्यास + Physical", desc: "एकाच ठिकाणी" }
];

const Facilities = () => {
  return (
    <section className="section-padding" id="facilities">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Infrastructure</h4>
          <h2 className="section-title">Residential Training Facility</h2>
          <p className="section-desc">Experience our comprehensive residential and training facilities designed for focus and performance.</p>
        </div>

        <div className="grid grid-cols-3 gap-6" style={{ marginTop: '3rem' }}>
          {facilitiesData.map((fac, index) => (
            <div key={index} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', color: 'var(--secondary-color)' }}>
                {fac.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{fac.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
