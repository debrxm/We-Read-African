import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
// import userIco from '../../assets/userIco.svg';
import comment from '../../assets/comment.svg';
import view from '../../assets/view.svg';
import './forum-preview.scss';
const ForumPreview = ({ topicData, history }) => {
  const { title, body, user, posted_at } = topicData;
  const { displayName, photoURL } = user;
  const handleRouting = () => {
    history.push(
      `forum/${title
        .split(' ')
        .join('-')
        .toLowerCase()}`
    );
  };
  return (
    <div className="forum-preview">
      <h3 className="title">{title}</h3>
      <div className="writer">
        <img className="user-icon" src={photoURL} alt="user" />
        <div className="name-time">
          <h5>{displayName}</h5>
          <span>
            {new Date(posted_at)
              .toString()
              .split(' ')
              .slice(0, 5)
              .join(' ')}
          </span>
        </div>
      </div>
      <p className="content">
        {renderHTML(body).props.children[0]}{' '}
        <span className="read-more" onClick={handleRouting}>
          read more
        </span>
      </p>
      <div className="forum-preview-footer">
        <span className="forum-preview-footer-comment">
          <img src={comment} alt="Comment Icon" />
          {'0'} Comments
        </span>
        <span className="forum-preview-footer-view">
          <img src={view} alt="Comment Icon" />
          {'0'} Views
        </span>
      </div>
    </div>
  );
};

export default withRouter(ForumPreview);
