import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import {DeviceUUID} from 'device-uuid';
import renderHTML from 'react-render-html';
import { getAllComments, updateViews } from '../../firebase/firebase.utils';
import { selectForumTopic } from '../../redux/forum/forum.selector';
import whatsapp from '../../assets/socials/whatsapp.svg';
import linkedin from '../../assets/socials/linkedin.svg';
import facebook from '../../assets/socials/facebook.svg';
import twitter from '../../assets/socials/twitter.svg';
import Comments from '../../components/comments/comments';
import CommentBox from '../../components/comment-box/comment-box';
import ProgressIndicator from '../../components/progress-indicator/progress-indicator';
import './topicpage.scss';
class TopicPage extends React.Component {
  state = {
    comments: [],
    userIp: '',
  };
  async componentDidMount() {
    let response = await fetch('https://api.ipify.org?format=json');
    let IP = await response.json();

    const uuid = new DeviceUUID().get();
    console.log(uuid);
    this.setState({ userIp: uuid });

    const commentRef = await getAllComments({
      collection: 'forum_comments',
      documente: this.props.forum[0].title.toLowerCase(),
    });
    if (commentRef) {
      commentRef.onSnapshot((snapShot) => {
        this.setState({
          comments: snapShot.data() ? snapShot.data().comments : [],
        });
      });
    }
    await updateViews({
      collection: 'forum_views',
      title: this.props.forum[0].title.toLowerCase(),
      userIp: this.state.userIp,
    });
  }
  render() {
    const { body, title, user, posted_at } = this.props.forum[0];
    const { displayName, photoURL } = user;

    return (
      <div className="post-page container">
        <Helmet>
          <title>We Read African &mdash; {title}</title>
          <meta title="keywords" content={`${title}`} />
          <meta name="description" content={`${title} `} />
          <meta
            property="og:title"
            content={`We Read African &mdash; ${title}`}
          />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta
            property="og:url"
            content={`https://www.wereadafrican.com/${title}`}
          />
        </Helmet>
        <div className="full-blog">
          <h1 className="title">{title}</h1>
          <div className="writer">
            <>
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
            </>
            <span className="report">Report Post</span>
          </div>
          <div className="blog-content">{renderHTML(body)}</div>
        </div>

        <div className="full-blog-footer">
          <div className="share">
            <span>Share This Post</span>
            <div className="social">
              <a href="https://www.whatsapp.com/">
                <img src={whatsapp} alt="Instagram Logo" className="icon" />
              </a>
              <a href="https://web.facebook.com/">
                <img src={facebook} alt="Facebook Logo" className="icon" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={linkedin} alt="Instagram Logo" className="icon" />
              </a>
              <a href="https://twitter.com/">
                <img src={twitter} alt="Twitter Logo" className="icon" />
              </a>
            </div>
          </div>
        </div>
        <Comments comments={this.state.comments} />
        <CommentBox
          category="forum_comments"
          title={this.props.forum[0].title}
        />
        {/* <div className="progress-indicator"> */}
        <ProgressIndicator />
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    forum: selectForumTopic(
      ownProps.match.params.forumPostId,
      ownProps.match.url
    )(state),
  };
};

export default connect(mapStateToProps)(TopicPage);
