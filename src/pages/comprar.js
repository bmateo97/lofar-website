/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import { useRouter } from "next/router";

const Comprar = () => {
  const router = useRouter();
  const { setUsuario, getAllImages } = useContext(Context);

  useEffect(() => {
    getAllImages();
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
        <title>Carrito</title>
      </Head>
      <div class="contenido-header">
        <div class="fondo" id="fondo">
          <h1 class="texto">Fabrica de Joyas Lofar</h1>
        </div>
      </div>

      <Header />
      <main class="container text-center mb-5">
        <h3>Felicidades por su compra !</h3>
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

export default Comprar;
