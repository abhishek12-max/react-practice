import { useState } from "react";

function Formupdate() {
    const[form,setForm]=useState({
        name:"",
        course:""
    })
    const[students,setStudents]=useState([]);
    const[editindex,seteditindex]=useState(null);



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
    }

    function startedit(item,index){
          setForm(item)
          seteditindex(index)
    }


    function update(){
        setStudents(
            students.map((item,index)=>(
                index===editindex?form:item
            ))
        )

        setForm({
            name:"",
            course:""
        })

    }

    return ( 
        <>
        <div>
        <input name="name" value={form.name} onChange={changehandle}/>
        <input name="course" value={form.course} onChange={changehandle}/>
        <button onClick={add}>ADD</button>
        {editindex!==null&&<button onClick={update}>Update</button>}

        </div>
         {students.map((item,index)=>(
            <div key={index}>
                <h1>{index+1}.  {item.name} - {item.course}</h1> <button onClick={()=>startedit(item,index)}>EDIT</button>
            </div>
        ))}
        
       
        </>
     );
}

export default Formupdate;