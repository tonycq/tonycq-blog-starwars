import { Link } from 'react-router-dom';
import logo from '../assets/star-wars.png'
import '../styles/App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="navbar-logo" alt="Logo" style={{ width: '50px', height: 'auto' }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/people">Personas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">Vehiculos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets">Planetas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favoritos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
