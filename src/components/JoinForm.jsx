import React, { useState } from 'react';
import { Send, User, Calendar, Phone, MapPin } from 'lucide-react';
import './JoinForm.css';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, dob, mobile, city } = formData;
    const message = `Hello Mission Wardi! I want to join the academy. Here are my details:\n\n*Name:* ${name}\n*DOB:* ${dob}\n*Mobile No:* ${mobile}\n*City:* ${city}`;
    const whatsappUrl = `https://wa.me/919765770076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding bg-main" id="join-form">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Take The First Step</h4>
          <h2 className="section-title">JOIN MISSION WARDI</h2>
          <p className="section-desc">Fill out the enquiry form below, and we will get back to you immediately.</p>
        </div>

        <div className="join-form-wrapper glass-card">
          <form className="join-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Student Name</label>
              <div className="input-group">
                <User size={20} className="input-icon" />
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your full name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <div className="input-group">
                <Calendar size={20} className="input-icon" />
                <input 
                  type="date" 
                  id="dob" 
                  name="dob" 
                  value={formData.dob}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile No.</label>
              <div className="input-group">
                <Phone size={20} className="input-icon" />
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  placeholder="Enter your mobile number" 
                  value={formData.mobile}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <div className="input-group">
                <MapPin size={20} className="input-icon" />
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  placeholder="Enter your city" 
                  value={formData.city}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Enquiry on WhatsApp <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
