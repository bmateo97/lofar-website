import { useContext } from "react";
import Link from "next/link";
import Context from "@/Utils/context";

const Header = () => {
  const { usuario } = useContext(Context);

  return (
    <nav className="menu">
      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <Link href="/home"> HOME</Link>
          </div>
        </div>
      </nav>

      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <a>Joyas</a>
            <ul>
              <Link href="/productos"> Todos los productos</Link>
              <Link href="/anillos"> Anillos </Link>
              <Link href="/aretes"> Aretes </Link>
              <Link href="/cadenas"> Cadenas </Link>
              <Link href="/juegos"> Juegos de Plata</Link>
            </ul>
          </div>
        </div>
      </nav>

      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <a> BISUTERIA</a>
            <ul>
              <Link href="bisuteria-anillos">Anillos</Link>
              <Link href="bisuteria-pulseras">Pulseras</Link>
            </ul>
          </div>
        </div>
      </nav>
      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <Link href="/contacto"> CONTACTO</Link>
          </div>
        </div>
      </nav>
      {usuario && usuario.rol == "admin" && (
        <nav id="desplegable">
          <div className="row justify-content-center">
            <div>
              <Link href="/subir"> Subir</Link>
            </div>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Header;
