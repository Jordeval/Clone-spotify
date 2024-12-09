import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { musica, barrinhaFrente, barrinhaFundo, play, pause, playStatus, tempo, nextSong, prevSong, shuffleSong, setProgress } = useContext(PlayerContext);

  return (
    <div className='player'>
      <div className="player-left">
        <img src={musica.image} alt="" />
        <div className='player-left-song'>
          <h2>{musica.name}</h2>
          <p>{musica.desc}</p>
        </div>
      </div>

      <div className="player-center">
        <div className="player-center-controls">
          <img src={assets.shuffle_icon} alt="Shuffle" onClick={shuffleSong} />
          <img src={assets.prev_icon} alt="Previous" onClick={prevSong} />
          {playStatus ? (
            <img onClick={pause} src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} src={assets.play_icon} alt="Play" />
          )}
          <img src={assets.next_icon} alt="Next" onClick={nextSong} />
          <img src={assets.loop_icon} alt="Loop" />
        </div>
        <div className="player-center-temp">
          <p>{tempo.tempoAtual.minutos}:{tempo.tempoAtual.segundos}</p>
          <div ref={barrinhaFundo} className='progress-bar' onClick={setProgress}>
            <hr ref={barrinhaFrente} />
          </div>
          <p>{tempo.tempoTotal.minutos}:{tempo.tempoTotal.segundos}</p>
        </div>
      </div>

      <div className="player-right">
        <img src={assets.plays_icon} alt="" />
        <img src={assets.mic_icon} alt="" />
        <img src={assets.queue_icon} alt="" />
        <img src={assets.volume_icon} alt="" />
        <div className='progress-volume'></div>
        <img src={assets.mini_player_icon} alt="" />
        <img src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
