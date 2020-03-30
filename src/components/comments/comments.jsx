import React, { Component } from 'react';
import Comment from '../comment/comment';
import './comments.scss';
class Comments extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div className="comments">
        <div className="head">
          <h5>{comments.length} Comments</h5>
          <span className="post-comment">Post a Comment</span>
        </div>

        {comments.length !== 0
          ? comments.map((comment, index) => {
              return <Comment key={index} comment={comment} />;
            })
          : null}
      </div>
    );
  }
}

export default Comments;
