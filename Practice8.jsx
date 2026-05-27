import { useState } from "react";

function Practice8() {
    const[players,setPlayers]=useState(["Virat","Rohit","Dhoni","Hardik"]);

    return ( 
        <>
        <div>
          
          {players.map((item,index)=>(
             <h1 key={index}>{item}</h1>
          ))}
         
        </div>
        </>
     );
}

export default Practice8;