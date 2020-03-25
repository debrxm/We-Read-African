import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Loader from '../../components/loader/loader';
import './user-profile-page.scss';
const UserProfilePage = ({ currentUser }) => {
  return currentUser ? (
    <div className="user-profile-page">
      <Helmet>
        <title>We Read African &mdash; Profile</title>
        <meta property="og:title" content="We Read African &mdash; Profile" />
        <meta property="og:type" content="website" />
        <meta name="description" content=" " />
        <meta property="og:site_name" content="We Read African" />
        <meta
          property="og:url"
          content="https://www.wereadafrican.com/user-profile"
        />
      </Helmet>
      <div className="head">
        <h2>My Account</h2>
      </div>
      <div className="body"></div>
    </div>
  ) : (
    <Loader />
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(UserProfilePage);
