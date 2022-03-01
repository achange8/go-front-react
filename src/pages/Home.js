import { useEffect, useState } from "react";
import Board from "./Board";

function Home() {
    const [loading,setloading] = useState(true);
    const [board,setboard] = useState([]); 
    const getboard= async() =>{
        const response = await fetch('http://localhost:8081/');
        const json = await response.json();
        setloading(false);
        setboard(json);
        console.log(json);
    };
    useEffect(()=> {
        getboard();
    },[]);

    return(
        <div> {loading ? (<h1>loading...</h1>) : (
             <div>
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
    )
}

export default Home;