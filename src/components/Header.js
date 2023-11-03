import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="menu">
      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <Link href="/"> HOME</Link>
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
              <a href="BisuteriaAnillos.html">Anillos</a>
              <a href="BisuteriaPulseras.html">Pulseras</a>
            </ul>
          </div>
        </div>
      </nav>
      <nav id="desplegable">
        <div className="row justify-content-center">
          <div>
            <a href="contacto.html"> CONTACTO</a>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Header;
