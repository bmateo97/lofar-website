/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Item from "@/components/Item";
import Contenido from "@/components/Contenido";
import { useRouter } from "next/router";
import { DiscussionEmbed } from "disqus-react";

const Carrito = () => {
  const router = useRouter();
  const { usuario, carrito, deleteCarrito, setCarrito } = useContext(Context);

  return (
    <>
      <Head>
        <title>Carrito</title>
      </Head>
      <Header />
      <Contenido />

      <main className="container">
        <div className="row productos">
          <article className="col-12 text-center">
            <h2 className="subtitulo">
              <span>Carrito</span>
            </h2>
            <p className="titulo">Productos</p>
          </article>

          <div className="_galeria">
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
              if (!usuario) return router.push("/ingresar");
              carrito.map((img) => {
                fetch(
                  "https://lofar-api-2b3zz3222q-ue.a.run.app/actualizar",
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

      <div className="container-fluid px-b galeria">
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
      <div className="container">
        <DiscussionEmbed
          shortname="lofar" // Replace with your Disqus shortname
          config={{
            url: "https://lofar-uskfbty6la-ue.a.run.app", // Pass the URL of the page
            identifier: "lofar-001", // Pass a unique identifier for the page
            title: "Lofar", // Replace with your page title
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
