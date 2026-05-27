import { useState } from "react";

function Shiv() {
    const[profile,setprofile]=useState(false);
    function showprofile(){
        setprofile(!profile);
    }
    return ( 
        <div style={{border:"5px solid",padding:"10px",textAlign:"center"}}>
         <button onClick={showprofile}>Show_Profile</button>
         {profile&& <><h1>Name: abhishek</h1> 
                    <h1>course: MCA</h1> </>
           }
        </div>
     );
}

export default Shiv;