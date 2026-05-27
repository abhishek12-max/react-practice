import { useState } from "react";

function Practice5() {
    const[cities,setCities]=useState(["Dehradun","Delhi","Mumbai","Haryana"]);

     function showfirstcity(){
         alert(cities[0]);
     }

    return ( 
        <>
        <div>
          <h1>{cities[0]}</h1>
          <h1>{cities[1]}</h1>
          <h1>{cities[2]}</h1>
          <h1>{cities[3]}</h1>
          <button onClick={showfirstcity}>Show_first_city</button>
        </div>
        </>
     );
}

export default Practice5;