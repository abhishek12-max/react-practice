function Teacher({teachername}) {
    function showteacher(teachername){
        alert(`Teacher Name : ${teachername}`)
        

    }

    return ( 
        <>
        <button onClick={()=>showteacher(teachername)}>Show teacher</button>
        </>
     );
}

export default Teacher;