import { useState } from "react";

function Abhi() {
    const[mode,setMode]=useState(false);

    function togglemode(){
        setMode(!mode);
    }
    return (  
        <>
        <div style={{backgroundColor: mode?"black":"white",color: mode?"white":"black"}}>
           <h1>Mode: {mode?"dark":"light"}</h1>
           <button onClick={togglemode}>Changemode</button>
        </div>
        </>
    );
}

export default Abhi;
<>
</>