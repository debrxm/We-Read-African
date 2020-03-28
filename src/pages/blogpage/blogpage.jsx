import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
// import { firestore } from '../../firebase/firebase.utils';
import { updateCategories } from '../../redux/blog/blog.actions';
import PostPage from '../postpage/postpage';
import BlogPosts from '../../components/blog-posts/blog-posts';
// import NewsletterPopup from '../../components/newsletter-popup/newsletter-popup';
// import loader from '../../assets/loader.gif';
import './blogpage.scss';
class Blogpage extends React.Component {
  state = {
    isLoading: true
  };
  render() {
    const { match } = this.props;
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
        <div className="left">
          <Route exact path={`${match.path}`} component={BlogPosts} />
          <Route
            exact
            path={`/blog/book_review/:blogId`}
            component={PostPage}
          />
          <Route
            exact
            path={`/blog/lit_anatomy/:blogId`}
            component={PostPage}
          />
          <Route
            exact
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

export default connect(mapStateToProps, mapDispatchToProps)(Blogpage);
