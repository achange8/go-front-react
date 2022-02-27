import { useEffect, useState } from "react";

function Home() {
    const [loading,setloading] = useState(true);
    const [board,setboard] = useState([]); 
    const getboard= async() =>{
        const response = await fetch('http://localhost:8081/');
        const json = await response.json();
        setloading(false);
        console.log(json);
    };
    useEffect(()=> {
        getboard();
    },[]);
    return(
        <div> {loading ? <h1>loading...</h1> : <h1>done</h1>}</div>
    )
}

export default Home;