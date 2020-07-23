import React from 'react';
import './ThankYouPage.scss';

const ThankYouPage = (props) => {
  return (
    <div className="coming-soon-container">
      <div id="thankyouPageContaioner">
        <h1 id="heading">Thank You!</h1>
        <p>
          You're now part of the tribe. An email will be sent to you shortly. No
          email? Be sure to check your junk mail for your FREE downloadable
          bookmark, it may be hiding there.
        </p>
        <div className="social">
          <a href="https://www.pinterest.co.uk/wereadafrican/"></a>
          <a href="https://www.instagram.com/wereadafrican"></a>
          <a href="https://www.twitter.com/wereadafrican"></a>
          <a href="https://www.facebook.com/wereadafrican"></a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
