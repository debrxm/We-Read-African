import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllBlog } from "../../redux/blog/blog.selector";
import Carousel from "nuka-carousel";
import rightArrow from "../../assets/rightArrow.svg";
import "./slider.scss";

class Slider extends React.Component {
  render() {
    console.log(this.props.allBlogs);
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
          <div
            className="slide-one"
            style={
              this.props.allBlogs && {
                backgroundImage: ` linear-gradient(#00000083, #00000093), url(${this.props.allBlogs[0].image})`,
              }
            }
          >
            <h3>{this.props.allBlogs[0].title}</h3>
          </div>
          <div
            className="slide-two"
            style={
              this.props.allBlogs && {
                backgroundImage: ` linear-gradient(#00000083, #00000093), url(${this.props.allBlogs[1].image})`,
              }
            }
          >
            <h3>{this.props.allBlogs[1].title}</h3>
          </div>
          <div
            className="slide-three"
            style={
              this.props.allBlogs && {
                backgroundImage: ` linear-gradient(#00000083, #00000093), url(${this.props.allBlogs[2].image})`,
              }
            }
          >
            <h3>{this.props.allBlogs[2].title}</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  allBlogs: selectAllBlog,
});

export default connect(mapStateToProps)(Slider);
