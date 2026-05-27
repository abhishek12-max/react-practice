import { useState } from "react";

function Practice18() {
    const[form,setForm]=useState({
        name:"",
        department:""
    })

    const[employees,setEmployees]=useState([]);

    function changehandle(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }


    function add(){

        if(form.name.trim()===""||form.department.trim()===""){
            return alert("input field are empty");
        }
        
        setEmployees([
            ...employees,
            form
        ])

        setForm({
            name:"",
            department:""
        })

    }

    function del(indexvalue){
        setEmployees(
            employees.filter((item,index)=>(
                index!==indexvalue
            ))
        )
    }


    function edit(department){
        let newdepartment= prompt("enter Department");
        if(newdepartment===null||newdepartment.trim()===""){
            return 
        }

        setEmployees(
            employees.map((item)=>(
                item.department===department?{...item,department:newdepartment}:item
            ))
        )

    }
    


    return (  
        <div>
         <input type="text" name="name" placeholder="Enter Name" style={{padding:"10px", margin:"14px",backgroundColor:"lightgrey",border:"none"}} onChange={changehandle} value={form.name}/>
         <input type="text" name="department" placeholder="Enter department" style={{padding:"10px", backgroundColor:"lightgrey", border:"none"}} onChange={changehandle} value={form.department}/>
         <button onClick={add} style={{margin:"10px",padding:"10px",backgroundColor:"lightblue",border:"none"}}>ADD</button>

         {employees.map((item,index)=>(
            <div key={index}>
               <h1>{index+1}. {item.name} - {item.department}</h1> <button onClick={()=>del(index)}>Delete</button> <button onClick={()=>edit(item.department)}>Edit</button>
            </div>
         ))}     
         
    
        </div>
       
    );
}

export default Practice18;