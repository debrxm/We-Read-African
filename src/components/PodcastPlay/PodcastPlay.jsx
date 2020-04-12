import React, { Component } from 'react';
import './PodcastPlay.scss';

//Assets;
import logo from '../../assets/logo.svg';
import playIcon from '../../assets/playIconWRA.svg';
import track from '../../assets/testtrack.mp3';

export default class PodcastPlay extends Component {
  constructor() {
    super();
    this.state = {
      trackName: 'Eliza Griswold',
      track: { track },
      trackStart: `00:00`,
      trackEnd: `00:00`,
      trackProgress: '0',
    };
  }
  componentDidMount() {
    let track = document.querySelector('#track');
    let playPauseBttn = document.querySelector('.playPauseBttn');
    console.log(track);

    track.addEventListener('timeupdate', () => {
      this.setState({
        trackProgress: Math.floor((100 / track.duration) * track.currentTime),
      });
    });

    setInterval(() => {
      let gettingCurrentTime = track.currentTime / 60;
      let countTime = '';
      for (let i = 0; i < 4; i++) {
        if (gettingCurrentTime.toString() === '0') {
        } else {
          if (gettingCurrentTime.toString()[i] === '.') {
            countTime += ':';
          } else {
            countTime += gettingCurrentTime.toString()[i];
          }
        }
        this.setState({
          trackStart: countTime,
        });
      }
    }, 1100);

    let trackingTime = '';
    track.onloadedmetadata = () => {
      let trackDuration = track.duration / 60;
      if (trackDuration.toString()[1] === '.') {
        trackingTime += '0';
      }
      for (let i = 0; i < 4; i++) {
        // console.log(trackDuration.toString()[i]);
        if (trackDuration.toString()[i] === '.') {
          trackingTime += ':';
        } else trackingTime += trackDuration.toString()[i];
      }
      this.setState({
        trackEnd: trackingTime,
      });
    };

    playPauseBttn.addEventListener('click', () => {
      // console.log(track.currentTime);
      if (track.dataset.playing === 'false') {
        playPauseBttn.setAttribute('id', 'pause');
        track.play();
        track.dataset.playing = 'true';
      } else if (track.dataset.playing === 'true') {
        playPauseBttn.removeAttribute('id');
        track.pause();
        track.dataset.playing = 'false';
      }
    });
  }
  render() {
    return (
      <div id="PodcastPlayContainer">
        <div id="podcastPlayHeader">
          <img src={logo} alt="logo" />
        </div>
        <div id="playUI">
          <span class="playPauseBttn"></span>
          <p id="trackName">Now Playing: {this.state.trackName}</p>
        </div>
        <div id="podcastTrack">
          <input
            type="range"
            step="1"
            min="0"
            max="100"
            onChange={this.changeProgress}
            value={this.state.trackProgress}
          />
          <audio id="track" preload="metadata" data-playing="false">
            <source src={track} type="audio/mpeg"></source>
          </audio>
        </div>
        <div id="trackProgressVisual">
          <div id="trackTime">
            <p id="trackTimeStart">{this.state.trackStart}</p>
            <p id="trackTimeEnd">{this.state.trackEnd}</p>
          </div>
        </div>
      </div>
    );
  }
}
