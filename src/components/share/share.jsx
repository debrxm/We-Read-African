import React from 'react';
import facebook from '../../assets/socials/facebook.svg';
import twitter from '../../assets/socials/twitter.svg';
import linkedin from '../../assets/socials/linkedin.svg';
import './share.scss';

const Share = ({ fb, tweet, linked }) => {
  return (
    <div className="share">
      <ul>
        <li>
          <a href="http://www.facebook.com/sharer.php?u=https://wereadafrican.com">
            <img src={facebook} alt="Facebook Icon" />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com">
            <img src={twitter} alt="Twitter Icon" />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://wereadafrican.com">
            <img src={linkedin} alt="Linkedin Icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Share;
