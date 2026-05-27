import { useState } from "react";

function StepCounter() {
    const[count,setCount]=useState(0);

    function walk(){
        setCount(count+1);
    }

    function run(){
        setCount(count+5);

    }
    function reset(){
        setCount(0);
    }
    return ( 
        <>
        <div style={{border:"8px solid black",padding:"10px",textAlign:"center",backgroundColor:"lightblue"}}>
            <h1>Step-Counter</h1>
        <h1>Count:{count}</h1>
        <button onClick={walk} style={{margin:"10px"}}>Walk</button>
        <button onClick={run} style={{margin:"10px"}}>Run</button>
        <button onClick={reset} style={{margin:"10px"}}>Reset</button>
        </div>
        </>
     );
}

export default StepCounter;