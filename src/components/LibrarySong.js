import React from "react";
import { playAudio } from "./Until";

function LibrarySong({ 
  currentSong,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) {

  const songSelectHandler = () => {
    const selectedSong = songs.filter((el) => el.id === id)
    setCurrentSong(selectedSong[0]);

    const newSongs = songs.map((song) => {
      if(song.id === id) {
        return {
          ...song,
          active: true
        }
      }else {
        return {
          ...song,
          active: false
        }
      }
    })
    setSongs(newSongs)
    playAudio(isPlaying,audioRef)
  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${currentSong.active ? 'activeed' : ''}`}>
      <img src={currentSong.cover} alt="" />
      <div className="library-titles">
        <h2 className="library-name">{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}

export default LibrarySong;
