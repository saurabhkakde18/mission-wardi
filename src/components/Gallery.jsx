import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [media, setMedia] = useState([]);

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newMedia = files.map(file => ({
        type: file.type.startsWith('video/') ? 'video' : 'image',
        src: URL.createObjectURL(file)
      }));
      setMedia(prev => [...newMedia, ...prev]);
    }
  };

  return (
    <section className="section-padding bg-secondary" id="gallery">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Our Academy</h4>
          <h2 className="section-title">Photo & Video Gallery</h2>
          <p className="section-desc">Glimpses of our rigorous training, events, and facilities.</p>
        </div>

        <div className="gallery-controls">
          <label htmlFor="gallery-upload" className="btn btn-outline upload-btn">
            <Upload size={18} /> Add Photos/Videos From Device
          </label>
          <input 
            type="file" 
            id="gallery-upload" 
            accept="image/*,video/*" 
            multiple 
            onChange={handleMediaUpload} 
            style={{ display: 'none' }} 
          />
          <p className="upload-note">
            *Media added here are for preview purposes and won't be saved permanently to the server.
          </p>
        </div>

        <div className="gallery-grid">
          {media.map((item, index) => (
            <div key={index} className="gallery-item">
              {item.type === 'video' ? (
                <video src={item.src} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img src={item.src} alt={`Gallery item ${index + 1}`} loading="lazy" />
              )}
              {item.type !== 'video' && (
                <div className="gallery-item-overlay">
                  <ImageIcon size={32} />
                </div>
              )}
            </div>
          ))}
          
          {media.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              No media added yet. Click the button above to upload photos or videos!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
