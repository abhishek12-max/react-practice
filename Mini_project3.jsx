import { useState } from "react";
import Teacher from "./Teacher";
function Mini_project3({name,age,course,teachername}) {
  const [status,setStatus]=useState("Offline");
const [studentName,setStudentName]=useState(name);

 function changestatus(newstatus){
      setStatus(newstatus);
 }

 function changename(){
      setStudentName(studentName+"new");
 }

    return (  
        <div>
         <h1>Student Dashboard</h1>
         <h1>Name:{studentName}</h1>
         <h1>Age:{age}</h1>
         <h1>Course:{course}</h1>
         <h1>Status:{status}</h1>
         <button onClick={()=>changestatus("Online")}>Online</button>
         <button onClick={()=>changestatus("Busy")}>Busy</button>
         <button onClick={()=>changestatus("Away")}>Away</button>
         <button onClick={changename}>changename</button>
         <Teacher teachername={teachername}/>
        </div>
    );
}

export default Mini_project3;