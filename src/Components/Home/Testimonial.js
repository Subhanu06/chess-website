import React from "react";
import "./Testimonial.css";
import PP from "../../assets/PP.jpg";

function Testimonial() {
  return (
    <div className="hod-testimonial">
      <h2 className="hod-testimonial__title">Our HOD's Opinion</h2>
      <div className="hod-testimonial__card">
        <img src={PP} alt="HOD" className="hod-testimonial__image" />
        <div className="hod-testimonial__content">
          <div className="hod-testimonial__quote">❝</div>
          <p className="hod-testimonial__text">
            Chemical Engineering Students' Society is dedicated to developing professional and personal skills of students through a variety of events and activities for overall development. We prepare and guide students for competitive exams and interviews, blending real-world problems in the curriculum taught by industry experts. Our focus is to effectively train chemical engineers who can serve society competently, collaboratively and ethically.
          </p>
          <p className="hod-testimonial__name">Dr. Parimal Pal</p>
          <p className="hod-testimonial__title-text">Professor (HAG), Department of Chemical Engineering</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
