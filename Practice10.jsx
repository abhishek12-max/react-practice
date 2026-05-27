import { useState } from "react";
function Practice10() {
    const [students,setStudents]=useState([
"Abhishek",
"Teena",
"Rahul",
"Aman"
]);


   function hello(item){
        alert(`hello ${item}`);
   }

   function deleted(name){
        setStudents(
            students.filter((item)=>(
                item!==name
            ))
        );
   }
    return (  
        <>
        <div>
         <h1>Student list</h1>
          {students.map((item,index)=>(
            <div key={index}>
             <h1 >{item}</h1> <button onClick={()=>deleted(item)}>delete</button>
             <button onClick={()=>hello(item)}>Say Hello</button>
             </div>
             
          ))}
        
        </div>
        </>
    );
}

export default Practice10;