import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import rightArrow from '../../assets/rightArrow.svg';
import './blog-navigation.scss';

class BlogNavigation extends React.Component {
  state = {
    next: null,
    prev: null,
  };
  handleRoutingPrev = () => {
    this.props.blogs.map(async (item) => {
      if (item.title === this.props.title) {
        this.props.history.push(
          `${this.props.blogs[this.props.blogs.indexOf(item) - 1].title
            .split(' ')
            .join('-')
            .toLowerCase()}`
        );
        this.setState({
          next: this.props.blogs[this.props.blogs.indexOf(item) + 1],
          prev: this.props.blogs[this.props.blogs.indexOf(item) - 1],
        });
      }
    });
    // this.props.history.push(
    //   `${this.state.prev.title.split(' ').join('-').toLowerCase()}`
    // );
    // this.setPrevNext();
  };
  handleRoutingNext = () => {
    this.props.blogs.map(async (item) => {
      if (item.title === this.props.title) {
        this.props.history.push(
          `${this.props.blogs[this.props.blogs.indexOf(item) + 1].title
            .split(' ')
            .join('-')
            .toLowerCase()}`
        );
        this.setState({
          next: this.props.blogs[this.props.blogs.indexOf(item) + 1],
          prev: this.props.blogs[this.props.blogs.indexOf(item) - 1],
        });
      }
    });

    // this.setPrevNext();
  };
  setPrevNext = () => {
    this.props.blogs.map(async (item) => {
      if (item.title === this.props.title) {
        await this.setState({
          next: this.props.blogs[this.props.blogs.indexOf(item) + 1],
          prev: this.props.blogs[this.props.blogs.indexOf(item) - 1],
        });
        return item;
      }
    });
  };
  componentDidMount() {
    this.setPrevNext();
  }

  render() {
    return (
      <div className="blog-navigation">
        <div className="previous-blog">
          <div
            className="arrow"
            onClick={this.state.prev ? this.handleRoutingPrev : null}
          >
            <img src={rightArrow} alt="Back Arrow Icon" />
            <span> Previous Post</span>
            <br />
          </div>
          <span className="title">
            {this.state.prev ? this.state.prev.title : null}
          </span>
        </div>
        <div className="next-blog">
          <div
            className="arrow"
            onClick={this.state.next ? this.handleRoutingNext : null}
          >
            <span>Next Post</span>
            <img src={rightArrow} alt="Foward Arrow Icon" />
            <br />
          </div>
          <span className="title">
            {this.state.next ? this.state.next.title : null}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  blogs: selectAllBlog,
});

export default withRouter(connect(mapStateToProps)(BlogNavigation));
