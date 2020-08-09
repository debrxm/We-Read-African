import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage';

//Components
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import SideBar from '../../components/SideBar/SideBar';

// Assets
import sendIconPurple from '../../assets/sendIconPurple.svg';

import './contactpage.scss';

export default class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      userFullName: '',
      userEmail: '',
      userPhoneNumber: '',
      userMessage: '',
      isSuccess: false,
    };
  }

  handleChange = (e) => {
    this.name = e.target.name;
    this.setState({
      [this.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userFullName,
      userEmail,
      userPhoneNumber,
      userMessage,
    } = this.state;
    const data = {
      name: userFullName,
      email: userEmail,
      phone: userPhoneNumber,
      messsage: userMessage,
    };
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:5000/sendmail`,
        settings
      );
      await fetchResponse.json();
      this.setState({
        isSuccess: true,
        userFullName: '',
        userEmail: '',
        userPhoneNumber: '',
        userMessage: '',
      });
    } catch (err) {
      this.setState({ isSuccess: false });
    }
  };
  render() {
    return (
      <div className="contactpage">
        <Helmet>
          <title>We Read African &mdash; Contact</title>
          <meta property="og:title" content="We Read African &mdash; Contact" />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta
            property="og:url"
            content="https://www.wereadafrican.com/contact"
          />
        </Helmet>
        <div className="left-right">
          <div className="left">
            <main>
              <div id="contactForm">
                <form onSubmit={this.handleSubmit}>  
                  <h1>CONTACT.</h1>
                  <p>
                    want to react out? Type and send your message below and we'll be in touch asap
                  </p>
                  <FormInput
                    type="text"
                    name="userFullName"
                    value={this.state.userFullName}
                    label="Fullname"
                    onChange={this.handleChange}
                  />
                  <FormInput
                    type="email"
                    name="userEmail"
                    value={this.state.userEmail}
                    label="Your Email"
                    onChange={this.handleChange}
                  />
                  <FormInput
                    type="number"
                    name="userPhoneNumber"
                    value={this.state.userPhoneNumber}
                    label="Your Phone Number"
                    onChange={this.handleChange}
                  />
                  <textarea
                    type="text"
                    name="userMessage"
                    value={this.state.userMessage}
                    label="Leave a Message"
                    onChange={this.handleChange}
                    placeholder="Leave a Message"
                  />
                  <CustomButton>
                    <img src={sendIconPurple} alt="Send Icon" /> Send Message
                  </CustomButton>               
                </form>
              </div>
              {this.state.isSuccess ? <ThankYouMessage /> : null}
            </main>
          </div>
          <div className="right">
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}
