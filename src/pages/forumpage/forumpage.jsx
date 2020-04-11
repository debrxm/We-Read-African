import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ForumSubNav from '../../components/forum-sub-nav/forum-sub-nav';
import LatestTopics from '../../components/latest-topics/latest-topics';
import ForumSubPage from '../forum-sub-page/forum-sub-page';
import {
  firestore,
  convertTrendingForumSnapshotToMap,
  convertFeaturedForumSnapshotToMap,
} from '../../firebase/firebase.utils';
import {
  updateForums,
  updateForumComments,
  updateForumViews,
} from '../../redux/forum/forum.actions';
import { selectAllForumTopics } from '../../redux/forum/forum.selector';
import './forumpage.scss';
import TopicPage from '../topicpage/topicpage';

class Forumpage extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    const forumRef = firestore.collection('forum').orderBy('posted_at', 'desc');
    forumRef.onSnapshot(async (snapshot) => {
      const forumTopics = [];
      snapshot.docs.forEach((doc) => {
        forumTopics.push(doc.data());
      });

      this.props.updateForums(forumTopics);
      // send to redux
    });
    const commentRef = firestore.collection('forum_comments');
    const viewRef = firestore.collection('forum_views');
    commentRef.onSnapshot(async (snapshot) => {
      const comments = [];
      snapshot.docs.forEach((doc) => {
        const commentObj = {
          id: doc.id,
          comments: doc.data(),
        };
        comments.push(commentObj);
      });
      this.props.updateForumComments(comments);
    });
    viewRef.onSnapshot(async (snapshot) => {
      const views = [];
      snapshot.docs.forEach((doc) => {
        const viewObj = {
          id: doc.id,
          view: doc.data(),
        };
        views.push(viewObj);
      });
      const compare = (a, b) => {
        if (a.posted_at > b.posted_at) return 1;
        // if (a.view.views.length < b.view.views.length) return -1;
        return 0;
      };
      const trendingTopicArr = convertTrendingForumSnapshotToMap(views);
      const featuredTopicArr = convertFeaturedForumSnapshotToMap(views);
      this.props.forums.sort(compare).map((topic) => {
        return trendingTopicArr.forEach((item) => {
          if (topic.title.toLowerCase() === item.id) {
            topic.tag = 'trending_topics';
          }
        });
      });
      this.props.forums.sort(compare).map((topic) => {
        featuredTopicArr.forEach((item) => {
          if (topic.title.toLowerCase() === item.id) {
            topic.tag = 'featured_topics';
          }
        });
      });
      this.props.updateForums(this.props.forums);
      this.props.updateForumViews(views);
    });
  }
  render() {
    const { history, match } = this.props;
    return (
      <div className="forum-page">
        <Helmet>
          <title>We Read African &mdash; forum</title>
          <meta property="og:title" content="We Read African &mdash; forum" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta
            property="og:url"
            content="https://www.wereadafrican.com/forum"
          />
        </Helmet>
        {history.location.pathname === '/forum' ? (
          <ForumSubNav />
        ) : history.location.pathname === '/forum/trending_topics' ? (
          <ForumSubNav />
        ) : history.location.pathname === '/forum/featured_topics' ? (
          <ForumSubNav />
        ) : null}

        <div className="left">
          <Route exact path={`${match.path}`} component={LatestTopics} />
          <Route exact path={`/forum/:forumId`} component={ForumSubPage} />
          {/* <Route path={`/forum/:forumPostId`} component={TopicPage} /> */}
          {/* <Route path={`/forum/latest/:forumPostId`} component={TopicPage} /> */}
          <Route
            exact
            path={`/forum/blank/:forumPostId`}
            component={TopicPage}
          />
          <Route
            exact
            path={`/forum/trending_topics/:forumPostId`}
            component={TopicPage}
          />
          <Route
            exact
            path={`/forum/featured_topics/:forumPostId`}
            component={TopicPage}
          />
        </div>
      </div>
    );
  }
}
const mapDespatchToProps = (dispatch) => ({
  updateForums: (forumTopic) => dispatch(updateForums(forumTopic)),
  updateForumComments: (comments) => dispatch(updateForumComments(comments)),
  updateForumViews: (views) => dispatch(updateForumViews(views)),
});
const mapStateToProps = createStructuredSelector({
  forums: selectAllForumTopics,
});

export default withRouter(
  connect(mapStateToProps, mapDespatchToProps)(Forumpage)
);
