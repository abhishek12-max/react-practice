import { useState } from "react";

function Practice15() {
    const[students,setStudents]=useState([
        {name:"Abhishek",course:"MCA"},
        {name:"arun",course:"bca"}
    ])

    function edit(course){
        let newcourse=prompt("enter your course");
        if( newcourse===null || newcourse.trim()===""){
                  return;
            }
        setStudents(
            students.map((item)=>(
                item.course===course? {...item,course:newcourse}:item
            ))
        )

    }

    return ( 
        <>
        {students.map((item,index)=>(
            <div key={index}>
                <h1>{item.name} - {item.course}</h1> 
                <button onClick={()=>edit(item.course)}>Edit</button>
            </div>
        ))}
        </>
     );
}

export default Practice15;