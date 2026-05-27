import { useState } from "react";

function Practice9() {
    const[games,setGames]=useState(["Cricket","Football","Tennis"]);
    return (  
        <>
        <div>
           {games.map((item,index)=>(
             <h1 key={index}>{index+1}.{item}</h1>
           ))}
        </div>
        </>
    );
}

export default Practice9;