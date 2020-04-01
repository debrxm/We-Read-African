import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import renderHTML from 'react-render-html';
import Pusher from 'pusher-js';
import axios from 'axios';
import { getAllComments } from '../../firebase/firebase.utils';
import { selectBlogPost } from '../../redux/blog/blog.selector';
import BlogNavigation from '../../components/blog-navigation/blog-navigation';
import whatsapp from '../../assets/socials/whatsapp.svg';
import linkedin from '../../assets/socials/linkedin.svg';
import facebook from '../../assets/socials/facebook.svg';
import twitter from '../../assets/socials/twitter.svg';
import './postpage.scss';
import PostpageLatestPost from '../../components/postpage-latest-post/postpage-latest-post';
import Comments from '../../components/comments/comments';
import CommentBox from '../../components/comment-box/comment-box';
class PostPage extends React.Component {
  state = {
    comments: []
  };
  async componentDidMount() {
    const pusher = new Pusher('a247b37a0b23d81855bb', {
      cluster: 'eu',
      forceTLS: true
    });
    const commentRef = await getAllComments(
      this.props.blog[0].title.toLowerCase()
    );
    commentRef
      ? commentRef.onSnapshot(snapShot => {
          this.setState({
            comments: snapShot.data() ? snapShot.data().comments : []
          });
        })
      : console.log('no comment yet');

    const channel = pusher.subscribe('comments');
    channel.bind('new-comment', data => {
      let oldComment = this.state.comments;
      oldComment.push(data.comment);
      if (!commentRef) {
        this.setState({ comments: [data.comment] });
      }
      // console.log('💥💥💥💥💥', data);
      // console.log(this.state.comments);
    });
  }
  render() {
    const { title, content, image, tag } = this.props.blog[0];

    return (
      <div className="post-page container">
        <Helmet>
          <title>We Read African &mdash; {title}</title>
          <meta title="keywords" content={`${tag}, ${title}`} />
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
          <h1 className="title">{title.toUpperCase()}</h1>
          <div className="full-blog-image">
            <img src={image} alt="Blog img" />
          </div>
          <div className="blog-content">{renderHTML(`${content}`)}</div>
        </div>
        <BlogNavigation />
        <div className="full-blog-footer">
          <div className="date-posted">
            <span>Posted Febuary 16 2020</span>
          </div>
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
        <PostpageLatestPost line postpage />
        <Comments comments={this.state.comments} />
        <CommentBox blogData={this.props.blog[0]} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    blog: selectBlogPost(
      ownProps.match.params.blogId,
      ownProps.match.url
    )(state)
  };
};

export default connect(mapStateToProps)(PostPage);
