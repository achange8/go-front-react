import { useEffect, useState } from "react";
import Board from "./Board";

function Home({user}) {
    let option ;
    if(user!==""){
        option=(
        <button onClick={onClick}>Write</button>
        )}else{
            option=(<h3>Only logged in users can write</h3>)
        }
    
    function onClick(){
        return window.location.href ='/write'
    }
    const [loading,setloading] = useState(true);
    const [board,setboard] = useState([]); 
    const getboard= async() =>{
        const response = await fetch('http://localhost:8081/');
        const json = await response.json();
        setloading(false);
        setboard(json);
    };
    useEffect(()=> {
        getboard();
    },[]);

    return(

        <div>
        <div> {loading ? (<h1>loading...</h1>) : (
             <div className="border">
                 {board.map((board)=>(
                 <Board
                    key={board.NUM}
                    NUM={board.NUM}
                    TITLE={board.TITLE}
                    WRITER={board.WRITER}
                    HITCOUNT={board.HiTCOUNT}
                    CreactAt={board.CreatedAt}
                 />
                 ))}
            </div>

            )}
        </div>
        {option}
        </div>
        
    )
}

export default Home;