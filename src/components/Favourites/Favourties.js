import React from "react";
import "./Favourites.css";
import Card from "../grids/card/Card";
export default function Favourties({ musicPlayerList, setCurrentSong, setIsPlaying }) {
  const favs = [
    {
      id: 1,
      title: "MILIND GABA",
      img: "https://c.saavncdn.com/editorial/DilliKaMilindGaba_20190326043420.jpg",
    },
    {
      id: 2,
      title: "JUSTIN",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YSF2EOEwh4BnU9pwoInbA3nkCMF45Xr-ig&usqp=CAU",
    },
    {
      id: 3,
      title: "Zara sa -Lofi",
      img: "https://i1.sndcdn.com/artworks-000464421816-0aex4b-t500x500.jpg",
    },
  ];
  const grids = favs.map((hit) => {
    return <Card key={hit.id} src={hit.img} id={hit.id} title={hit.title} setCurrentSong={setCurrentSong} musicPlayerList={musicPlayerList} setIsPlaying={setIsPlaying} />;
  });
  return (
    <>
        <p className="Grid1Head">My Favourites</p>
      <div className="Grid1">
        {grids}
      </div>
    </>
  );
}
