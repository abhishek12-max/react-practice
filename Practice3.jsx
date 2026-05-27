import { useState } from "react";

function Practice3() {
    const[games,setGames]=useState(["Cricket","Football","Tennis"]);
    return (  
        <>
        <div>
            <h1>{games[0]}</h1>
            <h1>{games[1]}</h1>
            <h1>{games[2]}</h1>
        </div>
        </>
    );
}

export default Practice3;