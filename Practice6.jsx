import { useState } from "react";

function Practice6() {
    const[players,setPlayers]=useState(["Virat","Rohit"]);

     function add(){
       setPlayers([
            ...players,
            "Dhoni"
         ]); 
     }

     function remove(){
        setPlayers(players.slice(0,-1));
     }

    return ( 
        <>
        <div>
          <h1>{players[0]}</h1>
          <h1>{players[1]}</h1>
          <h1>{players[2]}</h1>
          <button onClick={add}>add_Dhoni</button>
          <button onClick={remove}>remove last</button>
        </div>
        </>
     );
}

export default Practice6;