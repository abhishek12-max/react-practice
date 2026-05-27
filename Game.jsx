function Game() {
    function showGame(games){
        alert(games);
    }
    return ( 
        <>
        <div>
            <button style={{margin:"20px"}} onClick={()=>showGame("Cricket")}>Cricket</button>
            <button style={{margin:"20px"}} onClick={()=>showGame("Football")}>Football</button>
            <button style={{margin:"20px"}} onClick={()=>showGame("Tennis")}>Tennis</button>
        </div>
        </>
     );
}

export default Game;