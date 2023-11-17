import { useContext } from "react";
import Link from "next/link";
import Context from "@/Utils/context";
const { useRouter } = require("next/router");

const Header = () => {
  const router = useRouter();
  const { carrito, usuario, setUsuario } = useContext(Context);

  const logOut = () => {
    setUsuario(null);
    sessionStorage.removeItem("user");
    router.push("/");
  };

  return (
    <nav className="menu">
      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <Link href="/">Inicio</Link>
          </div>
        </div>
      </nav>

      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <a>Joyas</a>
            <ul>
              <Link href="/productos">Todos los productos</Link>
              <Link href="/anillos">Anillos </Link>
              <Link href="/aretes">Aretes </Link>
              <Link href="/cadenas">Cadenas </Link>
              <Link href="/juegos">Juegos de Plata</Link>
            </ul>
          </div>
        </div>
      </nav>

      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <a>BISUTERIA</a>
            <ul>
              <Link href="/bisuteria-anillos">Anillos</Link>
              <Link href="/bisuteria-pulseras">Pulseras</Link>
            </ul>
          </div>
        </div>
      </nav>
      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <Link href="/contacto">CONTACTO</Link>
          </div>
        </div>
      </nav>
      {usuario && usuario.rol == "admin" && (
        <>
          <nav id="desplegable">
            <div className="row justify-content-center">
              <div>
                <Link href="/subir">Subir</Link>
              </div>
            </div>
          </nav>
          <nav id="desplegable">
            <div className="row justify-content-center">
              <div>
                <Link href="/eliminar">Editar</Link>
              </div>
            </div>
          </nav>
        </>
      )}

      {!usuario && (
        <nav id="desplegable">
          <div className="row justify-content-center">
            <div>
              <Link href="/ingresar">Ingresar</Link>
            </div>
          </div>
        </nav>
      )}

      <nav id="desplegable">
        <div className="d-flex align-items-center">
          <Link href="/carrito">Carrito</Link>
          <div className="badge rounded-circle badge-danger">
            {carrito.length}
          </div>
        </div>
      </nav>

      <div className="px-3 ml-5 d-flex align-items-center" onClick={logOut}>
        {/* logout svg */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          className="bi bi-box-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
