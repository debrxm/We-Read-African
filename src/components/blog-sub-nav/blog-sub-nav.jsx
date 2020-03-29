import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './blog-sub-nav.scss';
class BlogSubNav extends React.Component {
  state = {
    isLoading: true
  };
  render() {
    const { history} = this.props;
    return (
          <div className="sub-nav">
            <ul className="sub-nav-links">
              <li>
                <Link
                  to="/blog"
                  className="sub-nav-link"
                  style={
                    history.location.pathname === '/blog'
                      ? { borderBottom: '3px solid #77323b' }
                      : { border: 'none' }
                  }
                >
                  All Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/book_review"
                  className="sub-nav-link"
                  style={
                    history.location.pathname === '/blog/book_review'
                      ? { borderBottom: '3px solid #77323b' }
                      : { border: 'none' }
                  }
                >
                  Book Review
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/lit_anatomy"
                  className="sub-nav-link"
                  style={
                    history.location.pathname === '/blog/lit_anatomy'
                      ? { borderBottom: '3px solid #77323b' }
                      : { border: 'none' }
                  }
                >
                  Lit Anatomy
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/african_lit_&_life"
                  className="sub-nav-link"
                  style={
                    history.location.pathname === '/blog/african_lit_&_life'
                      ? { borderBottom: '3px solid #77323b' }
                      : { border: 'none' }
                  }
                >
                  African Lit & Life
                </Link>
              </li>
            </ul>
          </div>
    );
  }
}

export default withRouter(BlogSubNav)
