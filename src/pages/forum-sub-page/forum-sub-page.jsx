import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { selectForumFilteredTopic } from '../../redux/forum/forum.selector';
import './forum-sub-page.scss';

const ForumSubPage = ({ forum }) => {
  return <div className="forum-sub-page"></div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    // forum: selectForumFilteredTopic(
    //   ownProps.match.params.forumId,
    //   ownProps.match.url
    // )(state)
  };
};

export default withRouter(connect(mapStateToProps)(ForumSubPage));
