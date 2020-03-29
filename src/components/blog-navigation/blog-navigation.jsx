import React from 'react';
import backArrow from '../../assets/backArrow.svg';
import './blog-navigation.scss';

const BlogNavigation = () => {
  return (
    <div className="blog-navigation">
      <div className="previous-blog">
        <div className="arrow">
          <img src={backArrow} alt="Back Arrow Icon" />
          Previous
        </div>
      </div>
      <div className="next-blog">
        <div className="arrow">
          Next
          <img src={backArrow} alt="Foward Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
