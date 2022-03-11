import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


function ModifyBoard() {
    const [lastBoard , setlastBoard] =useState([]);
    const {id} = useParams();
    const getboard = async()=> {
        const response = await fetch(`http://localhost:8081/view/?id=${id}`)
        const json = await response.json()
        setTITLE(json.TITLE);
        setCONTENT(json.CONTENT);
    }
    useEffect(()=>getboard(),[]);
    const [TITLE , setTITLE] =useState("");
    const [CONTENT , setCONTENT] =useState("");
    const submit = async (e) =>{
        e.preventDefault();
        const json = await fetch(`http://localhost:8081/modify/?id=${id}`,{
            method:'POST',
            headers:{'Content-type': 'application/json'},
            credentials : 'include',
            body: JSON.stringify({
            TITLE, CONTENT})
            }); 
        if(json.status===200){
            alert('done')
            window.location.href ='/'  
        }else{
        alert('failed')
        } 
    }
    return (
        <div>
            <form onSubmit={submit}>
            <input type="text" name="TITLE" value={TITLE} onChange={e => setTITLE(e.target.value)}/><br/>
            <textarea name="CONTENT" value={CONTENT} cols={50} rows={20} onChange={e => setCONTENT(e.target.value)}></textarea>
            <button type="submit">update</button>

            </form>
        </div>
    )
}

export default ModifyBoard;