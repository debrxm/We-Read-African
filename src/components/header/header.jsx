import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import UserDropdown from '../user-dropdown/user-dropdown';
import CustomButton from '../custom-button/custom-button';
import instagram from '../../assets/socials/instagram.svg';
import twitter from '../../assets/socials/twitter.svg';
import facebook from '../../assets/socials/facebook.svg';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.svg';
import user from '../../assets/user.svg';
import arrowDown from '../../assets/arrowDown.svg';
import './header.scss';
const Header = ({ currentUser }) => {
  const [isShow, setisShow] = useState(false);
  const handleToggleUserDropdown = () => {
    setisShow(!isShow);
  };
  return (
    <header className="header">
      {currentUser ? null : (
        <div className="join-tribe">
          <p>
            Join the WeReadAfrican Tribe. Register to be a part of the forum.
          </p>
          <Link to="/signup">
            <CustomButton acen>Register</CustomButton>
          </Link>
        </div>
      )}
      <div className="branding container">
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
        <div className="brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="controls">
          <span className="search">
            <img src={search} alt="Search Icon" />
          </span>

          {currentUser ? (
            <div className="user" onClick={handleToggleUserDropdown}>
              <img
                className="user-icon"
                src={currentUser.imageUrl ? currentUser.imageUrl : user}
                alt="User Icon"
              />
              <img
                className="arrow-down"
                src={currentUser.imageUrl ? null : arrowDown}
                alt="Arrow Down Icon"
              />
              {isShow ? <UserDropdown /> : null}
            </div>
          ) : (
            <Link to="/signup">
              <CustomButton acen>Log In / Register</CustomButton>
            </Link>
          )}
        </div>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              Blog <img src={arrowDown} alt="Down Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link to="/forum" className="nav-link">
              Forum <img src={arrowDown} alt="Down Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link to="/podcast" className="nav-link">
              Podcast
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
