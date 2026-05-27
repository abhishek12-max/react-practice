import { useState } from "react";

function Mini_project() {
   const[coin,setCoin]=useState(0);
   const[energy,setEnergy]=useState(100);

   function collectcoin(){
      setCoin((prev)=>prev+5);
   }

   function useEnergy(){
       setEnergy((prev)=>prev-10);
   }


   function sleep(){
     setEnergy((prev)=>prev+20);
   }

   function reset(){
       setCoin(0);
       setEnergy(100);
   }

    return ( 
        <>
        <div style={{border:"8px solid black",padding:"10px",textAlign:"center",backgroundColor:"limegreen"}}>
            <h1>Player Dashboard</h1>
            <h1>Coin:{coin}</h1>
            <h1>Energy:{energy}</h1>
         <button onClick={collectcoin}  style={{margin:"10px"}}>Collect_Coin</button>
         <button onClick={useEnergy}  style={{margin:"10px"}}>Use_Energy</button>
         <button onClick={sleep}  style={{margin:"10px"}}>Sleep</button>
         <button onClick={reset}  style={{margin:"10px"}}>Reset</button>
        </div>

        </>
     );
}

export default Mini_project;