import React from 'react';
import { Helmet } from 'react-helmet';
import './aboutpage.scss';
const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <Helmet>
        <title>We Read African &mdash; About</title>
        <meta property="og:title" content="We Read African &mdash; About" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="We Read African" />
        <meta property="og:url" content="https://www.wereadafrican.com/about" />
      </Helmet>
      <h1>ABOUT PAGE</h1>
    </div>
  );
};

export default Aboutpage;
