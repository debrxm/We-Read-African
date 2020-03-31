import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { addAComment } from '../../firebase/firebase.utils';
import './comment-box.scss';

class CommentBox extends Component {
  state = {
    name: this.props.currentUser ? this.props.currentUser.displayName : '',
    newComment: ''
  };

  updateInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  addComment = async event => {
    event.preventDefault();
    const { blogData, currentUser } = this.props;
    const { name, newComment } = this.state;
    if (name.trim() === '' || newComment.trim() === '') return;

    const data = {
      name: currentUser.displayName,
      text: newComment,
      photo: currentUser.photoURL ? currentUser.photoURL : null,
      post: blogData.title.toLowerCase(),
      date: Date.now(),
      replies: []
    };
    const addCommentRef = await addAComment(data);
    console.log('✔✔✔✔', addCommentRef);
    axios
      .post('http://localhost:5000/comment', data)
      .then(() => {
        this.setState({
          // name: ''
          newComment: ''
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { name, newComment } = this.state;
    const { currentUser } = this.props;
    return currentUser ? (
      <div className="comment-box">
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <label>Comment</label>
              <textarea
                className="textarea"
                name="newComment"
                value={newComment}
                onChange={this.updateInput}
              ></textarea>
            </div>
          </div>
          {currentUser ? null : (
            <div className="field">
              <div className="control">
                <label>Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  value={name}
                  onChange={this.updateInput}
                />
              </div>
            </div>
          )}

          <div className="field">
            <div className="control">
              <span className="post-comment" onClick={this.addComment}>
                Post a Comment
              </span>
            </div>
          </div>
        </form>
      </div>
    ) : (
      <div className="login">
        Please <Link to="/signin">Login</Link> to comment
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CommentBox);
