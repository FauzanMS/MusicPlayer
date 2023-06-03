import React from "react";
import Grid1 from "./grids/Grid1";
import "./HomeLayout.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./Navbar/Navbar";
import Favourties from "./Favourites/Favourties";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { DLinkedList } from "../DoublyLinkedList";

export default function HomeLayout() {
  const [musicPlayerList] = React.useState(new DLinkedList());
  const [currentSong, setCurrentSong] = React.useState({
    title: "",
    singer: "",
    song: undefined,
    img: "",
  });
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <Router>
    <div className="HomeLayout">
      <Navbar />
      <div className="mainContent">
        <Switch>
          <Route exact path='/'>
              <Grid1 isPlaying={isPlaying} setIsPlaying={setIsPlaying} musicPlayerList={musicPlayerList} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </Route>
        <Route exact path='/favourites'>
              <Favourties isPlaying={isPlaying} setIsPlaying={setIsPlaying} musicPlayerList={musicPlayerList} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        </Route>
        </Switch>
      </div>
      <Switch>
      <div className="musicPlayer">
          <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} musicPlayerList={musicPlayerList} currentSong={currentSong} setCurrentSong={setCurrentSong} />
       <Route exact path="/musicList">
              <Grid1 isPlaying={isPlaying} setIsPlaying={setIsPlaying} musicPlayerList={musicPlayerList} currentSong={currentSong} setCurrentSong={setCurrentSong} />
       </Route>
       <Route exact path="/favourites2">
              <Favourties isPlaying={isPlaying} setIsPlaying={setIsPlaying} musicPlayerList={musicPlayerList} currentSong={currentSong} setCurrentSong={setCurrentSong} />
       </Route>
      </div>
      </Switch>
    </div>
    </Router>
  );
}
