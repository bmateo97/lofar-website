import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";

const anillos = () => {
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
              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/Anillo1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/Anillo 2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo5.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo6.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo7.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo8.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo9.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo10.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article class="col-6 col-lg-3 py-1">
                <figure class="producto">
                  <img
                    src="/products/Anillos/anillo11.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <figcaption class="overlay">
                    <p class="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </main>

      <div class="container-fluid px-0 galeria">
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

export default anillos;
