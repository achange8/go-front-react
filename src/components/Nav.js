import {Link} from "react-router-dom" 
function Nav({user}){
  const logout = async()=> {
      await fetch('http://localhost:8081/api/signout',{
      headers:{'Content-type': 'application/json'},
      credentials : 'include',
  });
  window.location.href ='/';
}

  let menu;
  if (user===""){
    menu=(
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link to="/signin"className="nav-link active" aria-current="page" >signin</Link>
          </li>
          <li className="nav-item">
           <Link to= "/register" className="nav-link active" aria-current="page">Join</Link>
          </li>
        </ul>
    );
  }else{
    menu=(

        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <h4 className="nav-link active" aria-current="page">{user}</h4>
          </li>
          <li className="nav-item">
           <Link to= "/" className="nav-link active" aria-current="page" onClick={logout}>logOut</Link>
          </li>
        </ul>

    )
  }

    return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >Home</Link>
    </div>
    <div>
      {menu}
    </div>
      
  </nav>
  );
}

export default Nav;