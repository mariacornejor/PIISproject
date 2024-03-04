import icon from "../../assets/images/icono.png";
import nosesion from "../../assets/images/noSesion.png";

function Navbar() {
  return (
    <nav className="sticky">
      <div className="nav-inner">
        <div className="icono">
          <img className="logo" src={icon} />
          <h1>Bat Bite Battleground</h1>
        </div>
        <div className="elemento-nav">
          <button>...</button>
        </div>
        <div className="elemento-nav">
          <input type="text" />
        </div>

        <div className="links">
          <div className="elemento-nav">
            <a href="#">Informacion</a>
          </div>
          <div className="elemento-nav">
            <img className="logo" src={nosesion} />
            <a href="#">Iniciar Sesion</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
