import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { connect } from 'react-redux';
import ForumSubNav from '../../components/forum-sub-nav/forum-sub-nav';
import LatestTopics from '../../components/latest-topics/latest-topics';
import ForumSubPage from '../forum-sub-page/forum-sub-page';
import './forumpage.scss';
class Forumpage extends React.Component {
  state = {
    isLoading: true
  };
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
          <Route path={`/forum/:forumId`} component={ForumSubPage} />
        </div>
      </div>
    );
  }
}

export default withRouter(Forumpage);
