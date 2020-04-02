import React from 'react';
import userIco from '../../assets/userIco.svg';
import comment from '../../assets/comment.svg';
import view from '../../assets/view.svg';
import './forum-preview.scss';
const ForumPreview = () => {
  return (
    <div className="forum-preview">
      <h3 className="title">Your Book Activity - February 2020</h3>
      <div className="writer">
        <img className="user-icon" src={userIco} alt="user" />
        <div className="name-time">
          <h5>{'Alex Kruger'}</h5>
          <span>{'February 7 2020'}</span>
        </div>
      </div>
      <p className="trunc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        saepe vitae consectetur eaque porro recusandae provident, tempore
        excepturi mollitia, corporis quidem reprehenderit harum quae sint cumque
        deserunt ullam fuga tempora!{' '}
        <span className="read-more">read more</span>
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

export default ForumPreview;
