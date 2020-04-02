import React from 'react';
import userIco from '../../assets/userIco.svg';
import './comment.scss';
const Comment = ({ comment }) => {
  const { date, name, photo, text } = comment;
  return (
    <article className="media">
      <div className="user">
        <img className="user-icon" src={photo ? photo : userIco} alt="user" />
        <div className="name-time">
          <h5>{name}</h5>
          <span>
            {date
              ? new Date(date)
                  .toString()
                  .toString()
                  .split(' ')
                  .slice(0, 5)
                  .join(' ')
              : null}
          </span>
        </div>
      </div>
      <div className="content">
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Comment;
