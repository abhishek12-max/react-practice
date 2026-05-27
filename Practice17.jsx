import { useState } from "react";

function Practice17() {
    const[form,setForm]=useState({
          name:"",
         course:""
      })
     const[students,setStudents]=useState([]);
      
      function changehandle(e){
       
        setForm({
            ...form,
            [e.target.name]:e.target.value
        }) 
      }

      function add(){
        setStudents([
            ...students,
            form
        ])
         
         setForm({
            name:"",
            course:""
         })
      }

      

    return ( 
        <>
        <div>
        <input name="name" value={form.name} style={{margin:"10px"}} placeholder="Enter Name" onChange={changehandle}/> 
        <input name="course" value={form.course} placeholder="Enter Course" onChange={changehandle}/>    <button onClick={add}>Add</button>
        
        {students.map((item)=>(
            <>
            <h1>{item.name}-{item.course}</h1>
            </>
        ))}
        </div>
        </>
     );
}

export default Practice17;