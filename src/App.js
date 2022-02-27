import { BrowserRouter, Route,Routes } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Nav/>
    <main className="form-signin">
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/signin" element={<Signin/>} />
     <Route path="/register" element={<Register/>} />
     </Routes>
    </main>
     </BrowserRouter>
</div>
  );
}

export default App;