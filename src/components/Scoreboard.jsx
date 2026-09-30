import React from 'react';
import { Trophy, TrendingUp, Zap, Dumbbell, Timer } from 'lucide-react';

const Scoreboard = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Performance Tracking</h4>
          <h2 className="section-title">PHYSICAL TEST SCOREBOARD</h2>
          <p className="section-desc">Track your progress, see the leaderboard, and improve your personal bests.</p>
        </div>

        <div className="glass-card" style={{ overflowX: 'auto', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Top Performers (Current Batch)</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <select style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <option>All Events</option>
                <option>1600M Run</option>
                <option>100M Sprint</option>
              </select>
            </div>
          </div>
          <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem' }}>Student Name</th>
                <th style={{ padding: '1rem' }}>1600M</th>
                <th style={{ padding: '1rem' }}>100M</th>
                <th style={{ padding: '1rem' }}>Shot Put</th>
                <th style={{ padding: '1rem' }}>Overall Score</th>
                <th style={{ padding: '1rem' }}>Badge</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem', fontWeight: '500' }}>Ramesh Patil</td>
                <td style={{ padding: '1rem' }}>4:45</td>
                <td style={{ padding: '1rem' }}>11.5s</td>
                <td style={{ padding: '1rem' }}>8.5m</td>
                <td style={{ padding: '1rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>95/100</td>
                <td style={{ padding: '1rem' }}><span className="tag" style={{ color: '#FF9800', background: 'rgba(255,152,0,0.1)' }}><Trophy size={14}/> PERSONAL BEST</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem', fontWeight: '500' }}>Suresh Jadhav</td>
                <td style={{ padding: '1rem' }}>4:50</td>
                <td style={{ padding: '1rem' }}>11.8s</td>
                <td style={{ padding: '1rem' }}>8.2m</td>
                <td style={{ padding: '1rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>92/100</td>
                <td style={{ padding: '1rem' }}><span className="tag" style={{ color: '#4CAF50', background: 'rgba(76,175,80,0.1)' }}><TrendingUp size={14}/> IMPROVING</span></td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', fontWeight: '500' }}>Vikash Shinde</td>
                <td style={{ padding: '1rem' }}>4:55</td>
                <td style={{ padding: '1rem' }}>11.2s</td>
                <td style={{ padding: '1rem' }}>7.8m</td>
                <td style={{ padding: '1rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>90/100</td>
                <td style={{ padding: '1rem' }}><span className="tag" style={{ color: '#2196F3', background: 'rgba(33,150,243,0.1)' }}><Zap size={14}/> SPEED</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">तुमचा Progress आम्ही Track करतो</h2>
          <p className="section-desc">Before & After Progress Tracking System.</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {['1600M Time', '100M Sprint', 'Shot Put', 'Body Fitness', 'Written Test'].slice(0,3).map((metric, i) => (
            <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>{metric}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--text-muted)' }}>
                  <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-dark)' }}>Previous</span>
                  (Week 1)
                </div>
                <TrendingUp size={24} className="text-primary" />
                <div style={{ color: 'var(--primary-color)' }}>
                  <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold' }}>Current</span>
                  (Week 4)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scoreboard;
