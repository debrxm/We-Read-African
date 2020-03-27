import React from 'react';
import { withRouter } from 'react-router-dom';
import comment from '../../assets/comment.svg';
import './post-preview.scss';
const PostPreview = ({ history, blog_data, showTrunc, showDate }) => {
  const { title, views, comments, content, image, tag, updated_at } = blog_data;
  const date = new Date(updated_at.seconds * 1000),
    months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    currentMonth = months[date.getMonth()],
    currentDate = date.getDate(),
    year = date.getFullYear(),
    trunc = content
      .split(' ')
      .slice(0, 3)
      .join(' ');
  return (
    <div className="post-preview">
      <div className="blog-image" style={{ background: `url(${image})` }}>
        {showDate ? (
          <button className="date-created">
            {currentDate} <br /> {currentMonth}
          </button>
        ) : null}
        <span className="tag">
          {tag.includes('book')
            ? 'Book Review'
            : tag.includes('anatomy')
            ? 'Lit Anatomy'
            : 'African Lit & Life'}
        </span>
      </div>

      <div className="blog-info">
        <div className="post-preview-header">
          <h4
            className="title"
            id="post-link"
            onClick={() => history.push(`/${tag}/${title}`)}
          >
            {title}
          </h4>
          {showTrunc ? <p className="trunc">{trunc}...</p> : null}
        </div>
        <div className="post-footer">
          <span className="post-footer-date">
            {currentDate} {currentMonth} {year}
          </span>
          <span className="post-footer-comment">
            <img src={comment} alt="Comment Icon" />
            {comments.length} Comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PostPreview);
