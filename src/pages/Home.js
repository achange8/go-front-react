import { useEffect, useState } from "react";

function Home() {
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
        <div> {loading ? (<h1>loading...</h1>) : (
             <div>
                 {board.map((board)=>(
                 <Board
                    key={board.NUM}
                    TITLE={board.TITLE}
                    WRITER={board.WRITER}
                    HITCOUNT={board.HITCOUNT}
                    CreactAt={Board.CreactAt}
                 />
                 ))}
            </div>

            )}
        </div>
    )
}

export default Home;