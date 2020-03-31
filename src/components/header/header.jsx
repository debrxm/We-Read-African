import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
          <img className="icon" src={instagram} alt="Instagram Icon" />

          <img className="icon" src={twitter} alt="Twitter Icon" />

          <img className="icon" src={facebook} alt="Facebook Icon" />
        </div>
        <div className="brand">
          <Link to="/">
            {' '}
            <img src={logo} alt="Logo" />
          </Link>
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
                alt="user"
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
            <Link to="/signin">
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
                history.location.pathname.includes('/blog')
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
