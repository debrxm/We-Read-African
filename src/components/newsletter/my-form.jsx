import React from 'react';
import './my-form.scss';

class MyForm extends React.Component {
  state = {
    email: '',
    name: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isSuccess: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitted({
      EMAIL: this.state.email
    });
    this.setState({ email: '', name: '' });
  };
  render() {
    return (
      <div className="newsletter">
        <h2 className="heading">Subscribe to the WeReadAfrican newsletter</h2>
        <p>Get notification of blog posts, book release info and more</p>
        <form onSubmit={this.handleSubmit}>
          <div className="group-input">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Type in your fullname"
              className="form-input"
              onChange={this.handleChange}
            />
          </div>
          <div className="group-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Type in your email"
              className="form-input"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn">SUBSCRIBE</button>
        </form>
      </div>
    );
  }
}
export default MyForm;
