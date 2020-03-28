import React from 'react';
import { connect } from 'react-redux';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
import PostPreview from '../../components/post-preview/post-preview';
export const BlogPosts = ({ allBlog }) => {
  return (
    <div className="output">
      {allBlog ? (
        allBlog.map(blog => (
          <PostPreview showDate key={blog.title} blog_data={blog} />
        ))
      ) : (
        <div className="loader">
          {/* <img id="loader" src={loader} alt="Loader" /> */}
          {/* <p className="date">No more posts</p> */}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allBlog: selectAllBlog
});

export default connect(mapStateToProps)(BlogPosts);
