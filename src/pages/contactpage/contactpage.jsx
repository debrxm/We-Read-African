import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage';
import './contactpage.scss';
import SideBar from '../../components/SideBar/SideBar';

//Components
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

// Assets
import sendIcon from '../../assets/sendIcon.svg'
export default class ContactPage extends Component { 
  constructor() { 
    super();
    this.state = { 
      userFullName: '',
      userEmail: '',
      userPhoneNumber: '',
      userMessage: '',
    }
  }
  
  handleChange = (e) => { 
    this.name = e.target.name;
    this.setState({ 
      [this.name]:  e.target.value,
    })
  }
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
      <main>
        <div id='contactHeading'>
          <h1>CONTACT WE READ AFRICAN</h1>
          <p>Whether you want to get in touch about something you’ve seen on my blog, would like to see on my blog or to discuss a book, put forward your bookstore for a feature or suggest some content you’dlike to see, feel free to get in touch with me at <a href="mailto:sandra@wereadafrican.com?Subject=Hello%20Friend" target="_top">sandra@wereadafrican.com</a></p>
          <p>Alternatively, you can find me on <a href='https://www.facebook.com'>Facebook</a>, <a href='https://www.twitter.com'>Twitter</a> and <a href='https://www.jw.com'>Instagram</a>.</p>
          <p>If you’d like to work with me, find out about the services i offer here.</p>
        </div>
        <div id='contactForm'>
        <form >
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
            placeholder='Leave a Message'
          />
          <CustomButton >
            <img src={sendIcon} alt="Facebook Logo" /> Send Message
          </CustomButton>
        </form>
      </div>
      <ThankYouMessage />
      </main> 
      <SideBar />
    </div>
  )
  }
}

