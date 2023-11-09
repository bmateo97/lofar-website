/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Picture from "@/components/image";
import { useRouter } from "next/router";

const Cadenas = () => {
  const router = useRouter();
  const { setUsuario, imagenes, addCart } = useContext(Context);

  useEffect(() => {
    const _usuario = sessionStorage.getItem("user");
    if (_usuario) {
      const user = JSON.parse(_usuario);
      setUsuario(user);
    } else {
      router.push("/");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Cadenas</title>
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
            <p class="titulo"> Cadenas</p>
          </article>

          <div class="_galeria">
            {imagenes.map((img) => {
              if (img.categoria !== "cadenas") return;
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

      <div class="container-fluid">
        <section class="contacto row justify-content-center">
          <div class="col-12 col-md-9 text-center">
            <h2 class="subtitulo">
              <span>Contactanos</span>
            </h2>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4752889704372!2d-78.77467545594048!3d-2.922592463380104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd055566171791%3A0x92e961b27346500!2sFabrica%20de%20JOYAS%20LOFAR!5e0!3m2!1ses-419!2sec!4v1682893764211!5m2!1ses-419!2sec"
            width="1100"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="w-100 mb-4"></div>
          <div>
            <p class="border-bottom border-top">
              <img src="/icons/icon-cellphone.png" alt="" />
              <a href="tel:+593984255256"> 098 425 5256 </a>,
              <a href="tel:+593998891208"> 099 889 1208 </a>
            </p>
          </div>
        </section>
      </div>
      <Contactanos />
      <Footer />
    </>
  );
};

export default Cadenas;
