import React, { useState, useEffect } from "react";
import song1 from "../../musics/DaaruParty.mp3";
import song2 from "../../musics/Starboy.mp3";
import song3 from "../../musics/letmelove.mp3";
import song4 from "../../musics/zarasa.mp3";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { Stack } from "@mui/material";

const TinyText = styled(Typography)({
  fontSize: '0.85rem',
  opacity: 0.68,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: 'black'
});

const Widget = styled('div')(() => ({
  padding: '2.5%',
  // borderRadius: 16,
  width: '95%',
  maxWidth: '100%',
  height: '24%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgba(0,0,0,0.6)',
  backdropFilter: 'blur(40px)',
}));


function MusicPlayer({ musicPlayerList, currentSong, setCurrentSong, isPlaying, setIsPlaying }) {
  const theme = useTheme();

  const songs = [
    {
      id: 0,
      title: "Starboy",
      singer: "Weeknd",
      song: song2,
      img: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    },
    {
      id: 1,
      title: "Daaru Party",
      singer: "Milind Gaba",
      song: song1,
      img: "https://m.media-amazon.com/images/I/81FEG1ogKML._SS500_.jpg",
    },
    {
      id: 2,
      title: "Let me Love You",
      singer: "JUSTIN",
      song: song3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YSF2EOEwh4BnU9pwoInbA3nkCMF45Xr-ig&usqp=CAU",
    },
    {
      id: 3,
      title: "Zara sa -Lofi",
      singer: "LOFI REMIX",
      song: song4,
      img: "https://i1.sndcdn.com/artworks-000464421816-0aex4b-t500x500.jpg",
    }
  ];

  const [currTime, setCurrTime] = useState(0);
  const [audio] = useState(new Audio());

  const setCurTime = (audio) => {
    if (!audio)
      return;
    setCurrTime(audio.currentTime);
  };

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  function formatDuration(value) {
    if (isNaN(value)) {
      return `00:00`
    }
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${(secondLeft).toFixed(2) < 10 ? `0${(secondLeft).toFixed(0)}` : (secondLeft).toFixed(2)}`;
  }

  useEffect(() => {
    const appendMusic = () => {
      setCurrentSong(songs[0]);
      for (let i = 0; i < songs.length; i += 1) {
        musicPlayerList.append(songs[i]);
      }
    }
    appendMusic();
    // eslint-disable-next-line
  }, []);

  audio?.addEventListener("loadeddata", () => {
    setCurTime(audio);
  });

  audio?.addEventListener("canplaythrough", (event) => {
    setIsPlaying(true);
  });

  useEffect(() => {
    try {
      if (!audio)
        return;
      if (!isPlaying) {
        pause();
      } else {
        play();
      }
    } catch (err) {
      console.log(err)
    }
    // eslint-disable-next-line
  }, [isPlaying]);

  useEffect(() => {
    try {
      audio.src = currentSong.song;
      audio.load();
      audio.play();
    } catch (err) {
      console.log(err)
    }
    // eslint-disable-next-line
  }, [currentSong]);

  //Time updates here 
  useEffect(() => {
    try {
      var timerID = setInterval(() => setCurTime(audio), 1000);
      return function cleanup() {
        clearInterval(timerID);
      };
    } catch (err) {
      console.log(err)
    }
    // eslint-disable-next-line
  }, [currTime]);

  function toggleMusic() {
    setIsPlaying(!isPlaying);
  }

  const pause = () => {
    audio.pause();
  };

  const play = () => {
    audio.play();
  };

  const changeVolume = (e) => {
    audio.volume = e.target.value;
  }

  const forward = () => {
    audio.pause();
    musicPlayerList.forward();
    if (musicPlayerList.head) {
      setCurrentSong(musicPlayerList.head.element);
      setIsPlaying(false);
    }
  }
  const backward = () => {
    audio.pause();
    musicPlayerList.backward();
    if (musicPlayerList.head) {
      setCurrentSong(musicPlayerList.head.element);
      setIsPlaying(false);
    }
  }

  return (
    <>
      <div className="musicPlayerLayout">
        <img
          alt="g"
          src={currentSong.img}
          className="musicImage"
          id={isPlaying ? "musicImageAnime" : null}
        />
        <p className="musicTitle">{currentSong.title}</p>
        <div className="lyricsDiv">
          <p>
            {currentSong.singer}
          </p>
        </div>
      </div>
      <Widget>
        <Slider
          id="musicSlider"
          aria-label="time-indicator"
          size="small"
          value={audio?.currentTime || 0}
          min={0}
          step={1}
          max={audio?.duration}
          onChange={(e) => audio.currentTime = e.target.value}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
                  }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(currTime)}</TinyText>
          <TinyText>-{formatDuration(audio?.duration - currTime)}</TinyText>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song" onClick={backward}>
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={!isPlaying ? 'play' : 'pause'}
            onClick={toggleMusic}
          >
            {!isPlaying ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <IconButton aria-label="next song" onClick={forward}>
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={audio?.volume || 1}
            min={0}
            step={0.1}
            max={1}
            onChange={changeVolume}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
      </Widget>
    </>
  );
}

export default MusicPlayer;
