function Trainer({trainername}) {
    function showtrainer(){
        alert(`trainer Name : ${trainername}`)
    }
    return ( 
        <>
        
         <button onClick={()=>showtrainer(trainername)}>Show Trainer</button>
        </>
     );
}

export default Trainer;