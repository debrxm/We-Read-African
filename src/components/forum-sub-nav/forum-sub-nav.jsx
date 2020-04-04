import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './forum-sub-nav.scss';
class ForumSubNav extends React.Component {
  state = {
    isLoading: true
  };
  render() {
    const { history } = this.props;
    return (
      <div className="sub-nav">
        <ul className="sub-nav-links">
          <li>
            <Link
              to="/forum"
              className="sub-nav-link"
              style={
                history.location.pathname === '/forum'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Latest Topics
            </Link>
          </li>
          <li>
            <Link
              to="/forum/trending_topics"
              className="sub-nav-link"
              style={
                history.location.pathname === '/forum/trending_topics'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Trending Topics
            </Link>
          </li>
          <li>
            <Link
              to="/forum/featured_topics"
              className="sub-nav-link"
              style={
                history.location.pathname === '/forum/featured_topics'
                  ? { borderBottom: '3px solid #77323b' }
                  : { border: 'none' }
              }
            >
              Featured Topics
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(ForumSubNav);
