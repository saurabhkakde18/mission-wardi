import React from 'react';
import { Activity, Apple, BookOpen, Stethoscope, ClipboardList, Users, Brain } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    title: "संपूर्ण Physical Training",
    icon: <Activity size={32} />,
    items: ["Running & Sprint", "Endurance & Strength", "Physical Test Practice"]
  },
  {
    title: "Diet Plan",
    icon: <Apple size={32} />,
    items: ["Fitness-oriented guidance", "Weight management", "Fat-loss & Nutrition"]
  },
  {
    title: "लेखी परीक्षा मार्गदर्शन",
    icon: <BookOpen size={32} />,
    items: ["Marathi, GK, Math", "Reasoning, Current Affairs", "Regular Mock Tests"]
  },
  {
    title: "Medical Guidance",
    icon: <Stethoscope size={32} />,
    items: ["ARMY / Central Govt", "recruitment medical", "प्रक्रियेबाबत मार्गदर्शन"]
  },
  {
    title: "नियमित टेस्ट आणि परीक्षा",
    icon: <ClipboardList size={32} />,
    items: ["Weekly tests", "Physical tests", "Performance tracking"]
  },
  {
    title: "वैयक्तिक मार्गदर्शन",
    icon: <Users size={32} />,
    items: ["Individual review", "Trainer feedback", "Physical improvement plan"]
  },
  {
    title: "Motivation & Counselling",
    icon: <Brain size={32} />,
    items: ["Goal setting", "Discipline building", "Regular motivation"]
  }
];

const Features = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Academy Features</h4>
          <h2 className="section-title">Mission Wardi मध्ये तुम्हाला मिळेल</h2>
          <p className="section-desc">Comprehensive training features to ensure your overall development and success.</p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon text-primary">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <ul className="feature-list">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
