import { useState } from "react";

function Practice13() {
    const[task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);

    function changehandle(e){
        setTask(e.target.value);
    }


    function addtask(){
        setTasks([
            ...tasks,
            task
        ])
        setTask("");
    }

    function del(name){
          setTasks(tasks.filter((item)=>(
             item!==name
          )));
    }

    function edit(oldname){
        let newtask = prompt("Enter new task");
        setTasks(
            tasks.map((item)=>(
                item===oldname? newtask:item
            ))
        )
    }

    return ( 
        <div>
            {tasks.map((item,index)=>(
                <span key={index}>{item}<button style={{margin:"8px"}} onClick={()=>del(item)}>Delete</button>
                  <button style={{margin:"8px"}} onClick={()=>edit(item)}>Edit</button></span> 
            ))}
            <br></br>
            <input type="text" value={task} placeholder="Enter your task" onChange={changehandle}/>
            <button onClick={addtask}>Add task</button>
        </div>
     );
}

export default Practice13;