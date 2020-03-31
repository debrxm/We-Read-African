import React from 'react';
import rightArrow from '../../assets/rightArrow.svg';
import './blog-navigation.scss';

const BlogNavigation = () => {
  return (
    <div className="blog-navigation">
      <div className="previous-blog">
        <div className="arrow">
          <img src={rightArrow} alt="Back Arrow Icon" />
          <span> Previous Post</span>
        </div>
      </div>
      <div className="next-blog">
        <div className="arrow">
          <span>Next Post</span>
          <img src={rightArrow} alt="Foward Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default BlogNavigation;
