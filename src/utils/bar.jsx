import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPlayedTime } from '../redux/podcast/podcast.selector';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { updatePercentage } from '../redux/podcast/podcast.actions';

class Bar extends React.Component {
  componentDidMount() {
    const { onTimeUpdate, playedTime, sidebarplaying } = this.props;
    if ((playedTime !== 0) & sidebarplaying) {
      onTimeUpdate(playedTime);

      const updateTimeOnMove = (eMove) => {
        onTimeUpdate(this.calcClickedTime(eMove));
      };

      document.addEventListener('load', updateTimeOnMove);
    }
  }

  calcClickedTime = (e) => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = this.props.duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };
  render() {
    const { duration, curTime, onTimeUpdate, updatePercentage } = this.props;

    const curPercentage = (curTime / duration) * 100;

    function formatDuration(duration) {
      return moment
        .duration(duration, 'seconds')
        .format('mm:ss', { trim: false });
    }

    const handleTimeDrag = (e) => {
      onTimeUpdate(this.calcClickedTime(e));

      const updateTimeOnMove = (eMove) => {
        onTimeUpdate(this.calcClickedTime(eMove));
      };
      document.addEventListener('mousemove', updateTimeOnMove);

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', updateTimeOnMove);
      });
    };
    updatePercentage(curTime);

    return (
      <div className="bar">
        <div
          className="bar__progress"
          style={{
            background: `linear-gradient(to right, #77323b ${curPercentage}%, white 0)`,
          }}
          onMouseDown={(e) => handleTimeDrag(e)}
        >
          <span
            className="bar__progress__knob"
            style={{ left: `${curPercentage}%` }}
          />
        </div>
        <div className="bar-footer">
          <span className="bar__time">{formatDuration(curTime)}</span>
          <span className="bar__time">{formatDuration(duration)}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updatePercentage: (percent) => dispatch(updatePercentage(percent)),
});
const mapStateToProps = createStructuredSelector({
  playedTime: selectPlayedTime,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
