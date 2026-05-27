import { useState } from "react";

function Hero() {
    const[students,setStudents]=useState([
        {name:"Abhishek",role:"Batsman"},
        {name:"Dhoni",role:"wicketkeeper"},
        {name:"Hardik",role:"Allrounder"}
    ]);

    function del(name){
         setStudents((
            students.filter((item)=>(
                item.name!==name
            ))
         ));
    }

    return ( 
        <>
        {students.map((item,index)=>(
            <div key={index}>
         <h1> {item.name}- {item.role}</h1> <button onClick={()=>del(item.name)}>Delete</button>
         </div>
          
        ))}
        </>
     );
}

export default Hero;



