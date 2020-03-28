import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { selectBlog } from '../../redux/blog/blog.selector';
import './postpage.scss';
import { selectBlogPost } from '../../redux/blog/blog.selector';

const PostPage = ({ blog }) => {
  console.log(blog);
  return (
    <div className="post-page container">
      {/* <Helmet>
        <title>We Read African &mdash; {blog[0].title}</title>
        <meta
          title="keywords"
          content={`${blog[0].category}, ${blog[0].title}`}
        />
        <meta name="description" content={`${blog[0].title} `} />
        <meta
          property="og:title"
          content={`We Read African &mdash; ${blog[0].title}`}
        />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="We Read African" />
        <meta
          property="og:url"
          content={`https://www.wereadafrican.com/${blog[0].title}`}
        />
      </Helmet> */}
      <h1>POSTPAGE</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    blog: selectBlogPost(
      ownProps.match.params.blogId,
      ownProps.match.url
    )(state)
  };
};

export default connect(mapStateToProps)(PostPage);
