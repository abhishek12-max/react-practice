import { useState } from "react";

function Todoapp() {

   const[form,setForm]=useState({
      task:"",
      complete:false
   })

   const[todos,setTodos]=useState([])

   const[editindex,seteditindex]=useState(null)

   function changehandle(e){

      setForm({
         ...form,
         [e.target.name]:e.target.value
      })

   }

   function add(){

      if(form.task.trim()===""){
         return;
      }

      setTodos([
         ...todos,
         form
      ])

      setForm({
         task:"",
         complete:false
      })

   }

   function del(indexvalue){

      setTodos(
         todos.filter((item,index)=>(
            index!==indexvalue
         ))
      )

   }

   function startedit(item,index){

      setForm(item)

      seteditindex(index)

   }

   function update(){

      setTodos(

         todos.map((item,index)=>(

            index===editindex

            ? form

            : item

         ))

      )

      seteditindex(null)

      setForm({
         task:"",
         complete:false
      })

   }

   function complete(indexvalue){

      setTodos(

         todos.map((item,index)=>(

            index===indexvalue

            ? {...item,complete:true}

            : item

         ))

      )

   }

   return (
      <>
       
  <div
    style={{
      width: "400px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px"
    }}
  >
    <h1 style={{ textAlign: "center" }}>
      Todo App
    </h1>
     <h3>
        Total Tasks: {todos.length}
      </h3>
      <h3>
   Completed Tasks: {

      todos.filter((item)=>(

         item.complete

      )).length

   }
</h3>

<h3>
   Pending Tasks: {

      todos.filter((item)=>(

         !item.complete

      )).length

   }
</h3>
    <input
      name="task"
      value={form.task}
      placeholder="Enter Task"
      onChange={changehandle}
      style={{
        padding: "10px",
        width: "70%",
        marginRight: "10px"
      }}
    />

    <button
      onClick={add}
      style={{
        padding: "10px"
      }}
    >
      ADD
    </button>

    {
      editindex !== null &&

      <button
        onClick={update}
        style={{
          padding: "10px",
          marginLeft: "10px"
        }}
      >
        UPDATE
      </button>
    }

    <div style={{ marginTop: "20px" }}>

      {
        todos.map((item,index)=>(

          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px"
            }}
          >

            <h2
              style={{
                textDecoration:
                item.complete
                ? "line-through"
                : "none"
              }}
            >
              {index+1}. {item.task}
            </h2>

            <h3>
              {
                item.complete
                ? "Completed"
                : "Pending"
              }
            </h3>

            <button
              onClick={()=>del(index)}
              style={{
                marginRight: "10px"
              }}
            >
              Delete
            </button>

            <button
              onClick={()=>startedit(item,index)}
              style={{
                marginRight: "10px"
              }}
            >
              Edit
            </button>

            {
              !item.complete &&

              <button
                onClick={()=>complete(index)}
              >
                Complete
              </button>
            }

          </div>

        ))
      }

    </div>

  </div>

      </>
   );
}

export default Todoapp;