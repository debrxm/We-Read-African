import React from 'react';
import { connect } from 'react-redux';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
import loader from '../../assets/loader.gif';
import './sidebar-latest-posts.scss';
const SidebarLatestPosts = ({ allBlog }) => {
  return (
    <div className="sidebar-latest-post">
      <h4>Latest Post</h4>
      <br />
      <div className="sidebar-output">
        {allBlog ? (
          allBlog
            .filter((item, index) => index < 3)
            .map((blog) => {
              const date = new Date(blog.updated_at.seconds * 1000),
                months = [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                currentMonth = months[date.getMonth()],
                currentDate = date.getDate(),
                year = date.getFullYear();

              return (
                <div className="post">
                  <div className="image-container">
                    <img src={blog.image} alt="post img" />
                  </div>
                  <div className="text-content">
                    <h5>{blog.title}</h5>
                    <span>
                      {currentMonth} {currentDate} {year}
                    </span>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="loader">
            <img id="loader" src={loader} alt="Loader" />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  allBlog: selectAllBlog,
});

export default connect(mapStateToProps)(SidebarLatestPosts);
