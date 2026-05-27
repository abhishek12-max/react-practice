import { useState } from "react";

function Task() {
    const[name,setName]= useState("Abhishek");

   function changename(name){
       setName(name);
   }

    return (  
        <>
        <h1>Name:{name}</h1>
        <button onClick={()=>changename("Teena")}>Teena</button>
        <button onClick={()=>changename("Aman")}>Aman</button>
        <button onClick={()=>changename("Rahul")}>Rahul</button>
        </>
    );
}

export default Task;
