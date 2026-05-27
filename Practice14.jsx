import { useState } from "react";
function Practice14() {
    const[product,setProduct]=useState("");
const[products,setProducts]=useState([]);

   function changeable(e){
     setProduct(e.target.value);
   }

   function add(){
     
       if(product.trim()===""){
           return;
       }

       setProducts([
        ...products,
          product
       ])

       setProduct("")

   }

     function edit(oldproduct){
         let new_product= prompt("Enter your product");
          
   if(
      new_product===null ||
      new_product.trim()===""
   ){
      return;
   }

          setProducts(products.map((item)=>(
             item===oldproduct?new_product:item
          )));
     }

     function del(name){
         setProducts(products.filter((item)=>(
            item!==name
         )));
     }
    return ( 
        <>
        <h1>Total_products:{products.length}</h1>
        <input type="text" placeholder="enter product" value={product} onChange={changeable}/>
        <button onClick={add}>Add-item</button>
         {products.map((item,index)=>(
           <div key={index}>
            <h1>{index+1}. {item}</h1><button onClick={()=>edit(item)}>Edit</button> <button onClick={()=>del(item)}>Delete</button>
           </div>
        ))}
        </>
     );
}

export default Practice14;