import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const barrinhaFundo = useRef();
  const barrinhaFrente = useRef();

  const [musica, setMusica] = useState(songsData[4]);
  const [playStatus, setPlayStatus] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [tempo, setTempo] = useState({
    tempoAtual: { segundos: 0, minutos: 0 },
    tempoTotal: { segundos: 0, minutos: 0 },
  });

  const formatTime = (time) => {
    const minutos = Math.floor(time / 60);
    const segundos = Math.floor(time % 60);
    return {
      minutos: minutos.toString().padStart(2, '0'),
      segundos: segundos.toString().padStart(2, '0'),
    };
  };

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playId = async (id) => {
    await setMusica(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const nextSong = () => {
    let nextIndex = songsData.indexOf(musica) + 1;
    if (nextIndex >= songsData.length) {
      nextIndex = 0;
    }
    playId(nextIndex);
  };

  const prevSong = () => {
    let prevIndex = songsData.indexOf(musica) - 1;
    if (prevIndex < 0) {
      prevIndex = songsData.length - 1;
    }
    playId(prevIndex);
  };

  const shuffleSong = () => {
    const randomIndex = Math.floor(Math.random() * songsData.length);
    playId(randomIndex);
  };

  const setProgress = (e) => {
    const width = barrinhaFundo.current.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickX / width) * duration;
  };

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      barrinhaFrente.current.style.width = (audioRef.current.currentTime / audioRef.current.duration) * 100 + '%';
      setTempo({
        tempoAtual: formatTime(audioRef.current.currentTime),
        tempoTotal: formatTime(audioRef.current.duration),
      });
    };
  }, [audioRef]);

  const contextValue = {
    audioRef,
    barrinhaFrente,
    barrinhaFundo,
    musica,
    setMusica,
    playStatus,
    setPlayStatus,
    tempo,
    setTempo,
    play,
    pause,
    playId,
    nextSong,
    prevSong,
    shuffleSong,
    setProgress,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
