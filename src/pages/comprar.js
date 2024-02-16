/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Contenido from "@/components/Contenido";
import { useRouter } from "next/router";
import { DiscussionEmbed } from "disqus-react";

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

      <Header />
      <Contenido />
      <main className="container text-center mb-5">
        <h3>Felicidades por su compra !</h3>
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

export default Comprar;
