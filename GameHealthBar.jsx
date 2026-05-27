import { useState } from "react";

function GameHealthBar() {
    const[health,sethealth]=useState(100);

    function damage(){
        sethealth((prev)=>prev-20);
    }
     function heal(){
        sethealth((prev)=>prev+10);
     }

     function resetHealth(){
        sethealth(100);
     }
    return (
        <>
        <div style={{border:"8px solid black",padding:"10px",textAlign:"center",backgroundColor:"lightgreen"}}>
            <h1>Game-Health-Bar</h1>
            <h1>Health:{health}</h1>
            <button onClick={damage} style={{margin:"10px"}}>Damage</button>
            <button onClick={heal} style={{margin:"10px"}}>Heal</button>
            <button onClick={resetHealth} style={{margin:"10px"}}>Reset</button>
        </div>
        </>
      );
}

export default GameHealthBar;