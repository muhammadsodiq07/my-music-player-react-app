import { useRef, useState } from "react";
import "./App.scss";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import Musicdata from "./Musicdata";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(Musicdata());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currunt: 0,
    duration: 0,
  });

  const [status, setStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const currunt = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currunt, duration });
  };
  return (
    <div className="container">
      <div className={`container-padding ${status ? 'ml' : ''}`}>
        <Nav
        status={status}
        setStatus={setStatus}
        />
        <Song currentSong={currentSong} 
        isPlaying={isPlaying}/>
        <Player
          isPlaying={isPlaying}
          setPlaying={setPlaying}
          currentSong={currentSong}
          audioRef={audioRef}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          timeUpdateHandler={timeUpdateHandler}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
      </div>
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        status={status}
      />
    </div>
  );
}

export default App;
