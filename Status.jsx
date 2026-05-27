import { useState } from "react";

function Status() {
    const[status,setStatus]=useState("Offline");

    function changestatus(newstatus){
         setStatus(newstatus);
    }

    return ( 
        <>
       <h1>Status:{status}</h1>
       <button onClick={()=>changestatus("Online")}>Online</button>
       <button onClick={()=>changestatus("Busy")}>Busy</button>
       <button onClick={()=>changestatus("Away")}>Away</button>
       <button onClick={()=>changestatus("Offline")}>Reset</button>
        </>
     );
}

export default Status;