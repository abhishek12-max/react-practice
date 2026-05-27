import Teacher from "./Teacher";

function StudentCard({name,course,age,teachername}) {

    function studentInfo(name,course, age){
         alert(`${name} - ${course} - ${age}`);
    }
    return (  
        <div style={{border:"6px solid black" ,margin:"4px", padding:"8px" ,textAlign:"center"}}>
          
            <h1>Name:{name}</h1>
            <h1>Course:{course}</h1>
            <h1>Age:{age}</h1>
            <button onClick={()=>studentInfo(name,course,age)}>Show Info</button>
            <Teacher teachername={teachername}/>
        </div>
    );
}

export default StudentCard;