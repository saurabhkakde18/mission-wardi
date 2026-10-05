import React, { useState } from 'react';
import './OTPLogin.css';

const OTPLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const targetEmail = 'akshsonawane777@gmail.com';
  const simulatedOTP = '123456';

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (email === targetEmail) {
      setStep(2);
      setError('');
      alert(`OTP sent to ${email}. (Use 123456 for testing)`);
    } else {
      setError('Please use the registered email (akshsonawane777@gmail.com)');
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp === simulatedOTP) {
      onLoginSuccess();
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>Secure Login</h2>
        <p className="otp-subtitle">Mission Wardi Academy</p>
        
        {step === 1 ? (
          <form onSubmit={handleSendOTP} className="otp-form">
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" className="primary-btn">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="otp-form">
            <div className="input-group">
              <label>Enter OTP</label>
              <input 
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                maxLength={6}
                required
              />
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button type="submit" className="primary-btn">Verify & Proceed</button>
            <button type="button" className="text-btn" onClick={() => setStep(1)}>
              Change Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OTPLogin;
