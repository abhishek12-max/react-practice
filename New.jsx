import { useState } from "react";

function New() {
    const[light,setLight]=useState(false);
    const[fan,setFan]=useState(false);

    function togglefan(){
        setFan(!fan);
    }
    function togglelight(){
        setLight(!light);
    }
    return ( 
        <>
        <div style={{backgroundColor:"lightgray",padding:"10px",textAlign:"center"}} >
        <h1>light:{light ?"on":"off"}</h1>
        <h1>Fan:{fan?"On":"Off"}</h1>
        <button onClick={togglelight}>ToggleLight</button> 
        <button onClick={togglefan}>Tooglefan</button> 
         </div>
        </>
     );
}

export default New;