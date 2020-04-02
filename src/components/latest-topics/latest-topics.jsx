import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import UserPreview from '../user-preview/user-preview';
import './latest-topics.scss';
import ForumPreview from '../forum-preview/forum-preview';
import ForumEditor from '../forum-editor/forum-editor';
const LatestTopics = ({ currentUser }) => {
  const [isShow, setisShow] = useState(false);
  const handleToggleEditore = () => {
    setisShow(!isShow);
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
      <ForumEditor />
      <ForumPreview />
      <ForumPreview />
      <ForumPreview />
      <ForumPreview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(LatestTopics);
