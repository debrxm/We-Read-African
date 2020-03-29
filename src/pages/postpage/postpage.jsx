import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import renderHTML from 'react-render-html';
import { selectBlogPost } from '../../redux/blog/blog.selector';
import './postpage.scss';
import BlogNavigation from '../../components/blog-navigation/blog-navigation';

const PostPage = ({ blog }) => {
  const { title, views, comments, content, image, tag, updated_at } = blog[0];
  // console.log(blog);
  return (
    <div className="post-page container">
      <Helmet>
        <title>We Read African &mdash; {title}</title>
        <meta title="keywords" content={`${tag}, ${title}`} />
        <meta name="description" content={`${title} `} />
        <meta
          property="og:title"
          content={`We Read African &mdash; ${title}`}
        />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="We Read African" />
        <meta
          property="og:url"
          content={`https://www.wereadafrican.com/${title}`}
        />
      </Helmet>
      <div className="full-blog">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="full-blog-image">
          <img src={image} alt="Blog img" />
          <div className="blog-content">{renderHTML(`${content}`)}</div>
        </div>
      </div>
      <BlogNavigation />
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
