import { useState } from "react";

function Mini_project5() {
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
            {name:name,course:course}
        ])
        setName("");
        setCourse("");
    }

    function edit(name){
       
        let newname= prompt("enter your name")

        setStudents(
            students.map((item)=>(
                item.name===name? {...item,name:newname}:item
            ))
        )
       
    }

    function del(name){
       setStudents(
        students.filter((item)=>(
            item.name!==name
        ))
       )
    }

    return ( 
        <>
        <input type="text" value={name} placeholder="Enter your name" style={{margin:"10px"}} onChange={changename}/>
        <input type="text" value={course} placeholder="Enter your Course" onChange={changecourse}/>
        <button style={{margin:"10px"}} onClick={add}>ADD</button>
        {students.map((item,index)=>(
            <div key={index}>
                <h1>{item.name} - {item.course}</h1> <button onClick={()=>edit(item.name)}>Edit</button> <button onClick={()=>del(item.name)}>Delete</button>
            </div>
        ))}
        </>
     );
}

export default Mini_project5;