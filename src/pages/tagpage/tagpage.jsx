import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { selectTagPost } from '../../redux/blog/blog.selector';
import PostPreview from '../../components/post-preview/post-preview';
import './tagpage.scss';

const TagPage = ({ blogs, match }) => {
  return (
    <div className="tag-page container">
      <div className="output">
        {blogs ? (
          blogs.map(blog => (
            <PostPreview showDate showTrunc key={blog.title} blog_data={blog} />
          ))
        ) : (
          <div className="loader">
            {/* <img id="loader" src={loader} alt="Loader" /> */}
            {/* <p className="date">No more posts</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    blogs: selectTagPost(ownProps.match.params.tagId, ownProps.match.url)(state)
  };
};

export default withRouter(connect(mapStateToProps)(TagPage));
