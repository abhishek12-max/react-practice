import { useState } from "react";

function Internet() {
    const[internet,setInternet]=useState(false);

     function toggleinternet(){
        setInternet(!internet);
     }
    return ( 
        <>
        <div style={{color: internet?"green":"red",backgroundColor:"lightblue",padding:"10px",textAlign:"center",border:"5px solid"}}>
            <h1>Internet: {internet?"ON":"OFF"}</h1>
            <button onClick={toggleinternet}>Toggle_Internet</button>
        </div>
        </>
     );
}

export default Internet;