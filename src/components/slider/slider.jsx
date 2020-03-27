import React from 'react';
import Carousel from 'nuka-carousel';
import rightArrow from '../../assets/rightArrow.svg';
import './slider.scss';

export default class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button className="ctrl-btn prev" onClick={previousSlide}>
              <img src={rightArrow} alt="" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className="ctrl-btn next" onClick={nextSlide}>
              <img src={rightArrow} alt="" />
            </button>
          )}
        >
          <div className="slide-one">
            <h3>Book Review: Half of a Yellow Sun</h3>
          </div>
          <div className="slide-two">
            <h3>Book Review: Half of a Yellow Sun</h3>
          </div>
          <div className="slide-three">
            <h3>Book Review: Half of a Yellow Sun</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
