import React from "react";
import GroupPhoto from '../../assets/Group-Photo.jpeg'
import "./About.css";
function About() {
  return (
    <div>
      <section className="about-section-wrapper py-5">
        <div className="container">
          <div className="section-title text-center">
              <h2 className="text_primary">About Us</h2>
              <h1 className="text-white">Chemical Engineering Student's Society</h1>
              <hr width="50%" className="hr" style={{margin: "0 auto"}} />
            </div>
            
            <div className="row margin_top align-items-center">
              <div className="col-sm-6">
                <div className="about-image-wrapper">
                  <img src={GroupPhoto} alt="ChESS Team" className="about-main-image" />
                </div>
              </div>

              <div className="about__lead col-sm-6">
                <h3 className="text-white mb-3">Who We Are</h3>
                <p className="text-white">
                  The Chemical Engineering Student's Society (ChESS) is an
                  independent student run society of Chemical Engineering
                  Department of NIT Durgapur. It is solely dedicated to form a
                  network among all the students, faculty members and alumni of the
                  department.
                </p>
                <p className="text-white">
                  It promotes interaction within the department and
                  implements academic, social and other programs of interest to
                  its members. We are conducting several events every year
                  for the betterment of students.
                </p>
                <a href="/member" className="btn custom-btn btn-9">
                  VIEW OUR TEAM <i className="fa fa-users" aria-hidden="true"></i>
                </a>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default About;
