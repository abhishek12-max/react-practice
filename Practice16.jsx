import { useState } from "react";

function Practice16() {
  const[employees,setEmployees]=useState([
{
  name:"Aman",
  department:"HR"
},

{
  name:"Teena",
  department:"IT"
}
]);


    function del(olddepartment){
        setEmployees(
            employees.filter((item)=>(
                item.department!==olddepartment
            ))
        )
    }

    function edit(oldname){
       let newname=prompt("enter your name")

       if(newname===null|| newname.trim()===""){
           return;
       }

       setEmployees(
        employees.map((item)=>(
            item.name===oldname?{...item,name:newname}:item
        ))
       )

    }

    return ( 
        <>
        {employees.map((item,index)=>(
            <div key={index}>
                <h1>{item.name} - {item.department}</h1> 
                <button onClick={()=>edit(item.name)}>Edit</button>
                <button onClick={()=>del(item.department)}>Delete</button>
            </div>
        ))}
        </>
     );
}

export default Practice16;