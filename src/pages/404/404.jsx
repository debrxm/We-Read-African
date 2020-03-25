import React from 'react';
import { Helmet } from 'react-helmet';
import './404.scss';
const NotFound = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>We Read African &mdash; About</title>
        <meta property="og:title" content="We Read African &mdash; About" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="We Read African" />
        <meta property="og:url" content="https://www.wereadafrican.com/about" />
      </Helmet>
      <h1>404 NOT FOUND</h1>
    </div>
  );
};

export default NotFound;
