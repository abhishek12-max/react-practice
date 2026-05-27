import { useState } from "react";

function Studentform() {

    const[form,setForm]=useState({
        name:"",
        course:"",
        city:""
    })

    const[students,setStudents]=useState([]);  // student array ko store krne ke liye
    const[editindex,seteditindex]=useState(null); // update krne ke liye index ko leke

    function changehandle(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    function save(){
        if(form.name.trim()===""|| form.course.trim()===""||form.city.trim()===""){
            return;
        }

        if(editindex===null){
            setStudents([
                ...students,
                form
            ])
        } else{
            
            setStudents(
                students.map((item,index)=>(
                    index===editindex? form:item
                ))
            )
            
            seteditindex(null);
        }
        setForm({
            name:"",
            course:"",
            city:""
        })
    }

    function starteditindex(item,index){
         setForm(item);
         seteditindex(index)
    }


    return ( 
        <>
        <div style={{margin:"10px"}}>
           <input name="name" value={form.name} placeholder="Enter Name" style={{margin:"10px"}} onChange={changehandle}/>
          <input name="course" value={form.course} placeholder="Enter Course" style={{margin:"10px"}} onChange={changehandle}/>
          <input name="city" value={form.city} placeholder="Enter City" onChange={changehandle}/>
          <button style={{margin:"10px"}} onClick={save}>ADD</button>
        </div>

        {students.map((item,index)=>(
            <div key={index}>
        <h1>{index+1}. {item.name}-{item.course}- {item.city}</h1> <button>Delete</button> <button onClick={()=>starteditindex(item,index)}>Edit</button>
            </div>
        ))}
       
        </>
     );
}

export default Studentform;