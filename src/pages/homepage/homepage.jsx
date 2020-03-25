import React from 'react';
import { Helmet } from 'react-helmet';
import './homepage.scss';
const Homepage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>We Read African</title>
        <meta property="og:title" content="We Read African" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="REMEDI" />
        <meta property="og:url" content="https://www.wereadafrican.com" />
      </Helmet>
      <h1>HOMEPAGE</h1>
    </div>
  );
};

export default Homepage;
