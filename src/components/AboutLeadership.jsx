import React from 'react';
import { Share2, Send, Link as LinkIcon, User, Award } from 'lucide-react';
import './AboutLeadership.css';

const AboutLeadership = () => {
  return (
    <section className="section-padding bg-secondary" id="about">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Our Leadership</h4>
          <h2 className="section-title">संचालक + मैदानी प्रशिक्षक</h2>
          <p className="section-desc">
            The driving force behind Mission Wardi Career Academy, dedicated to shaping your future.
          </p>
        </div>

        <div className="leadership-card glass-card">
          <div className="leadership-image">
            <div className="image-placeholder">
              <User size={64} className="text-primary" />
            </div>
          </div>
          
          <div className="leadership-content">
            <h3 className="leader-name">ऋषी सर</h3>
            <p className="leader-role">Director & Physical Trainer</p>
            <p className="leader-academy">Mission Wardi Career Academy, Jalna</p>
            
            <div className="leader-bio">
              <p>
                Rishi Sir brings years of extensive experience in physical training and recruitment preparation. 
                His rigorous mentoring approach has helped countless students achieve their dreams of joining the armed forces and police services.
              </p>
            </div>
            
            <div className="expertise-tags">
              <span className="tag"><Award size={16}/> Physical Training Expertise</span>
              <span className="tag"><Award size={16}/> Student Mentoring</span>
              <span className="tag"><Award size={16}/> Recruitment Preparation</span>
            </div>

            <div className="leader-social">
              <a href="#" className="social-link"><Share2 size={20} /></a>
              <a href="#" className="social-link"><Send size={20} /></a>
              <a href="#" className="social-link"><LinkIcon size={20} /></a>
            </div>

            <button className="btn btn-primary mt-4">
              ऋषी सरांकडून मार्गदर्शन घ्या
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
