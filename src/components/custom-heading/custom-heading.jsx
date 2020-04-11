import React from 'react';
import headingPattern from '../../assets/headingPattern.svg';
// import line from '../../assets/line.svg';
import './custom-heading.scss';
const CustomHeading = ({ children, hasLine, ...otherProps }) => {
  return (
    <div className="custom-heading">
      <img src={headingPattern} alt="Heading Pattern" className="before" />
      <h3>{children}</h3>
      <img src={headingPattern} alt="Heading Pattern" className="after" />
    </div>
  );
};

export default CustomHeading;
