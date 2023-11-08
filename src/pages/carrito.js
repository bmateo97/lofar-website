import React, { useContext } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Picture from "@/components/image";

const Carrito = () => {
  const { carrito, deleteCarrito } = useContext(Context);
  return (
    <>
      <Head>
        <title>Carrito</title>
      </Head>
      <div class="contenido-header">
        <div class="fondo" id="fondo">
          <h1 class="texto">Fabrica de Joyas Lofar</h1>
        </div>
      </div>

      <Header />
      <main class="container">
        <div class="row productos">
          <article class="col-12 text-center">
            <h2 class="subtitulo">
              <span>Carrito</span>
            </h2>
            <p class="titulo">Productos</p>
          </article>

          <div class="col-12">
            <div class="row justify-content-center">
              {carrito.map((img) => {
                if (img.categoria !== "anillos") return;
                return (
                  <Picture
                    key={img.id}
                    image={img}
                    title="Here your title"
                    addCart={deleteCarrito}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <div class="container-fluid px-b galeria">
        <div class="row justify-content-center mx-0 px-0">
          <div class="col-4 px-0 mx-0">
            <img src="/display/img-01.jpeg" alt="" />
          </div>
          <div class="col-4 px-0 mx-0">
            <img src="/display/img-02.jpg" alt="" />
          </div>
          <div class="col-4 px-0 mx-0">
            <img src="/display/img-03.jpg" alt="" />
          </div>
        </div>
      </div>

      <Contactanos />
      <Footer />
    </>
  );
};

export default Carrito;
