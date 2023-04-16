
import CartWidget from "../CartWidget/CartWidjet"
import LogoBeatrice from "./LogoBeatrice"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' >
          <a className="navbar-brand" ><LogoBeatrice /></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/facial`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Facial</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/corporal`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Corporal</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/bienestar`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Bienestar</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar