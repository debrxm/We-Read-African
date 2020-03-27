import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { updateCategories } from '../../redux/blog/blog.actions';
import PostPreview from '../../components/post-preview/post-preview';
// import NewsletterPopup from '../../components/newsletter-popup/newsletter-popup';
import loader from '../../assets/loader.gif';
import './blogpage.scss';
class Blogpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      isShowPassword: false,
      isLoading: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.files);
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="blog-page">
        <Helmet>
          <title>We Read African &mdash; Blogs</title>
          <meta property="og:title" content="We Read African &mdash; Blogs" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta
            property="og:url"
            content="https://www.wereadafrican.com/blog"
          />
        </Helmet>
        <div className="left">
          <div className="output">
            {this.props.allBlog ? (
              this.props.allBlog.map(blog => (
                <PostPreview showDate key={blog.title} blog_data={blog} />
              ))
            ) : (
              <div className="loader">
                {/* <img id="loader" src={loader} alt="Loader" /> */}
                {/* <p className="date">No more posts</p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCategories: collectionsMap => dispatch(updateCategories(collectionsMap))
});

const mapStateToProps = createStructuredSelector({
  allBlog: selectAllBlog
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogpage);
