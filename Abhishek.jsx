import { useState } from "react";

function Abhishek() {
    const[status,setStatus]=useState(false);
 
    function toggleStatus(){
        setStatus(!status);
    }

    return (  
        <>
        <div>
            <h1>Status:{status?"login":"Logout"}</h1>
            <button onClick={toggleStatus}>login/logout</button>
        </div>
        </>
    );
}

export default Abhishek;