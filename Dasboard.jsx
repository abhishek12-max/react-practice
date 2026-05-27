function Dashboad() {
   function profile(name){
       alert(name);
   }
   function marks(name){
       alert(name);
   }
   function attendence(name){
       alert(name);
   }
    return (
        <>
        <h1>Student Dashboard</h1>
        <button onClick={()=>profile("profile Opened")}>profile</button>
        <button onClick={()=>marks("marks Opened")}>Marks</button>
        <button onClick={()=>attendence("attendance Opened")}>Attendance</button>
        </>
      );
}

export default Dashboad;