import { useState } from "react";

function Count() {
    const[count,setCount]=useState(0);

    function add(){
    

        setCount((prev)=>prev+5);
        setCount((prev)=>prev+5);
        

    }

    function minus(){
        setCount((prev)=>prev-5);
    }
    return (  
        <>
        <h1>{count}</h1>
        <button onClick={add}>ADD</button>
        <button onClick={minus}>minus</button>
        </>
    );
}

export default Count;