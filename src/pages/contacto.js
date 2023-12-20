import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contenido from "@/components/Contenido";
import { DiscussionEmbed } from "disqus-react";

const contacto = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>

      <Header />
      <Contenido />

      <div class="container-fluid">
        <section class="contacto row justify-content-center">
          <div class="col-12 col-md-9 text-center">
            <h2 class="subtitulo">
              <span>Contactanos</span>
            </h2>
            <h2 class="subtitulo">
              <span>Email: joyas_lofar@hotmail.com</span>
            </h2>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4752889704372!2d-78.77467545594048!3d-2.922592463380104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd055566171791%3A0x92e961b27346500!2sFabrica%20de%20JOYAS%20LOFAR!5e0!3m2!1ses-419!2sec!4v1682893764211!5m2!1ses-419!2sec"
            width="1100"
            height="250"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
        <section>
          <div class="recuadro">
            <h1>
              <img src="/icons/correo-de-contacto.png" /> Contactanos
            </h1>
            <form
              action="mailto:joyas_lofar@hotmail.com"
              method="post"
              enctype="text/plain"
            >
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
              <br />

              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
              <br />

              <label for="mensaje">Mensaje:</label>
              <br />
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                cols="50"
                required
              ></textarea>

              <input type="submit" value="Enviar" />
            </form>
          </div>
        </section>
      </div>
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

export default contacto;
