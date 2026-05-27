import { useState } from "react";

function ScoreBoard() {
    const[score,setScore]=useState(50);


    function add(){
        setScore(score+10);
    }

    function double(){
        setScore((prev)=>prev*2);
       
        
    
    }
  
    function minus(){
        setScore((prev)=>prev-10);
    }
    

    return ( 
        <>
        <div style={{border:"8px solid black",padding:"10px",textAlign:"center",backgroundColor:"lightpink"}}>
          <h1>Score-Board</h1>
          <h1>Score:{score}</h1>
          <button onClick={add}  style={{margin:"10px"}}>Add</button>
          <button onClick={double}  style={{margin:"10px"}}>Double</button>
          <button onClick={minus}  style={{margin:"10px"}}>Minus</button>
        </div>
        </>
     );
}

export default ScoreBoard;