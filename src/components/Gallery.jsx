import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import './Gallery.css';

// Initial dummy images
const initialImages = [
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop', // Sports/running
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop', // Gym/Training
  'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=600&auto=format&fit=crop'  // Team/Group
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      setImages(prev => [...newImages, ...prev]);
    }
  };

  return (
    <section className="section-padding bg-secondary" id="gallery">
      <div className="container">
        <div className="section-header">
          <h4 className="section-subtitle">Our Academy</h4>
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-desc">Glimpses of our rigorous training, events, and facilities.</p>
        </div>

        <div className="gallery-controls">
          <label htmlFor="gallery-upload" className="btn btn-outline upload-btn">
            <Upload size={18} /> Add Photos From Device
          </label>
          <input 
            type="file" 
            id="gallery-upload" 
            accept="image/*" 
            multiple 
            onChange={handleImageUpload} 
            style={{ display: 'none' }} 
          />
          <p className="upload-note">
            *Photos added here are for preview purposes and won't be saved permanently to the server.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((imgSrc, index) => (
            <div key={index} className="gallery-item">
              <img src={imgSrc} alt={`Gallery item ${index + 1}`} loading="lazy" />
              <div className="gallery-item-overlay">
                <ImageIcon size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
