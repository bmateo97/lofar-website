import React, { useContext } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Picture from "@/components/image";

const Anillos = () => {
  const { imagenes, addCart } = useContext(Context);
  return (
    <>
      <Head>
        <title>Anillos</title>
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
              <span>Lo que ofrecemos</span>
            </h2>
            <p class="titulo">Anillos</p>
          </article>

          <div class="col-12">
            <div class="row justify-content-center">
              {imagenes.map((img) => {
                if (img.categoria !== "anillos") return;
                return (
                  <Picture
                    key={img.id}
                    image={img}
                    title="Here your title"
                    addCart={addCart}
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

export default Anillos;
