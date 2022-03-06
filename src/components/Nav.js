import {Link} from "react-router-dom"
function Nav(user){
  let menu;
  if (user===""){
    
  }

    return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >Home</Link>
    </div>
  
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link to="/signin"className="nav-link active" aria-current="page" >signin</Link>
          </li>
          <li className="nav-item">
           <Link to= "/register" className="nav-link active" aria-current="page">Join</Link>
          </li>
        </ul>
    </div>
  </nav>
  );
}

export default Nav;