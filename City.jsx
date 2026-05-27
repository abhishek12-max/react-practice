function City() {
    function showCity(name){
         alert(name)
    }
    return ( 
        <>
        <button onClick={()=>showCity("Delhi")}>Delhi</button>
        <button  onClick={()=>showCity("Dehradun")}>Dehradun</button>
        <button  onClick={()=>showCity("Mumbai")}>Mumbai</button>
        </>
     );
}

export default City;