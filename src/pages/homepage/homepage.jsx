import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { firestore } from '../../firebase/firebase.utils';
import { updateCategories } from '../../redux/blog/blog.actions';
// import NewsletterPopup from '../../components/newsletter-popup/newsletter-popup';
import './homepage.scss';
import Slider from '../../components/slider/slider';
import LatestPost from '../../components/latest-post/latest-post';
import ShopFavorite from '../../components/shop-favorite/shop-favorite';
import InstagramPosts from '../../components/instagram/instagram';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      isShowPassword: false,
      isLoading: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.files);
    console.log(URL.createObjectURL(event.target.files[0]));
    this.setState({ [name]: value });
  };

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
        <LatestPost homepage />
        <h4 className="check-latest">Check our Latest Instagram Posts</h4>
        <InstagramPosts />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCategories: (collectionsMap) =>
    dispatch(updateCategories(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Homepage);
