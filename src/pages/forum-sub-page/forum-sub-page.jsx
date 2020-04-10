import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectForumFilteredTopic } from '../../redux/forum/forum.selector';
import ForumPreview from '../../components/forum-preview/forum-preview';
import './forum-sub-page.scss';

const ForumSubPage = ({ forums }) => {
  return (
    <div className="tag-page">
      <div className="output">
        {forums ? (
          forums.map((forum) => (
            <ForumPreview key={forum.title} topicData={forum} reDirect />
          ))
        ) : (
          <div className="loader">
            {/* <img id="loader" src={loader} alt="Loader" /> */}
            {/* <p className="date">No more posts</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    forums: selectForumFilteredTopic(
      ownProps.match.params.forumId,
      ownProps.match.url
    )(state),
  };
};

export default withRouter(connect(mapStateToProps)(ForumSubPage));
