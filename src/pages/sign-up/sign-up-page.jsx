import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../components/sign-up/sign-up';
import instagram from '../../assets/socials/instagram.svg';
import twitter from '../../assets/socials/twitter.svg';
import facebook from '../../assets/socials/facebook.svg';
import backArrow from '../../assets/backArrow.svg';
import weR from '../../assets/weR.svg';
import './sign-up-page.scss';

const SignUpPage = () => {
  return (
    <div className="sign-in-page">
      <Link to="/" className="back container">
        <img src={backArrow} alt="Back Arrow Icon" />
        <span>Back to home</span>
      </Link>
      <div className="left-right container">
        <div className="left">
          <img
            className="logo"
            src={weR}
            alt="We Read African Logo with Text"
          />
          <div className="join-tribe">
            <p>
              Join the WeReadAfrican Tribe. Register to be a part of the forum.
            </p>
            <div className="social">
              <span className="icon-border">
                <img src={instagram} alt="Instagram Icon" />
              </span>
              <span className="icon-border">
                <img src={twitter} alt="Twitter Icon" />
              </span>
              <span className="icon-border">
                <img src={facebook} alt="Facebook Icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
