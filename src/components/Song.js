import React from "react";

function Song({currentSong}) {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="" />
      <div className="song-names">
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}

export default Song;
