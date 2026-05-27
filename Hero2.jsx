import { useState } from "react";

function Hero2() {
    const[name,setName]=useState("");
    const[course,setCourse]=useState("");
    const[students,setStudents]=useState([]);


    function changename(e){
       setName(e.target.value);
    }
     function changecourse(e){
       setCourse(e.target.value);
    }

    function add(){

        if(name.trim()==""||course.trim()==""){
            return;
        }

        setStudents([
            ...students,
            {name:name,course: course}
            
        ])

        setName("");
        setCourse("");
    }
    return (  
        <>
        {students.map((item)=>(
            <h1>{item.name}-{item.course}</h1>
        ))}
        <input type="text" value={name} onChange={changename}/>
        <input type="text" value={course} onChange={changecourse}/>
        <button onClick={add}>add</button>
        </>
    );
}

export default Hero2;