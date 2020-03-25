import React from 'react';
import { Helmet } from 'react-helmet';
import './homepage.scss';
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
        <h1>HOMEPAGE</h1>
      </div>
    );
  }
}

export default Homepage;
