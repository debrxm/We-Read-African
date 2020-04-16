import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Audio from '../../components/audio/audio';
import { selectEpisode } from '../../redux/podcast/podcast.selector';
// import whatsapp from '../../assets/socials/whatsapp.svg';
// import linkedin from '../../assets/socials/linkedin.svg';
// import facebook from '../../assets/socials/facebook.svg';
// import twitter from '../../assets/socials/twitter.svg';
import tomb from '../../assets/tomb.svg';
import itune_podcast from '../../assets/itune_podcast.svg';
import sound from '../../assets/sound.svg';
import rss from '../../assets/rss.svg';
import spotify from '../../assets/spotify.svg';
import download from '../../assets/download.svg';
// import Comments from '../../components/comments/comments';
// import CommentBox from '../../components/comment-box/comment-box';
import './episodepage.scss';
class EpisodePage extends React.Component {
  render() {
    const {
      audio_file,
      title,
      sub_title,
      episode,
      updated_at,
      // itune,
      // soundcloud,
      // rss,
      // spotify
    } = this.props.episode[0];
    return (
      <div className="episode-page">
        <Helmet>
          <title>We Read African &mdash; {title}</title>
          <meta title="keywords" content={`${title}`} />
          <meta name="description" content={`${title} `} />
          <meta
            property="og:title"
            content={`We Read African &mdash; ${title}`}
          />
          <meta property="og:type" content="website" />
          <meta name="description" content="" />
          <meta property="og:site_name" content="We Read African" />
          <meta
            property="og:url"
            content={`https://www.wereadafrican.com/${title}`}
          />
        </Helmet>
        <div className="episode">
          <div className="episode-preview">
            <div className="image-container" onClick={this.handlechangePlaying}>
              <img src={tomb} alt="podcast img" className="image" />
            </div>
            <div className="details-control">
              <span className="epi">
                {' '}
                {new Date(updated_at.seconds * 1000)
                  .toString()
                  .split(' ')
                  .slice(0, 4)
                  .join(' ')}{' '}
                Episode {episode}
              </span>
              <h3 className="title">{title}</h3>
              <Audio episode_mp={audio_file} episode_title={title} />
              <div className="controls">
                <a href="https://www.itune.com" className="link">
                  <img src={itune_podcast} alt="itune stream icon" />
                </a>
                <a href="https://www.itune.com" className="link">
                  <img src={sound} alt="soundcloud stream icon" />
                </a>
                <a href="https://www.itune.com" className="link">
                  <img src={rss} alt="rss stream icon" />
                </a>
                <a href="https://www.itune.com" className="link">
                  <img src={spotify} alt="spotify stream icon" />
                </a>
                <a
                  href={
                    this.props.episode_data
                      ? this.props.episode_data.audio_file
                      : null
                  }
                  className="download"
                  download
                >
                  <img src={download} alt="download icon" />
                  <span>Download</span>
                </a>
              </div>
              <p className="sub-title">{sub_title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    episode: selectEpisode(
      ownProps.match.params.episodeId,
      ownProps.match.url
    )(state),
  };
};

export default connect(mapStateToProps)(EpisodePage);
