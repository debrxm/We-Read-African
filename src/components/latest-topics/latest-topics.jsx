import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectAllForumTopics } from '../../redux/forum/forum.selector';
import UserPreview from '../user-preview/user-preview';
import './latest-topics.scss';
import ForumPreview from '../forum-preview/forum-preview';
import ForumEditor from '../forum-editor/forum-editor';
const LatestTopics = ({ currentUser, forumTopics }) => {
  const [isShow, setisShow] = useState(false);
  const handleToggleEditore = () => {
    setisShow(!isShow);
    !isShow
      ? (document.documentElement.style.overflowY = 'hidden')
      : (document.documentElement.style.overflowY = 'scroll');
  };
  return (
    <div className="latest-topics">
      <div className="post-topic">
        {currentUser ? <UserPreview currentUser={currentUser} welcome /> : null}
        <span className="post-topic-btn" onClick={handleToggleEditore}>
          New Post
        </span>
      </div>
      <br />
      <br />
      {isShow ? (
        <ForumEditor handleToggleEditore={handleToggleEditore} />
      ) : null}
      {forumTopics
        ? forumTopics.map(topic => (
            <ForumPreview
              key={topic.topic_data.id}
              topicData={topic.topic_data}
            />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  forumTopics: selectAllForumTopics
});

export default connect(mapStateToProps)(LatestTopics);
