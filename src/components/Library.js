import React, { useState } from 'react'
import LibrarySong from './LibrarySong'

function Library({songs, setCurrentSong,audioRef,isPlaying}) {


  return (
    <div className="library">
        <h2 className="library-title">Music Play List</h2>
      <div className="library-songs">
         {songs.map(song => (
           <LibrarySong
           key={song.id}
           currentSong={song}
           setCurrentSong={setCurrentSong}
           songs={songs}
           id={song.id}
           audioRef={audioRef}
           isPlaying={isPlaying}
           />
         ))}

      </div>
    </div>
  )
}

export default Library
