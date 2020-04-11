import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAllBlog } from '../../redux/blog/blog.selector';
import { selectAllForumTopics } from '../../redux/forum/forum.selector';
import ForumPreview from '../forum-preview/forum-preview';
import PostPreview from '../../components/post-preview/post-preview';
import close from '../../assets/close.svg';
import search from '../../assets/search.svg';
import './search.scss';
class Search extends Component {
  state = {
    search: '',
    blog: '',
    forum: '',
    selected: 'blog',
    found: true,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };
  handleSelected = (evnt) => {
    this.setState({ selected: evnt });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const fillterdBlog = this.props.blogs
      ? this.props.blogs.filter((blog) =>
          blog.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : [];
    const fillterdForum = this.props.forums
      ? this.props.forums.filter((forum) =>
          forum.title.toLowerCase().includes(this.state.search.toLowerCase())
        )
      : [];
    return (
      <div
        className="search-page"
        style={this.state.search ? { height: '100vh' } : { height: '138px' }}
      >
        <div className="close">
          <img src={close} alt="Close Icon" onClick={this.props.showSearch} />
        </div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="search"
                required
                value={this.state.search}
                className="form-input"
                onChange={this.handleChange}
              />
              <button>
                <img src={search} alt="search icon" />
              </button>
              <label>Search</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                name="blog"
                value={this.state.blog}
                checked={this.state.selected === 'blog'}
                onClick={this.handleSelected.bind(this, 'blog')}
                onChange={this.handleChange}
              />
              <label>Blog</label>
              <input
                type="radio"
                name="forum"
                value={this.state.forum}
                checked={this.state.selected === 'forum'}
                onClick={this.handleSelected.bind(this, 'forum')}
                onChange={this.handleChange}
              />
              <label>Forum</label>
            </div>
          </form>
        </div>
        <div className="search-output">
          {this.state.search
            ? this.state.selected === 'blog'
              ? fillterdBlog.map((blog) => (
                  <PostPreview
                    key={blog.title}
                    blog_data={blog}
                    closeSearch={this.props.showSearch}
                  />
                ))
              : fillterdForum.map((topic) => (
                  <ForumPreview
                    key={topic.id}
                    topicData={topic}
                    closeSearch={this.props.showSearch}
                  />
                ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  blogs: selectAllBlog,
  forums: selectAllForumTopics,
});

export default withRouter(connect(mapStateToProps)(Search));
