import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";

function Stats() {
  const [counts, setCounts] = useState({ year: new Date().getFullYear(), webinars: 0, courses: 0, members: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCountDown('year', 2020, 2000);
          animateCount('webinars', 12, 2000);
          animateCount('courses', 3, 2000);
          animateCount('members', 20, 2000);
        }
      },
      { threshold: 0.3 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  const animateCountDown = (key, target, duration) => {
    const currentYear = new Date().getFullYear();
    const decrement = (currentYear - target) / (duration / 16);
    let current = currentYear;
    const timer = setInterval(() => {
      current -= decrement;
      if (current <= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  const animateCount = (key, target, duration) => {
    const increment = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  return (
    <div className="stats-section" ref={sectionRef}>
      <h2 className="stats-heading">Statistics</h2>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">{counts.year}</div>
          <div className="stat-label">Year of Establishment</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.webinars}+</div>
          <div className="stat-label">Successful Webinars</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.courses}+</div>
          <div className="stat-label">Courses</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.members}+</div>
          <div className="stat-label">Team Members</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
