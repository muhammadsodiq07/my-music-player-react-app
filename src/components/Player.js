import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ 
  currentSong, 
  isPlaying, 
  setPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  timeUpdateHandler,
}) {


const getTime = (time) => {
  if(time) {
    return (
     Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }else {
    return "0:00"
  }
}

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo, currunt: e.target.value});
  }

  return (
    <div className="player">
      <div className="time-control">
        <p className="time-start">
          {getTime(songInfo.currunt)}
        </p>
        <input 
        type="range" 
        min={0}
        max={songInfo.duration || 0}
        value={songInfo.currunt}
        onChange={dragHandler}
        />
        <p className="time-end">
          {getTime(songInfo.duration)}
        </p>
      </div>
      <div className="play-control">
        <div className="leftIonc">
          <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
          <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        </div>
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="3x"
          icon={isPlaying ? faPause : faPlay}
        />
        <div className="rightIcon">
          <FontAwesomeIcon
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
          />
          <FontAwesomeIcon
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
          />
        </div>
      </div>

      <audio 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default Player;
