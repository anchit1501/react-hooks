import React, { useState } from "react";
import uuid from 'uuid/v1';
import NewSong from "./NewSong";
const Songlist = () => {
  const [song, setsong] = useState([
    { title: "123", id: 1 },
    { title: "456", id: 2 },
    { title: "789", id: 3 }
  ]);
  const addSong=(title)=>{
      setsong([...song,{title,id:uuid()}])
  }
  return (
    <div className="song-list">
      <ul>
       {song.map(k=>{
           return<li key={k.id}>{k.title}</li>
       })}
      </ul>
      <NewSong addSong={addSong}/>
    </div>
  );
};

export default Songlist;
