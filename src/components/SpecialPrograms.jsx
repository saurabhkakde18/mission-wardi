import React from 'react';
import { HeartHandshake, Tractor, HardHat, GraduationCap } from 'lucide-react';

const SpecialPrograms = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">विशेष गरज असलेल्या विद्यार्थ्यांसाठी</h4>
          <h2 className="section-title">गरजूंना संधी • मेहनतीला दिशा • स्वप्नांना वर्दी</h2>
          <p className="section-desc">विशेष गरज असलेल्या विद्यार्थ्यांसाठी विशेष Academy Programs</p>
        </div>

        <div className="grid grid-cols-3 gap-6" style={{ marginTop: '3rem' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <Tractor size={48} className="text-primary" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>शेतकऱ्यांच्या मुलांसाठी</h3>
            <p style={{ color: 'var(--text-muted)' }}>Special guidance and support programs designed specifically for farmers' children.</p>
          </div>
          
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <HardHat size={48} className="text-primary" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>हातमजुरांच्या मुलांसाठी</h3>
            <p style={{ color: 'var(--text-muted)' }}>Dedicated support structured for children of daily wage workers to achieve their dreams.</p>
          </div>
          
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <GraduationCap size={48} className="text-primary" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>गरजू विद्यार्थ्यांसाठी</h3>
            <p style={{ color: 'var(--text-muted)' }}>Assistance programs for genuinely needy and deserving students.</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;
