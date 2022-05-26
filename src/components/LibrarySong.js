import React from "react";

function LibrarySong({ currentSong ,setCurrentSong,songs,id,audioRef,isPlaying}) {

  const songSelectHandler = () => {
    const selectedSong = songs.filter((el) => el.id === id)
    if(isPlaying) {
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined) {
        playPromise.then((_) => {
          audioRef.current.play();
        })
      }
    }
    setCurrentSong(selectedSong[0]);
   
  }

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={currentSong.cover} alt="" />
      <div className="library-titles">
        <h2 className="library-name">{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}

export default LibrarySong;
