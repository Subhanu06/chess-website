import React from "react";
import "./NewHome.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import GroupPhoto from "../../assets/Group-Photo.jpeg";
import Team from "../../assets/team.jpg";

function NewHome() {
  return (
    <div className="new-home">
      <NavBar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>WELCOME TO ChESS: REVIVAL OF CHEMICAL ENGINEERING AT NIT DURGAPUR</h1>
          </div>
          <div className="hero-image">
            <img src={GroupPhoto} alt="ChESS Team" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About Us & What We Do</h2>
        <div className="about-container">
          <div className="about-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YxHAG6oSfsw"
              title="ChESS Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="about-text">
            <h3>About ChESS</h3>
            <p>
              The Chemical Engineering Student's Society (ChESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur. It is solely dedicated to form a network among all the students, faculty members and alumni of the department. It promotes interaction within the department and implements academic, social and other programs of interest to its members.
            </p>
            <a href="/member" className="btn-primary">VIEW OUR TEAM</a>
          </div>
        </div>
      </section>

      {/* Why ChESS Section */}
      <section className="why-chess-section">
        <div className="why-chess-container">
          <div className="why-chess-cards">
            <div className="feature-card">
              <div className="card-icon">🎤</div>
              <h4>Webinars</h4>
              <p>We conduct seminars on a variety of topics.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">⚙️</div>
              <h4>Strategic Thinking</h4>
              <p>We conduct hackathons so students can work upon practical problems.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">👥</div>
              <h4>Clean Team</h4>
              <p>We have members who work hard to make ChESS better everyday.</p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🧠</div>
              <h4>Courses</h4>
              <p>We conduct courses for additional skill development.</p>
            </div>
          </div>
          <div className="why-chess-image">
            <img src={Team} alt="Team Collaboration" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="statistics-content">
          <h3>Statistics</h3>
          <h1>2020</h1>
          <p>YEAR OF ESTABLISHMENT</p>
        </div>
      </section>

      {/* HOD Opinion Section */}
      <section className="hod-section">
        <h2 className="section-title">Our HOD's Opinions</h2>
        <div className="hod-card">
          <div className="quote-icon">"</div>
          <p>
            Chemical Engineering Students' society is working with a motivation of developing professional and personal skills of students, which facilitate them to perform magnificently as an eminent engineer in the society. This society is aimed to provide a platform to showcase and sharpen student's talents through a variety of events and activities planned throughout four years, for overall development of students personalities.
          </p>
          <div className="hod-info">
            <h4>Dr. Ramanan Jojjat</h4>
            <span>HOD, Chemical Engineering</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NewHome;
