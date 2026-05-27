import Trainer from "./Trainer";

function Coursecard({coursename,duration,trainername}) {
    return (  
        <>
        
        <div>
         <h1>Course:{coursename}</h1>
         <h1>Duration:{duration}</h1>
        <Trainer trainername={trainername}/>
        </div>
        </>
    );
}

export default Coursecard;