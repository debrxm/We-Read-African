import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
// import user from '../../assets/user.svg';
import userIco from '../../assets/userIco.svg';
import arrowDown from '../../assets/arrowDown.svg';
import './header.scss';
const Header = ({ currentUser, history }) => {
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
                src={currentUser.photoURL ? currentUser.photoURL : userIco}
                alt="User Icon"
              />
              <span>{currentUser.displayName}</span>
              <img
                className="arrow-down"
                src={arrowDown}
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
            <Link
              to="/"
              className="nav-link"
              style={
                history.location.pathname === '/'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              style={
                history.location.pathname === '/about'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="nav-link"
              style={
                history.location.pathname === '/blog'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Blog <img src={arrowDown} alt="Down Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/forum"
              className="nav-link"
              style={
                history.location.pathname === '/forum'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Forum <img src={arrowDown} alt="Down Arrow Icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/podcast"
              className="nav-link"
              style={
                history.location.pathname === '/podcast'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Podcast
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              style={
                history.location.pathname === '/contact'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
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

export default withRouter(connect(mapStateToProps)(Header));
