import { useState } from "react";
function Mini_project2() {
     const[name,setName]= useState("Abhishek");
      const[status,setStatus]=useState("Offline");
     
         function changestatus(newstatus){
              setStatus(newstatus);
         }
      
         function changename(name){
       setName(name);
   }

    return ( 
        <div>
            <h1>Name:{name}</h1>
           <h1>Status:{status}</h1>
       <button onClick={()=>changestatus("Online")}>Online</button>
       <button onClick={()=>changestatus("Busy")}>Busy</button>
       <button onClick={()=>changestatus("Away")}>Away</button>
       <button onClick={()=>changestatus("Offline")}>Reset</button>
       <button onClick={()=>changename("Teena")}>Teena</button>
        <button onClick={()=>changename("Aman")}>Aman</button>
        <button onClick={()=>changename("Rahul")}>Rahul</button>
        </div>
     );
}

export default Mini_project2;