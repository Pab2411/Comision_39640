import CartWidget from "../CartWidget/CartWidjet"
import LogoBeatrice from "./LogoBeatrice"

const NavBar = ()=> {
   return (
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><LogoBeatrice /></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Facial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Corporal</a>
        </li>
      <li className="nav-item">
         <a className="nav-link disabled">Bienestar</a>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>
    )
}

export default NavBar