import { useEffect, useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {
  const [user,setUser] = useState("");
  const getuser = async() =>{
        const response = await fetch('http://localhost:8081/user/check',
        {headers:{'Content-type': 'application/json'},
        credentials : 'include',
      });
      const content = await response.json();
      if (response.status===200){
      setUser(content)}
      };

  useEffect(()=>{getuser()},[]);
      console.log(user)

  return (
    <div className="App">
     <BrowserRouter>
      <Nav user={user}/>
    <main className="form-signin">
     <Routes>
     <Route path="/" element={<Home user={user}/>} />
     <Route path="/signin" element={<Signin/>} />
     <Route path="/register" element={<Register/>} />
     </Routes>
    </main>
     </BrowserRouter>
</div>
  );
}

export default App;