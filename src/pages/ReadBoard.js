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
    const deleteclick = async()=> {
    const json =await fetch(`http://localhost:8081/modify/?id=${id}`,{
        method:'DELETE',
        headers:{'Content-type': 'application/json'},
        credentials : 'include'})
        if (json.status === 200 ){
            return window.location.href ='/'
        }
        }
     
    let option ;
    if(user===board.WRITER){
        option=(
            <div>
            <button>modify</button>
            <button onClick={deleteclick}>delete</button>
            </div>
        );
    }else{
        <div></div>
    }

    return (
    <div>
    <div className='border'>
        <div>title : {board.TITLE}</div>
        <div>writer : {board.WRITER}</div>
        {board.CreatedAt}

        <p className='border'> content :
            {board.CONTENT}
        </p>
    </div>
    {option}
    </div>
    );
}

export default ReadBoard;
