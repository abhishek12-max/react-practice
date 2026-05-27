import { useState } from "react";

function Practice2() {
    const[showdetails,setShowdetails]=useState(false);
    const[showskills,setShowskills]=useState(false);


    return ( 
        <div style={{border:"5px solid",padding:"10px",textAlign:"center"}}>
          <button onClick={()=>setShowdetails(!showdetails)}>Show_Details</button>
          {showdetails&& <><h1>Name: Abhishek</h1>
          <h1>Course: MCA</h1>
          <h1>Age: 25</h1>
          </>}
          <br/>
          <button onClick={()=>setShowskills(!showskills)}>Show_Skills</button>
             {showskills&& <><h1>React</h1>
          <h1>Javascript</h1>
          <h1>CSS</h1>
          <h1>Html</h1>
          </>}
        </div>
     );
}

export default Practice2;