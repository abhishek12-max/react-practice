import { useState } from "react";

function Practice() {
    const[showcourse,setShowcourse]=useState(false);
    
    function togglecourse(){
        setShowcourse(!showcourse);
    }
    return ( 
        <div style={{border:"5px solid",padding:"10px",textAlign:"center"}}>
          <button onClick={togglecourse}>Show_Course</button>
          {showcourse && <><h1>React</h1> <h1>Nodejs</h1>
             <h1>Mongodb</h1></>}
        </div>
        
     );
}

export default Practice;