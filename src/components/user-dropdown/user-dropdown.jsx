import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './user-dropdown.scss';

const UserDropdown = () => {
  return (
    <div className="user-dropdown">
      <Link className="user-profile" to="/user-profile">
        Profile
      </Link>
      <div className="sign-out" onClick={() => auth.signOut()}>
        <span>LOGOUT</span>
      </div>
    </div>
  );
};

export default UserDropdown;
