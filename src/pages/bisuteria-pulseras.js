/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Picture from "@/components/image";
import Contenido from "@/components/Contenido";
import { DiscussionEmbed } from "disqus-react";

const Pulseras = () => {
  const { imagenes, addCart, onEditPrecio, precio, genero, onEditGenero } =
  useContext(Context);

  return (
    <>
      <Head>
        <title>Bisuteria Pulseras</title>
      </Head>
      <Header />
      <Contenido />
      <Modal />
      <main className="container">
        <div className="row productos">
          <article className="col-12 text-center">
            <h2 className="subtitulo">
              <span>Lo que ofrecemos</span>
            </h2>
            <p className="titulo">Pulseras en Bisuteria</p>
            <div className="d-flex p-3 justify-content-around">
              <label>Precio: {precio} </label>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                onChange={onEditPrecio}
                value={precio}
              />
              <label>Genero: </label>
              <label htmlFor="t">
                Todo:{" "}
                <input
                  type="radio"
                  name="genero"
                  id="t"
                  onChange={onEditGenero}
                  value="todo"
                />
              </label>
              <label htmlFor="h">
                Hombre:{" "}
                <input
                  type="radio"
                  name="genero"
                  id="h"
                  onChange={onEditGenero}
                  value="hombre"
                />
              </label>
              <label htmlFor="m">
                Mujer:{" "}
                <input
                  type="radio"
                  name="genero"
                  id="m"
                  onChange={onEditGenero}
                  value="mujer"
                />
              </label>
            </div>
          </article>

          <div className="_galeria">
            {imagenes.map((img) => {
              if (img.categoria !== "pulseras-b") return;
              if (img.precio > precio) return;
              if (genero != "todo") {
                if (img.genero != genero) {
                  return
                }
              };
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

export default Pulseras;
