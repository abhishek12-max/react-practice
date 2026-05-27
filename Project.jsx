import { useState } from "react";

function Project() {
    const[form,setform]=useState({
        name:"",
        age:"",
        city:""
    })
    const[student,setStudents]=useState([]);
    const[editindex,seteditindex]=useState(null);

   function changehandle(e){
       setform({
        ...form,
        [e.target.name]:e.target.value
       })
   }
    
   function add(){
      if(form.name.trim()===""|| form.age.trim()===""||form.city.trim()===""){
          return;
      }
     
      setStudents([
        ...student,
        form
      ])
  
      setform({
        name:"",
        age:"",
        city:""
      })


   }

   function del(indexvalue){
       setStudents(
        student.filter((item,index)=>(
            index!==indexvalue
        ))
       )
   }



   function startedit(item,index){
      setform(item);
      seteditindex(index)
   }

   function update(){
      setStudents(
        student.map((item,index)=>(
             index===editindex?form:item
        ))
      )
      setform({
        name:"",
        age:"",
        city:""
      })
   }



    return ( 
        <div>
          <input name="name" value={form.name} placeholder="Name" onChange={changehandle}/>
          <input name="age" value={form.age} placeholder="Age" onChange={changehandle}/>
          <input name="city" value={form.city} placeholder="City" onChange={changehandle}/>
          <button onClick={add}>ADD</button>
          {editindex!==null &&<button onClick={update}>update</button>}
          {student.map((item,index)=>(
            <div key={index}>
                <h1>{index+1}. {item.name} - {item.age} - {item.city}</h1> <button onClick={()=>startedit(item,index)}>Edit</button> <button onClick={()=>del(index)}>Delete</button>
            </div>
        ))}
        </div>
        
     );
}

export default Project;