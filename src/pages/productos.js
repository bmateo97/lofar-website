/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Picture from "@/components/image";
import Contenido from "@/components/Contenido";
import { DiscussionEmbed } from "disqus-react";

const Productos = () => {
  const { imagenes, addCart } = useContext(Context);
  const [gender, setGender] = useState("todo");
  const list = ["pulseras-b", "anillos-b", "cadenas"];

  const onChangeGender = (ev) => {
    setGender(ev.target.name);
  };

  return (
    <>
      <Head>
        <title>Nuestros Productos</title>
      </Head>

      <Header />
      <Contenido />
      <Modal />

      <main class="container">
        <div class="row productos">
          <article class="col-12 text-center">
            <h2 class="subtitulo">
              <span>Lo que ofrecemos</span>
            </h2>
            <p class="titulo">Nuestros Productos</p>
          </article>

          <div className="container text-center">
            <button
              className={gender == "todo" ? "buttonA" : "buttonB"}
              name="todo"
              onClick={onChangeGender}
            >
              Todo
            </button>
            <button
              className={gender == "hombre" ? "buttonA" : "buttonB"}
              name="hombre"
              onClick={onChangeGender}
            >
              Hombre
            </button>
            <button
              className={gender == "mujer" ? "buttonA" : "buttonB"}
              name="mujer"
              onClick={onChangeGender}
            >
              Mujer
            </button>
          </div>

          <div class="_galeria">
            {imagenes.map((img) => {
              if (gender == "todo") {
                return (
                  <Picture
                    key={img.id}
                    image={img}
                    title="Lofar Joyas"
                    addCart={addCart}
                  />
                );
              } else {
                if (gender == "hombre") {
                  if (list.includes(img.categoria)) {
                    return (
                      <Picture
                        key={img.id}
                        image={img}
                        title="Lofar Joyas"
                        addCart={addCart}
                      />
                    );
                  }
                }

                if (gender == "mujer") {
                  if (!list.includes(img.categoria)) {
                    return (
                      <Picture
                        key={img.id}
                        image={img}
                        title="Lofar Joyas"
                        addCart={addCart}
                      />
                    );
                  }
                }
              }
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

export default Productos;
