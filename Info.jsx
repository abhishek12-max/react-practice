function Info() {
    function studentinfo(name,age){
        alert(name+""+age);
    }
    return (
        <div>
            <button style={{margin:"20px"}} onClick={()=>studentinfo("Abhishek",25)}>Abhishek</button>
            <button style={{margin:"20px"}} onClick={()=>studentinfo("Rahul",25)}>Rahul</button>
            <button style={{margin:"20px"}} onClick={()=>studentinfo("Teena",23)}>Teena</button>
        </div>
      );
}

export default Info;