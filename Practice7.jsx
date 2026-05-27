import { useState } from "react";

function Practice7() {
    const[movies,setMovies]=useState(["KGF","Sultan"]);

     function addpushpa(){
       setMovies([
            ...movies,
            "Pushpa"
         ]); 
     }
     function addAnimal(){
       setMovies([
            ...movies,
            "Animal"
         ]); 
     }
     function remove(){
        setMovies(movies.slice(0,-1));
     }

    return ( 
        <>
        <div>
          {movies[0]&&<h1>{movies[0]}</h1>}
          {movies[1]&&<h1>{movies[1]}</h1>}
          {movies[2]&&<h1>{movies[2]}</h1>}
         {movies[3]&&<h1>{movies[3]}</h1>}
          <button onClick={addAnimal}>Add-Animal</button>
          <button onClick={addpushpa}>Add-Pushpa</button>
          <button onClick={remove}>remove-last-movie</button>
        </div>
        </>
     );
}

export default Practice7;