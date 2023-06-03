import React from "react";
import Card from "./card/Card";
import "./Grid1.css";
export default function Grid1({musicPlayerList, setCurrentSong, setIsPlaying}) {
  const hits = [
    {
      id: 0,
      title: "STARBOY",
      img: "https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg",
    },
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
  const grids = hits.map((hit) => {
    return <Card key={hit.id} src={hit.img} id={hit.id} title={hit.title} musicPlayerList={musicPlayerList} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}  />;
  });
  return (
    <>
        <p className="Grid1Head">Today's hits</p>
      <div className="Grid1">
        {grids}
      </div>
    </>
  );
}
