import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';
import tomb from '../../assets/tomb.svg';
import itune_podcast from '../../assets/itune_podcast.svg';
import sound from '../../assets/sound.svg';
import rss from '../../assets/rss.svg';
import spotify from '../../assets/spotify.svg';
import download from '../../assets/download.svg';
import './episode-preview.scss';
export default class EpisodePreview extends Component {
  saveAs(url) {
    var filename = url.substring(url.lastIndexOf('/') + 1).split('?')[0];
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var a = document.createElement('a');
      a.href = window.URL.createObjectURL(xhr.response);
      a.download = filename;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      // delete a;
    };
    xhr.open('GET', url);
    xhr.send();
  }
  render() {
    // console.log(this.props.episode_data);
    const {
      title,
      episode,
      itune,
      soundcloud,
      audio_file,
      posted_ad,
    } = this.props.episode_data;
    return (
      <div className="episode-preview">
        <div className="image-container">
          <ReactWebMediaPlayer
            width={220}
            height={210}
            thumbnail={tomb}
            audio={audio_file}
            vinyl={{ img: tomb, rpm: 10 }}
          />
        </div>
        <div className="details-control">
          <span className="epi">Episode {episode}</span>
          <h3 className="title">{title}</h3>
          <p className="sub-title">
            Eliza Griswold joins Kelvin Young to discuss her poetry sequence
            "First Person"
          </p>
          <span className="time">03:44 | February 18, 2020</span>
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
              onClick={
                this.props.episode_data
                  ? this.saveAs.bind(this, this.props.episode_data.audio_file)
                  : null
              }
              download
            >
              <img src={download} alt="download icon" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
