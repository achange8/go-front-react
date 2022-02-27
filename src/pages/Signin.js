import { useState } from "react";
import { Navigate} from "react-router-dom";


function Signin() {
    const [id , setId] =useState("");
    const [password , setPassword] =useState("");
    const [redirct,setRedirct] = useState(false);
    
    const submit = async (e) =>{
        e.preventDefault();
        const json = await fetch('http://localhost:8081/api/signin',{
            method:'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify({
            id,password
        })
    });
    if (json.status ===200){
        setRedirct(true);
    }
    if (redirct){
        return <Navigate to="/" />;
    }
    }

    return (
    <div>
     <form onSubmit={submit}>
         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

         <input type="id" className="form-control" id="floatingInput" placeholder="ID"
         onChange={e => setId(e.target.value)}/>

         <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
         onChange={e => setPassword(e.target.value)}/>
   
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
     </form>
    </div>
    );
}

export default Signin;