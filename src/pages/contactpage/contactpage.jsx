import React from 'react';
import { Helmet } from 'react-helmet';
import './contactpage.scss';
const Contactpage = () => {
  return (
    <div className="contactpage">
      <Helmet>
        <title>We Read African &mdash; Contact</title>
        <meta property="og:title" content="We Read African &mdash; Contact" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="We Read African" />
        <meta
          property="og:url"
          content="https://www.wereadafrican.com/contact"
        />
      </Helmet>
      <h1>CONTACT PAGE</h1>
    </div>
  );
};

export default Contactpage;
