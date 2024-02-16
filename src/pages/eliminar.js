/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Editar from "@/components/editar";
import Contenido from "@/components/Contenido";
import { useRouter } from "next/router";
import ModalB from "@/components/ModalB";

const Productos = () => {
  const router = useRouter();
  const { setUsuario, imagenes } = useContext(Context);

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
        <title>Nuestros Productos</title>
      </Head>

      <Header />
      <Contenido />
      <ModalB />

      <main className="container">
        <div className="row productos">
          <article className="col-12 text-center">
            <h2 className="subtitulo">
              <span>Lo que ofrecemos</span>
            </h2>
            <p className="titulo">Nuestros Produtos</p>
          </article>

          <div className="_galeria">
            {imagenes.map((img) => {
              return <Editar key={img.id} image={img} />;
            })}
          </div>
        </div>
      </main>

      <div className="container-fluid px-0 galeria">
        <div className="row justify-content-center mx-0 px-0">
          <div className="col-4 px-0 mx-0">
            <img src="/display/img-01.jpeg" alt="" />
          </div>
          <div className="col-4 px-0 mx-0">
            <img src="/display/img-02.jpg" alt="" />
          </div>
          <div className="col-4 px-0 mx-0">
            <img src="/display/img-03.jpg" alt="" />
          </div>
        </div>
      </div>

      <Contactanos />
      <Footer />
    </>
  );
};

export default Productos;
