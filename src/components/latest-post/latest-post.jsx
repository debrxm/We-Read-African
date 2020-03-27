import React from 'react';
import { Link } from 'react-router-dom';
import PostPreview from '../post-preview/post-preview';
import CustomHeading from '../custom-heading/custom-heading';
import loader from '../../assets/loader.gif';
import './latest-post.scss';
const LatestPost = ({ blogs }) => {
  console.log(blogs);

  return (
    <div className="latest-post">
      <CustomHeading>Latest Posts</CustomHeading>
      <div className="container">
        <section className="blog-area section">
          <div className="container ">
            <br />
            <br />
            <div className="output">
              {blogs ? (
                blogs.map(blog => (
                  <PostPreview key={blog.title} blog_data={blog} />
                ))
              ) : (
                <div className="loader">
                  <img id="loader" src={loader} alt="Loader" />
                  {/* <p className="date">No more posts</p> */}
                </div>
              )}
            </div>
            <div className="prevent">
              {/* <div className="loader"> */}
              {/* <img id="loader" src={loader} alt="Loader" /> */}
              {/* <p className="date">No more posts</p> */}
              {/* </div> */}
              <Link to="/blog">
                <span className="load-more-btn" id="load-more">
                  View All Posts
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestPost;
