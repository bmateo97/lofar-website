import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Context from "@/Utils/context";
const { useRouter } = require("next/router");

const Header = () => {
  const router = useRouter();
  const { imagenes, carrito, usuario, setUsuario } = useContext(Context);

  const logOut = () => {
    setUsuario(null);
    sessionStorage.removeItem("user");
    router.push("/");
  };

  return (
    <nav className="menu">
      <nav id="desplegable">
        <Link href="/">Inicio</Link>
      </nav>

      <nav id="desplegable">
        <div>
          <a>Joyas</a>
          <ul className="d-flex">
            <div>
              <Link href="/productos">Todos los productos</Link>
              <Link href="/anillos">Anillos </Link>
              <Link href="/aretes">Aretes </Link>
              <Link href="/cadenas">Cadenas </Link>
              <Link href="/juegos">Juegos de Plata</Link>
              <Link href="/promociones">Promociones</Link>
            </div>
            <Image
              src={
                imagenes[Math.floor(Math.random() * (imagenes.length - 1))]?.blob
              }
              height="500"
              width="500"
              alt="Imagen Destacada"
            />
          </ul>
        </div>
      </nav>

      <nav id="desplegable">
        <div className="">
          <a>BISUTERIA</a>
          <ul className="d-flex">
            <div>
              <Link href="/bisuteria-anillos">Anillos</Link>
              <Link href="/bisuteria-pulseras">Pulseras</Link>
            </div>
            <Image
              src={
                imagenes[Math.floor(Math.random() * (imagenes.length - 1))]?.blob
              }
              height="500"
              width="500"
              alt="Imagen Destacada"
            />
          </ul>
        </div>
      </nav>
      <nav id="desplegable">
        <Link href="/contacto">CONTACTO</Link>
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
            <Link href="/eliminar">Editar</Link>
          </nav>
          <nav id="desplegable">
            <Link href="/historial">Historial</Link>
          </nav>
          <nav id="desplegable">
            <Link href="/panel">Panel</Link>
          </nav>
        </>
      )}

      {!usuario && (
        <nav id="desplegable">
          <Link href="/ingresar">Ingresar</Link>
        </nav>
      )}

      <nav id="desplegable">
        <div className="d-flex align-items-center">
          <Link href="/carrito">Carrito
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-cart2 carrito"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
            <div className="badge rounded-circle badge-danger counter">
              {carrito.length}
            </div>
          </Link>
          
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

