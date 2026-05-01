import React from "react";
import "./Member.css";
import PDutta from "../../assets/PDutta.jpg";
import Yoshita from "../../assets/IMG_20241215_112108 - Yoshitha Reddy.jpg";
import Aditi from "../../assets/00954e8e-854b-42fc-9111-b70abba815b8 - ADITI Mahto.jpeg";
import Alla from "../../assets/IMG_20251111_145449 - Vamsi Alla.jpg";
import Manoj from "../../assets/IMG_5440 - Manoj Kumar Doki.jpg";
import Azmeera from "../../assets/IMG_20250709_001815_251 - Azmeera Akhil.webp";
import Shazeena from "../../assets/20250308_124939 - Shazeena Hussain.jpg";
import Milita from "../../assets/IMG_20250225_121913 - Milita Ghosh.jpg";
import Abhishekh from "../../assets/chess_img - David Abhisekh G.jpg";
import Rakshit from "../../assets/pic2 - Sima Rakshit.jpg";
import Jaswanth from "../../assets/IMG_4175 - JASWANTH KANDREGULA.JPG";
import Rahul from "../../assets/IMG_9881~2 - Rahul Dev.jpg";
import Sandeep from "../../assets/IMG_20250223_213251513_HDR~2 - sandeep sambangi.jpg";
import Madhuri from "../../assets/Screenshot_2025-08-17-01-08-43-339_com.whatsapp-edit - Madhuri Villuri.jpg";
import Rohit from "../../assets/IMG-20250214-WA0025 - Rohit M.jpg";
import Avijit from "../../assets/IMG_20251003_162620 - AVIJIT GIRI.jpg";
import Shantanu from "../../assets/IMG-20250818-WA0004 - Shantanu Bhunia.jpg";
import Bhashitha from "../../assets/IMG_20250307_222148 - Bhashitha Pendekatla.jpg";
import Shreya from "../../assets/photo - Shreya Sinha.jpg";
import Preetham from "../../assets/BodasingiPreetham.jpeg";
import CharanTeja from "../../assets/PochepalliCharamTeja-TechHead.jpeg";
import Kamini from "../../assets/Kamini.jpeg";
import Monish from "../../assets/Monish.S.N.jpeg";
import Abhinav from "../../assets/Abhinav.jpeg";

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
              <img src={PDutta} alt="Pratik Dutta" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Pratik Dutta</p>
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
            <h3>Batch of 2026</h3>
          </div>
          <div className="members__grid">
            <div className="member__card">
              <img src={Jaswanth} alt="Jaswanth Kandregula" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Jaswanth Kandregula</p>
                <p className="member__role">President</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Alla} alt="Vamsi Alla" style={{objectPosition: "30% 20%"}} loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Vamsi Alla</p>
                <p className="member__role">General Secretary</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Aditi} alt="Aditi Mahto" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Aditi Mahto</p>
                <p className="member__role">Vice President</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Abhishekh} alt="David Abhisekh G" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">David Abhisekh G</p>
                <p className="member__role">Treasurer</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Manoj} alt="Manoj Kumar Doki" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Manoj Kumar Doki</p>
                <p className="member__role">Convener</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Yoshita} alt="Yoshitha Reddy" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Yoshitha Reddy</p>
                <p className="member__role">Design Head</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Azmeera} alt="Azmeera Akhil" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Azmeera Akhil</p>
                <p className="member__role">Operation Head</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Shazeena} alt="Shazeena Hussain" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Shazeena Hussain</p>
                <p className="member__role">Sponsorship Head</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Milita} alt="Milita Ghosh" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Milita Ghosh</p>
                <p className="member__role">Publicity Head</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Rakshit} alt="Srinjay Rakshit" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Srinjay Rakshit</p>
                <p className="member__role">Event Head</p>
              </div>
            </div>
            <div className="member__card">
              <img src={CharanTeja} alt="Pochepalli Charan Teja" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Pochepalli Charan Teja</p>
                <p className="member__role">Tech Head</p>
              </div>
            </div>
          </div>
        </div>

        <div className='outer members__box__wrap'>
          <div className="section-title">
            <h3>Batch of 2027</h3>
          </div>
          <div className="members__grid">
            <div className="member__card">
              <img src={Rahul} alt="Rahul Dev" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Rahul Dev</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Sandeep} alt="Sandeep Sambangi" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Sandeep Sambangi</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Madhuri} alt="Madhuri Villuri" style={{objectPosition: "center 30%"}} loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Madhuri Villuri</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Rohit} alt="Rohit M" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Rohit M</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Avijit} alt="Avijit Giri" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Avijit Giri</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Shantanu} alt="Shantanu Bhunia" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Shantanu Bhunia</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Bhashitha} alt="Bhashitha Pendekatla" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Bhashitha Pendekatla</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Shreya} alt="Shreya Sinha" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Shreya Sinha</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Preetham} alt="Bodasingi Preetham" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Bodasingi Preetham</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Kamini} alt="Kamini" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Kamini</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Monish} alt="Monish S N" loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Monish S N</p>
                <p className="member__role">Executive Member</p>
              </div>
            </div>
            <div className="member__card">
              <img src={Abhinav} alt="Abhinav" style={{objectPosition: "center 20%"}} loading="lazy" />
              <div className="member__overlay">
                <p className="member__name">Abhinav</p>
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
