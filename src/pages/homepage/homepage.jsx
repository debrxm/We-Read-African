import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { updateCategories } from '../../redux/blog/blog.actions';
// import NewsletterPopup from '../../components/newsletter-popup/newsletter-popup';
import './homepage.scss';
import Slider from '../../components/slider/slider';
import LatestPost from '../../components/latest-post/latest-post';
import ShopFavorite from '../../components/shop-favorite/shop-favorite';
class Homepage extends React.Component {
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
  // componentDidMount() {
  //   const { updateCategories } = this.props;
  //   const blogs = [];
  //   this.setState({ isLoading: true });
  //   const collectionRef = firestore.collection('blog_temp');
  //   collectionRef.onSnapshot(async snapshot => {
  //     snapshot.docs.forEach(doc => {
  //       blogs.push(doc.data());
  //     });
  //     updateCategories(blogs);
  //   });
  //   this.setState({ isLoading: false });
  // }

  render() {
    return (
      <div className="homepage">
        <Helmet>
          <title>We Read African</title>
          <meta property="og:title" content="We Read African" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta property="og:url" content="https://www.wereadafrican.com" />
        </Helmet>
        <Slider />
        <ShopFavorite />
        <LatestPost blogs={this.props.allBlog} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
