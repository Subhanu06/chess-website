import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        
        <div className="footer__col brand-col">
          <h2 className="footer__brand-title">Ch<span>ESS</span></h2>
          <p className="footer__desc">
            Chemical Engineering Students' Society at NIT Durgapur - Fostering excellence through innovation&nbsp;and&nbsp;collaboration.
          </p>
          <p className="footer__desc" style={{marginTop: '10px', fontSize: '12px'}}>
            © {new Date().getFullYear()} ChESS. All rights reserved.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact Info</h3>
          <div className="footer__contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <div>NIT Durgapur</div>
              <div>West Bengal</div>
            </div>
          </div>
          <div className="footer__contact-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <div>Email us:</div>
              <a href="mailto:chessnitd2020@gmail.com">chessnitd2020@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <div className="footer__links">
            <Link className="footer__link-btn" to="/">Home</Link>
            <Link className="footer__link-btn" to="/faculty">Faculty</Link>
            <Link className="footer__link-btn" to="/member">Members</Link>
            <Link className="footer__link-btn" to="/blogs">Blogs</Link>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Newsletter</h3>
          <form className="footer__form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input type="email" placeholder="Email Address" className="footer__input" required />
            <button type="submit" className="footer__submit">Submit</button>
          </form>
        </div>
        
      </div>

      <hr className="footer__divider" />

      <div className="footer__social">
        <a href="https://www.facebook.com/Chessnitd" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com/chess_nit_dgp/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCZ-mhpK4AzJzpa3yZTR_P9w" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
