import React from 'react';
import { Timer, Zap, CircleDot, MoveUp, Activity } from 'lucide-react';

const events = [
  {
    title: "1600M RUN",
    icon: <Timer size={24} />,
    items: ["Endurance", "Stamina", "Pace control", "Timing improvement", "Practice tests"]
  },
  {
    title: "100M SPRINT",
    icon: <Zap size={24} />,
    items: ["Speed", "Acceleration", "Sprint technique", "Reaction", "Start practice"]
  },
  {
    title: "SHOT PUT",
    icon: <CircleDot size={24} />,
    items: ["Throwing technique", "Strength", "Explosive power", "Footwork", "Distance tracking"]
  },
  {
    title: "LONG JUMP",
    icon: <MoveUp size={24} />,
    items: ["Run-up", "Take-off", "Landing", "Technique"]
  },
  {
    title: "800M RUN",
    icon: <Timer size={24} />,
    items: ["Endurance", "Pace", "Stamina"]
  },
  {
    title: "PUSH-UPS & SIT-UPS",
    icon: <Activity size={24} />,
    items: ["Upper-body strength", "Core strength", "Repetition improvement"]
  }
];

const PhysicalEvents = () => {
  return (
    <section className="section-padding bg-dark dark-section" id="physical">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Training Modules</h4>
          <h2 className="section-title">PHYSICAL TRAINING EVENTS</h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            Comprehensive physical training modules designed to help you ace the physical tests.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6" style={{ marginTop: '3rem' }}>
          {events.map((event, index) => (
            <div key={index} className="glass-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--primary-color)' }}>
                  {event.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>{event.title}</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                {event.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {['Running drills', 'Agility', 'Flexibility', 'Strength training', 'Warm-up', 'Cool-down', 'Recovery'].map((tag, i) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1.5rem', borderRadius: '50px', fontSize: '0.875rem' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysicalEvents;
