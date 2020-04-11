import React, { Component } from 'react';
import './instagram.scss';
export default class InstagramPosts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch('https://www.instagram.com/ozzycodes/?__a=1')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          posts: data.graphql.user.edge_owner_to_timeline_media.edges.filter(
            (item, index) => index < 10
          ),
        });
      });
  }
  render() {
    return (
      <div className="instagram-posts">
        {this.state.posts.map((item, index) => (
          <div key={index} className="post">
            <img
              src={item.node.thumbnail_src}
              height="150px"
              width="150px"
              alt="post"
            />
          </div>
        ))}
      </div>
    );
  }
}
