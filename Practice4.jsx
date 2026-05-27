import { useState } from "react";
function Practice4() {
    const [students,setStudents]=useState([
"Abhishek",
"Teena",
"Rahul",
"Aman"
]);

function totalstudent(){
   let abhi= students.length;
   console.log(abhi);
}
    return (  
        <>
        <div>
         <h1>Student list</h1>
         <h1>{students[0]}</h1>
         <h1>{students[1]}</h1>
         <h1>{students[2]}</h1>
         <h1>{students[3]}</h1>
         
         <button onClick={totalstudent}>Click</button>
        </div>
        </>
    );
}

export default Practice4;