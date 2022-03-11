import { useState } from "react";
import { Navigate} from "react-router-dom";


function Register() {
    const [id , setId] =useState("");
    const [password , setPassword] =useState("");
    const [email , setEmail] =useState("");
    const [redirct,setRedirct] = useState(false);
    
    const submit = async (e) =>{
        e.preventDefault();
       const json = await fetch('http://localhost:8081/api/signup',{
        method:'POST',
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify({
        id,email,password
        })
      });
      if(json.status===200){
      setRedirct(true);
      }

    }
    if (redirct){
        return <Navigate to="/signin" />;
    }

    return(
        <div>
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <input type="id" className="form-control"  placeholder="ID"
            onChange={e => setId(e.target.value)}
            />
        <input type="email" className="form-control"  placeholder="email"
            onChange={e => setEmail(e.target.value)}
            />

        <input type="password" className="form-control"  placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            />
  
       <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
    </form>
    <h1>Do not write your real email !!</h1>
    <h5>This page is for studying Go and React</h5>
    <h5>You can't expect professional security !</h5>

    </div>
    );
}

export default Register;