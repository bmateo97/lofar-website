/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Item from "@/components/Item";
import { useRouter } from "next/router";

const Carrito = () => {
  const router = useRouter();
  const { setUsuario, carrito, deleteCarrito, setCarrito } = useContext(Context);

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

          <div class="_galeria">
            {carrito.map((img) => {
              return (
                <Item
                  key={img.id}
                  image={img}
                  title="Here your title"
                  addCart={deleteCarrito}
                />
              );
            })}
          </div>
        </div>
        <div className="container text-center">
          <button
            className="btn btn-info mb-5 px-5"
            onClick={() => {
              carrito.map((img) => {
                fetch(
                  "https://lofar-api-uskfbty6la-ue.a.run.app/actualizar",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: img.id,
                      existencias: img.existencias - img.cantidad,
                    }),
                  }
                );
              });
              setCarrito([]);
              router.push("/comprar");
            }}
          >
            Comprar
          </button>
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
