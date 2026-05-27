import { useState } from "react";

function Attendance() {
    const[Attendance,setAttndence]=useState(false);

     function toggleAttendance(){
         setAttndence(!Attendance);
     }
    return ( 
        <>
        <div style={{color: Attendance?"green":"red",backgroundColor:"lightblue",padding:"10px",textAlign:"center",border:"5px solid"}}>
         <h1>Attendance:{Attendance?"Present":"Absent"}</h1>
         <button onClick={toggleAttendance}>Mark_Attendance</button>
        </div>
        </>
     );
}

export default Attendance;