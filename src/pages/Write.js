import {  useState } from "react";


function WriteBoard() {
    const [TITLE , setTITLE] =useState("");
    const [CONTENT , setCONTENT] =useState("");
    const submit = async (e) =>{
        e.preventDefault();
        const json = await fetch('http://localhost:8081/board/write',{
            method:'POST',
            headers:{'Content-type': 'application/json'},
            credentials : 'include',
            body: JSON.stringify({
            TITLE, CONTENT
        })
    });  
    }


    return (
        <div>
            <form onSubmit={submit}>
            <input type="text" name="TITLE" placeholder="title" onChange={e => setTITLE(e.target.value)}/><br/>
            <textarea name="CONTENT" placeholder="content" cols={50} rows={20} onChange={e => setCONTENT(e.target.value)}></textarea>
            <button type="submit">Write</button>

            </form>
        </div>
    )
}

export default WriteBoard;