import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import comingSoonBg from '../../assets/coming-soon/coming-soon-bg.svg';
import './coming-soon.scss';

//External Components.
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import ComingSoon from '../../components/coming-soon/coming-soon';
const ComingSoonPage = ({ isSuccess }) => {
  return (
    <div
      className="coming-soon-page"
      style={{ backgroundImage: `url(${comingSoonBg})` }}
    >
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isSuccess ? <Redirect to="/thank-you" /> : <ComingSoon />
          }
        />
        <Route
          exact
          path="/thank-you"
          render={() => (isSuccess ? <ThankYouPage /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isSuccess: state.comingSoon.isSubscribed,
  };
};
export default connect(mapStateToProps)(ComingSoonPage);
