import React from 'react';
import headingPattern from '../../assets/headingPattern.svg';
import line from '../../assets/line.svg';
import './custom-heading.scss';
const CustomHeading = ({ children, hasLine, ...otherProps }) => {
  return (
    <div className="custom-heading">
      <img
        src={hasLine ? line : headingPattern}
        alt="Heading Pattern"
        className="before"
        style={
          hasLine
            ? {
                transform: 'rotate(180deg)',
                marginRight: '10px',
                width: '100%',
              }
            : { transform: 'rotate(0deg)' }
        }
      />
      <h3>{children}</h3>
      <img
        src={hasLine ? line : headingPattern}
        alt="Heading Pattern"
        className="after"
        style={
          hasLine
            ? {
                width: '100%',
              }
            : { transform: 'rotate(0deg)' }
        }
      />
    </div>
  );
};

export default CustomHeading;
