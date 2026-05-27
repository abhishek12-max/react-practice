import { useState } from "react";

function Input() {
    const[course,setCourse]=useState("");

    function changehandle(e){
         setCourse(e.target.value);
    }

    return ( 
        <>
        <input type="text" placeholder="Enter Course" onChange={changehandle}/>
        <h1>Course:{course}</h1>
        </>
     );
}

export default Input;