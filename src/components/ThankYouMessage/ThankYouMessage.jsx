import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYouMessage.scss';

const ThankYouMessage = () => {
  return (
    <div className="NotFound">
      <h1>Thank you for reaching out</h1>
      <p>
        Your message has been successfully received. I’ll contact you as soon as
        i can. <br></br> Thank you
      </p>
      <Link to="/">Go To HomePage</Link>
    </div>
  );
};

export default ThankYouMessage;
