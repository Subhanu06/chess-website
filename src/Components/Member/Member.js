import React from "react";
import "./Member.css";
import Rahul from "../../assets/Rahul.jpg";
import Sandeep from "../../assets/Sandeep.png";
import Madhuri from "../../assets/Madhuri.jpg";
import Rohit from "../../assets/Rohit.jpg";
import Avijit from "../../assets/Avijit.jpg";
import Shantanu from "../../assets/Shantanu.jpg";
import Bhashitha from "../../assets/Bhashitha.jpg";
import Shreya from "../../assets/Shreya.jpg";
import Preetham from "../../assets/Preetam.jpg";
import Kamini from "../../assets/Kamini.jpg";
import Monish from "../../assets/Monish .jpeg";
import Abhinav from "../../assets/Abhinav.png";
import Ashu from "../../assets/ashu.jpg";
import Amiyo from "../../assets/amiyo.jpg";
import Shazeena from "../../assets/20250308_124939 - Shazeena Hussain.jpg";
import Abrar from "../../assets/Abrar.jpg";
import Adrijo from "../../assets/Adrijo.png";
import Bhaskar from "../../assets/Bhaskar.jpg";
import Harsh from "../../assets/Harsh.jpg";
import Rohitt from "../../assets/Rohitt.jpg";
import Mithu from "../../assets/Mithu.jpg";
import Pankaj from "../../assets/Pankaj.png";
import Pravallika from "../../assets/Pravallika .png";
import Sagnik from "../../assets/Sagnik.jpg";
import Shrestha from "../../assets/Shrestha.png";
import Souhardhya from "../../assets/Souhardya.JPG";
import Subhanu from "../../assets/Subhanu.jpg";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Member() {
  return (
    <div>
      <NavBar />
      <div className="container team__member">
        <div className="section-title">
          <h1>Our Team</h1>
          <hr className="hr" width="50%" style={{ margin: "0 auto" }} />
        </div>
        <div className="outer members__box__wrap">
          <div className="section-title">
            <h3>M.Tech Representative</h3>
          </div>
          <div className="members__grid members__grid--single">
            <div className="member__card">
              <img src={Shazeena} alt="Shazeena" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Shazeena Hussain</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-title">
  <h1>B.Tech Students</h1>
  <hr className="hr" width="50%" style={{ margin: "0 auto" }} />
</div>

<div className='outer members__box__wrap'>
  <div className="section-title">
    <h3>Batch of 2027</h3>
  </div>

  <div className="members__grid">

    <div className="member__card">
      <img src={Sandeep} alt="Sandeep" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Sandeep Kumar</p>
        <p className="member__role">President</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Shantanu} alt="Shantanu" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Shantanu Bhunia</p>
        <p className="member__role">Vice President</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Bhashitha} alt="Bhashitha" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Bhashitha</p>
        <p className="member__role">General Secretary</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Preetham} alt="Preetam" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Preetam</p>
        <p className="member__role">Treasurer</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Madhuri} alt="Madhuri" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Madhuri Villuri</p>
        <p className="member__role">Convenor</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Kamini} alt="Kamini" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Kamini Mishra</p>
        <p className="member__role">Co-convenor</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Shreya} alt="Shreya" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Shreya Sinha</p>
        <p className="member__role">Editor in Chief</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Monish} alt="Monish" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Monish S N</p>
        <p className="member__role">Event Head</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Abhinav} alt="Abhinav" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Abhinav Kumar</p>
        <p className="member__role">Operation Head</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Rohit} alt="Rohith" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Rohit M</p>
        <p className="member__role">Design Head</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Avijit} alt="Avijit" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Avijit Giri</p>
        <p className="member__role">Tech Head</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Rahul} alt="Rahul Dev" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Rahul Dev</p>
        <p className="member__role">Publicity Head</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Ashu} alt="Ashu Kumar Gupta" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Ashu Kumar Gupta</p>
        <p className="member__role">Sponsorship Head</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Amiyo} alt="Amiyo Sarkar" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Amiyo Sarkar</p>
        <p className="member__role">Logistics Head</p>
      </div>
    </div>

  </div>
</div>
       <div className='outer members__box__wrap'>
  <div className="section-title">
    <h3>Batch of 2028</h3>
  </div>

  <div className="members__grid">

    <div className="member__card">
      <img src={Subhanu} alt="Subhanu Dhar" style={{objectPosition: "center 20%"}} loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Subhanu Dhar</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Mithu} alt="Mithu Paul" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Mithu Paul</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Abrar} alt="Abrar Ahammad Khan" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Abrar Ahammad Khan</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Adrijo} alt="Adrijo Roy" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Adrijo Roy</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Bhaskar} alt="Bhaskar Saha" style={{objectPosition: "center 30%"}} loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Bhaskar Saha</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Harsh} alt="Harsh Gupta" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Harsh Gupta</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Pankaj} alt="Pankaj Soni" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Pankaj Soni</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Pravallika} alt="S. Pravallika" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">S. Pravallika</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Rohitt} alt="Rohit Balla" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Rohit Balla</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Sagnik} alt="Sagnik Mondal" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Sagnik Mondal</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Shrestha} alt="Shrestha Giri" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Shrestha Giri</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

    <div className="member__card">
      <img src={Souhardhya} alt="Souhardhya Nayak" loading="lazy" />
      <div className="member__overlay">
        <p className="member__name">Souhardhya Nayak</p>
        <p className="member__role">Executive Member</p>
      </div>
    </div>

  </div>
</div>
      </div>

      <Footer />
    </div>
  );
}

export default Member;
