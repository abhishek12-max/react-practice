import { useState } from "react";
function Practice11() {
    const [games,setGames]=useState([
"Cricket",
"Football"
]);

   function del(name){
       setGames(
        games.filter((item)=>(
            item!==name
        ))
       );
   }

   function addbgmi(){
     setGames([
        ...games,
        "BGMI"
     ]);
   }
     function addtennis(){
     setGames([
        ...games,
        "Tennis"
     ]);
   }
    return ( 
        <>
        {games.map((item,index)=>(
          <div key={index}> 
           <h1 >{item}</h1>  <button onClick={()=>del(item)}>Delete</button>
           </div> 
        
        ))}
        <br></br>
        <button onClick={addbgmi}>Add-BGMI</button><br></br>
        <button onClick={addtennis}>Add-Tennis</button>
        </>
     );
}

export default Practice11;