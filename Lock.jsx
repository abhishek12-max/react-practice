import { useState } from "react";

function Lock() {
   const[door,setDoor]=useState(false);
  
   function toggledoor(){
      setDoor(!door);
   }
    return ( 
        <div style={{border:"8px solid black",textAlign:"center", margin:"10px",padding:"10px",backgroundColor:"pink"}}>
            <h1>Door Locked system</h1>
         <h1>Door: {door?"Unlocked":"Locked"}</h1>
         <button onClick={toggledoor}>Lock/unlock</button>
        </div>
     );
}

export default Lock;