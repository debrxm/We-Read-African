import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectReadersFavorite } from '../../redux/blog/blog.selector';
import { createStructuredSelector } from 'reselect';
import loader from '../../assets/loader.gif';
import './readers-favorite.scss';
const ReadersFavorite = ({ favorites }) => {
  return (
    <div className="readers-favorite">
      <h4>Readers Favorite</h4>
      <br />
      <div className="fav-posts">
        {favorites ? (
          favorites
            .filter((item, index) => index < 4)
            .map((blog, index) => (
              <Link
                key={index}
                to={`/blog/${blog.tag}/${blog.title
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`}
                className="fav-post"
              >
                <img src={blog.image} alt="blog img" />
              </Link>
            ))
        ) : (
          <div className="loader">
            <img id="loader" src={loader} alt="Loader" />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  favorites: selectReadersFavorite,
});

export default connect(mapStateToProps)(ReadersFavorite);
