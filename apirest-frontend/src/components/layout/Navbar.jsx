import { Link } from "react-router-dom";
import "./Navbar.css"; // Opcional: para estilização
import Logo from "../../assets/images/logoipsum2.png";

function Navbar() {
  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logoimg" title="logoimg" />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/">Listagem</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
