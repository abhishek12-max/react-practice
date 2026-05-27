import { useState } from "react";
function Practice19() {
     const[form,setForm]=useState({
            name:"",
            department:""
        })
    
        const[employees,setEmployees]=useState([]);
        const[editindex,seteditindex]=useState(null);
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

      function startedit(item,index){
          setForm(item);
          seteditindex(index);
      }

      function update(){
        setEmployees(
            employees.map((item,index)=>(
                index===editindex?form:item
            ))
        )
       seteditindex(null)
        setForm({
            name:"",
            department:""
        })

      }

    return ( 
        <>
         <div>
         <input type="text" name="name" placeholder="Enter Name" style={{padding:"10px", margin:"14px",backgroundColor:"lightgrey",border:"none"}} onChange={changehandle} value={form.name}/>
         <input type="text" name="department" placeholder="Enter department" style={{padding:"10px", backgroundColor:"lightgrey", border:"none"}} onChange={changehandle} value={form.department}/>
         <button onClick={add} style={{margin:"10px",padding:"10px",backgroundColor:"lightblue",border:"none"}}>ADD</button>
         {editindex!==null&&
         <button onClick={update}>Update</button>}

         {employees.map((item,index)=>(
            <div key={index}>
               <h1>{index+1}. {item.name} - {item.department}</h1> <button onClick={()=>del(index)}>Delete</button> <button onClick={()=>startedit(item,index)}>Edit</button>
            </div>
         ))}     
         
    
        </div>
        </>
     );
}

export default Practice19;