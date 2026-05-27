import { useState } from "react";
import Trainer from "./Trainer";

function Mini_project4({coursename,duration,trainername}) {
    const[status,setStatus]=useState("Not Enrolled");
    const[course,setCourse]=useState(coursename);

    function enroll(){
        setStatus("Enrolled")
    }

    function reset(){
        setStatus("Not Enrolled")
    }

    function complete(){
        setStatus("Complete");
    }


    function changecourse(){
        setCourse(course+"Advance");
    }

    return ( 
        <div>
            <h1>Course:{course}</h1>
            <h1>Duration:{duration}</h1>
            <h1>Status:{status}</h1>
            <button onClick={enroll}>Enroll</button>
            <button onClick={complete}>Complete</button>
            <button onClick={reset}>Reset</button>
            <button onClick={changecourse}>ChangeCoursename</button>
            <Trainer trainername={trainername}/>
        </div>
     );
}

export default Mini_project4;