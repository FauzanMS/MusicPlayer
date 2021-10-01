import React, { useState, useEffect, useRef } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import song1 from "../../musics/DaaruParty.mp3";
import song2 from "../../musics/Starboy.mp3";
import song3 from "../../musics/letmelove.mp3";
import song4 from "../../musics/zarasa.mp3";

import { connect } from "react-redux";
import * as actionTypes from '../../store/actions/action';
function MusicPlayer(props) {
  const songs = [
    {
      title: "Starboy",
      singer: "Weeknd",
      song: song2,
      img: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    },
    {
      title: "Daaru Party",
      singer: "Milind Gaba",
      song: song1,
      img: "https://m.media-amazon.com/images/I/81FEG1ogKML._SS500_.jpg",
    },
    {
      title: "Let me Love You",
      singer: "JUSTIN",
      song: song3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YSF2EOEwh4BnU9pwoInbA3nkCMF45Xr-ig&usqp=CAU",
    },
    {
      title: "Zara sa -Lofi",
      singer: "LOFI REMIX",
      song: song4,
      img: "https://i1.sndcdn.com/artworks-000464421816-0aex4b-t500x500.jpg",
    }
  ];
  let songId = props.song_id;
  let cTime = 0;
  const [sum] = useState(0);
  const [song_Id, setSong_Id] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [audio] = useState(new Audio(songs[songId].song));
  const [isPlaying, setIsPlaying] = useState(false);
  const ct = useRef();
  const [stringTime , setStringTime] =useState('');
  const [durTime, setDurTime] = useState(audio.duration);

  const setCurTime = () => {
    setCurrTime(audio.currentTime);
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    if(s<10)
    setStringTime(m+":0"+s);
    else
    setStringTime(m+":"+s);

    var s1 = parseInt(audio.duration % 60);
    var m1 = parseInt((audio.duration / 60) % 60);
    if(s1<10)
    setDurTime(m1+":0"+s1);
    else
    setDurTime(m1+":"+s1);


  };

  useEffect(() => {
    musicCheck();
    // eslint-disable-next-line
  }, [isPlaying]);

  useEffect(() => {
    audio.currentTime = 0;
    musicChange();
    // eslint-disable-next-line
  }, [songId]);

  
  useEffect(() => {
    setSong_Id(sum);
    // eslint-disable-next-line
  }, [sum]);


  //Time updates here 
  useEffect(() => {
    var timerID = setInterval(() => setCurTime(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
    // eslint-disable-next-line
  }, [currTime]);


  const musicProgress = () => {
    audio.currentTime = ct.current.value;
  };
  function toggleMusic() {
    setIsPlaying(!isPlaying);
  }
  const pause = () => {
    cTime = audio.currentTime;
    audio.pause();
  };
  const play = () => {
    cTime = audio.currentTime;
    audio.src = songs[song_Id].song;
    audio.currentTime = cTime;
    audio.play();
    if (songId !== song_Id) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  function musicCheck() {
    if (!isPlaying) {
      pause();
    } else {
      play();
    }
  }


  async function musicChange() {
    if (songId !== song_Id) {
      await toggleMusic();
      setSong_Id(songId);
      audio.currentTime = 0;
      if (isPlaying) {
        await setIsPlaying(true);
      } else {
        await setIsPlaying(false);
    }
    }
  }
  return (
    <>
      <div className="musicPlayerLayout">
        <img
          alt="g"
          src={songs[songId].img}
          className="musicImage"
          id={isPlaying ? "musicImageAnime" : null}
        />
        <p className="musicTitle">{songs[songId].title}</p>
        <div className="lyricsDiv">
          <p>
            {songs[songId].singer}
          </p>
        </div>
      </div>
      <div className="duration">
        <p>{stringTime}</p>
        <p>{durTime}</p>
      </div>
      <div className="TitleBar">
        <input
          type="range"
          className="progressBar2"
          ref={ct}
          step={1}
          value={currTime}
          onChange={musicProgress}
          min={0}
          max={audio.duration}
        />
      </div>
      <div className="musicControls">
        <div className="back">
          <SkipPreviousIcon
            className="controls"
            onClick={() => props.prevMusic(1)}
            style={{ fontSize: 50 }}
          />
        </div>
        <div className="play">
          {!isPlaying ? (
            <PlayCircleFilledWhiteIcon
              className="controls"
              onClick={toggleMusic}
              style={{ fontSize: 50 }}
            />
          ) : (
            <PauseCircleFilledIcon
              className="controls"
              onClick={toggleMusic}
              style={{ fontSize: 50 }}
            />
          )}
        </div>
        <div className="next">
          <SkipNextIcon
            className="controls"
            onClick={() => props.nextMusic(1)}
            style={{ fontSize: 50 }}
          />
        </div>
      </div>
    </>
  );
}

const mapStoreToProps = (state) => {
  return {
    songs: state.songs,
    song_id: state.song_id,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    nextMusic :(value)=>dispatch({type:actionTypes.NEXT_SONG , id : value}),
    prevMusic :(value)=>dispatch({type:actionTypes.PREV_SONG , id : value})
  }
}

export default connect(mapStoreToProps , mapDispatchToProps)(MusicPlayer);
