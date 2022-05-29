import React  from 'react'
import LibrarySong from './LibrarySong'

function Library({
  songs, 
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  status
}) {


  return (
    <div className={`library ${status ? 'active-status' : ''}`}>
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
           setSongs={setSongs}
           status={status}
           />
         ))}

      </div>
    </div>
  )
}

export default Library
