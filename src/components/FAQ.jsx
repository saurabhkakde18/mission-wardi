import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    q: "Physical training कोणासाठी आहे?",
    a: "Police, Army, CAPF, Forest Guard आणि इतर recruitment preparation साठी."
  },
  {
    q: "Written exam preparation उपलब्ध आहे का?",
    a: "होय, Marathi, GK, Mathematics, Reasoning आणि Mock Tests."
  },
  {
    q: "1600M training आहे का?",
    a: "होय."
  },
  {
    q: "100M Sprint training आहे का?",
    a: "होय."
  },
  {
    q: "Shot Put training आहे का?",
    a: "होय."
  },
  {
    q: "Residential facility उपलब्ध आहे का?",
    a: "होय, उपलब्ध सुविधा admin कडून अपडेट करता येतील."
  },
  {
    q: "7 Day Demo आहे का?",
    a: "होय, demo registration form उपलब्ध आहे."
  },
  {
    q: "Diet guidance मिळते का?",
    a: "होय, training-oriented diet guidance उपलब्ध आहे."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-secondary">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <h4 className="section-subtitle">Got Questions?</h4>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{ padding: '1.5rem', cursor: 'pointer', borderLeft: openIndex === index ? '4px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.3)' }}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: openIndex === index ? '700' : '500', color: openIndex === index ? 'var(--primary-color)' : 'var(--text-dark)' }}>
                  {faq.q}
                </h3>
                {openIndex === index ? <ChevronUp size={20} className="text-primary"/> : <ChevronDown size={20} className="text-muted"/>}
              </div>
              
              {openIndex === index && (
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
