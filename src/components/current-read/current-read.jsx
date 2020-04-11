import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentReading } from '../../redux/blog/blog.selector';

import './current-read.scss';
const CurrentRead = ({ reading }) => {
  return (
    <div className="current-read">
      <h4>Current Read</h4>
      <br />
      {reading ? (
        <div className="read-container">
          <img src={reading.image} alt="current read img" />
          <h3 className="reading">{reading.title}</h3>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  reading: selectCurrentReading,
});
export default connect(mapStateToProps)(CurrentRead);
