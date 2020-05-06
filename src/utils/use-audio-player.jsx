import { useState, useEffect } from 'react';

const useAudioPlayer = () => {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.getElementById('audio');

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);
    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
    if (audio.curTime === audio.duration) {
      audio.pause();
    }

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [playing, clickedTime, curTime]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
};
export default useAudioPlayer;
