import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectAllComments, selectViews } from '../../redux/blog/blog.selector';
import renderHTML from 'react-render-html';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';
import view from '../../assets/view.svg';
import './post-preview.scss';
class PostPreview extends React.Component {
  state = {
    setComment: {},
    views: {}
  };
  componentDidMount() {
    this.props.postComments
      .filter(
        (item, index) => item.id === this.props.blog_data.title.toLowerCase()
      )
      .map(comm => this.setState({ setComment: comm }));
    this.props.postViews
      .filter(
        (item, index) => item.id === this.props.blog_data.title.toLowerCase()
      )
      .map(view => this.setState({ views: view }));
  }
  render() {
    const {
      history,
      blog_data,
      showTrunc,
      showDate,
      showViewShare,
      noFooter,
      reDirect,
      postpage
    } = this.props;
    const { title, image, tag, updated_at, truncate } = blog_data;
    const handleRouting = () => {
      reDirect
        ? history.push(
            `${tag}/${title
              .split(' ')
              .join('-')
              .toLowerCase()}`
          )
        : postpage
        ? history.push(
            `${title
              .split(' ')
              .join('-')
              .toLowerCase()}`
          )
        : history.push(
            `blog/${tag}/${title
              .split(' ')
              .join('-')
              .toLowerCase()}`
          );
    };
    const date = new Date(updated_at.seconds * 1000),
      months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      currentMonth = months[date.getMonth()],
      currentDate = date.getDate(),
      year = date.getFullYear(),
      trunc = truncate
        .split(' ')
        .slice(0, 12)
        .join(' ');
    return (
      <div className="post-preview">
        <div
          className="blog-image"
          // style={{ background: `url(${image})` }}
        >
          <img src={image} alt="post img" />
          {showDate ? (
            <button className="date-created">
              {currentDate} <br /> {currentMonth}
            </button>
          ) : null}
          <span className="tag">
            {tag.includes('book')
              ? 'Book Review'
              : tag.includes('anatomy')
              ? 'Lit Anatomy'
              : 'African Lit & Life'}
          </span>
        </div>

        <div className="blog-info">
          <div
            className="post-preview-header"
            style={showTrunc ? { minHeight: '150px' } : { minHeight: '70px' }}
          >
            <h4 className="title" id="post-link" onClick={handleRouting}>
              {title}
            </h4>
            {showTrunc ? (
              <p className="trunc">
                {renderHTML(`${trunc}`)}{' '}
                <span className="read-more" onClick={handleRouting}>
                  read more
                </span>{' '}
              </p>
            ) : null}
          </div>
          {noFooter ? null : (
            <div className="post-footer">
              {showViewShare ? null : (
                <span className="post-footer-date">
                  {currentDate} {currentMonth} {year}
                </span>
              )}
              <span className="post-footer-comment">
                <img src={comment} alt="Comment Icon" />
                {this.state.setComment.comments
                  ? this.state.setComment.comments.comments.length
                  : 0}{' '}
                Comments
              </span>
              {showViewShare ? (
                <span className="post-footer-comment">
                  <img src={view} alt="Comment Icon" />
                  {this.state.views.view
                    ? this.state.views.view.views.length
                    : 0}{' '}
                  Views
                </span>
              ) : null}
              {showViewShare ? (
                <span className="post-footer-comment">
                  <img src={share} alt="Comment Icon" />
                  share
                </span>
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  postComments: selectAllComments,
  postViews: selectViews
});

export default withRouter(connect(mapStateToProps)(PostPreview));
