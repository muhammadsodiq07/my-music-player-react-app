import React from "react";

function Song({currentSong,isPlaying}) {
  return (
    <div className="song-container">
      <img className={`${isPlaying ? "imgAnim" : ""}`} src={currentSong.cover} alt="" />
      <div className="song-names">
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}

export default Song;
