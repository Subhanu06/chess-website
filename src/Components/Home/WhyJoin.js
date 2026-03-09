import React from "react";
import "./WhyJoin.css";
import TeamImage from "../../assets/Piccc.png";

function WhyJoin() {
  return (
    <div className="why-join-section">
      <div className="why-join-container">
        <h2 className="why-join-title">Why ChESS | <span className="why-join-title-blue">Join Us</span></h2>
        
        <div className="why-join-grid">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-microphone"></i>
              </div>
              <h3 className="feature-title">Webinars</h3>
              <p className="feature-desc">
                Attend professional webinars conducted by industry experts and gain valuable insights into the latest trends in chemical engineering.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-gear"></i>
              </div>
              <h3 className="feature-title">Strategic Thinking</h3>
              <p className="feature-desc">
                Develop innovative problem-solving skills and strategic thinking abilities through workshops and collaborative projects.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="feature-title">Team & Meeting</h3>
              <p className="feature-desc">
                Build strong professional networks and enhance teamwork skills through regular meetings and collaborative activities.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3 className="feature-title">Courses</h3>
              <p className="feature-desc">
                Access specialized courses and training programs designed to enhance your academic knowledge and practical skills.
              </p>
            </div>
          </div>
          
          <div className="illustration-container">
            <img 
              src={TeamImage} 
              alt="Team Collaboration Illustration" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyJoin;
