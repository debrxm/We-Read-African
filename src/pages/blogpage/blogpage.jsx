import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { firestore} from '../../firebase/firebase.utils';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
import { updateCategories } from '../../redux/blog/blog.actions';
import BlogPosts from '../../components/blog-posts/blog-posts';
import TagPage from '../tagpage/tagpage';
import PostPage from '../postpage/postpage';
import BlogSubNav from '../../components/blog-sub-nav/blog-sub-nav';
import './blogpage.scss';
class Blogpage extends React.Component {
  state = {
    isLoading: true
  };
  render() {
    const { history, match } = this.props;
    return (
      <div className="blog-page">
        <Helmet>
          <title>We Read African &mdash; Blogs</title>
          <meta property="og:title" content="We Read African &mdash; Blogs" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta
            property="og:url"
            content="https://www.wereadafrican.com/blog"
          />
        </Helmet>
        {history.location.pathname === '/blog' ? (
          <BlogSubNav />
        ) : history.location.pathname === '/blog/book_review' ? (
          <BlogSubNav />
        ) : history.location.pathname === '/blog/lit_anatomy' ? (
          <BlogSubNav />
        ) : history.location.pathname === '/blog/african_lit_&_life' ? (
          <BlogSubNav />
        ) : null}

        <div className="left">
          <Route exact path={`${match.path}`} component={BlogPosts} />
          <Route exact path={`/blog/:tagId`} component={TagPage} />
          <Route path={`/blog/book_review/:blogId`} component={PostPage} />
          <Route path={`/blog/lit_anatomy/:blogId`} component={PostPage} />
          <Route
            path={`/blog/african_lit_&_life/:blogId`}
            component={PostPage}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCategories: collectionsMap => dispatch(updateCategories(collectionsMap))
});

const mapStateToProps = createStructuredSelector({
  allBlog: selectAllBlog
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Blogpage)
);
