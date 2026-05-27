import { useState } from "react";

function Practice12() {
     const[game,setGame]= useState("")
     const [games,setGames]=useState([
    "Cricket",
    "Football"
    ]);
   
    function changehandle(e){
        setGame(e.target.value);
    }

    function addgame(){
        if(game===""){
         alert("input feild is empty");
        }
        setGames([
            ...games,
            game
           
        ]);
        setGame("");
    }

    return ( 
        <>
        {games.map((item,index)=>(
           <h1 key={index}>{item}</h1>
        ))}

        <input type="text" value={game} placeholder="Enter Your Game" onChange={changehandle}/>
         <button onClick={addgame}>Add Game</button>
        </>
     );
}

export default Practice12;