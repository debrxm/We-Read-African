import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAllForumTopics } from '../../redux/forum/forum.selector';
// import ForumPreview from '../forum-preview/forum-preview';
import './latest-topics.scss';

const SidebarLatestTopics = ({ forumTopics }) => {
  const compare = (a, b) => {
    if (a.posted_at < b.posted_at) return 1;
    return 0;
  };
  return (
    <div className="latest-topics">
      {forumTopics
        ? forumTopics
            .filter((item, index) => index > 5)
            .sort(compare)
            .map((topic, index) => {
              return (
                <div key={index} className="side-latest-topic">
                  <h4>{topic.title}</h4>
                </div>
              );
            })
        : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  forumTopics: selectAllForumTopics,
});

export default connect(mapStateToProps)(SidebarLatestTopics);
