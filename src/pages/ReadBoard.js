import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ReadBoard ({user}) {
    const [board,setboard] = useState([]);
    const {id} = useParams();
    const getboard = async()=> {
    const response = await fetch(`http://localhost:8081/view/?id=${id}`)
    const json = await response.json()
    setboard(json);
    }
    useEffect (()=>{
        getboard();
    },[]);

    return (<div>

        {board.TITLE}


    </div>);
}

export default ReadBoard;
