import React from 'react';
import { UserCheck } from 'lucide-react';
import './Mentors.css';

const mentorsData = [
  {
    name: "सी. नमुना जैस्वाल मॅडम",
    role: "Senior Mentor",
    subject: "Academic Guidance & Strategy"
  },
  {
    name: "बालेकर सर",
    role: "Subject Expert",
    subject: "Mathematics & Reasoning"
  },
  {
    name: "जाधव सर",
    role: "Subject Expert",
    subject: "Marathi Grammar & GK"
  },
  {
    name: "जैस्वाल सर",
    role: "Physical & Tactical Expert",
    subject: "Advanced Physical Training"
  }
];

const Mentors = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Expert Team</h4>
          <h2 className="section-title">आमचे मार्गदर्शक</h2>
          <p className="section-desc">Learn from the best to become the best. Our experienced mentors guide you at every step.</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mentors-grid">
          {mentorsData.map((mentor, index) => (
            <div key={index} className="mentor-card glass-card">
              <div className="mentor-photo">
                <UserCheck size={48} className="text-secondary" />
              </div>
              <div className="mentor-info">
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-role text-primary">{mentor.role}</p>
                <div className="mentor-subject">
                  <span>{mentor.subject}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
