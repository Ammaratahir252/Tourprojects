import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="text-section">
          <div className="badge">Experience</div>
          <h2 className="title">With our all experience we will serve you</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quas aliquam, hic tempora inventore suscipit unde.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>12k+</h3>
              <p>Successful trip</p>
            </div>
            <div className="stat-item">
              <h3>2k+</h3>
              <p>Regular clients</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <div className="main-image">
            <img src="/path/to/main-image.jpg" alt="Traveler" />
            <span className="location-tag">Los Angeles</span>
          </div>
          <div className="gallery">
            <img src="/path/to/mountain-hiking.jpg" alt="Mountain Hiking" className="gallery-image" />
            <div className="gallery-info">
              <p>Mountain Hiking</p>
              <a href="#details">See details</a>
              <a href="#join" className="join-button">+ Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;