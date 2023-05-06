import React, {useContext} from 'react';
import UserContext from '../Context/UserContext';

export default function Navbar(props) {
  const a = useContext(UserContext);

  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode==="light"?"dark":"light"}`} >
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode}`} href="/">dasApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode}`} href="/">Link</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode}`}>
  <input className="form-check-input" onClick={props.funfun} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
      
    </div>
  )
}
