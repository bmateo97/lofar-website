import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Context from "@/Utils/context";

export default function Home() {
  const router = useRouter();
  const { usuario } = useContext(Context);

  useEffect(() => {
    if (!usuario) router.push("/");
  }, [usuario, router]);
  return (
    <>
      <Head>
        <title>Fabrica de Joyas Lofar</title>
        <meta name="description" content="Fabrica de Joyas Lofar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contenido-header">
        <div className="fondo" id="fondo">
          <h1 className="texto">Fabrica de Joyas Lofar</h1>
        </div>
      </div>

      <Header />

      <main className="container">
        <div className="row nosotros justify-content-center">
          <div className="col-12 text-center">
            <h2 className="subtitulo">
              <span>¿Quienes somos?</span>
            </h2>
            <h3 className="titulo">
              Brillando juntos en los momentos más especiales.
            </h3>
            <p>
              Recibimos el premio internacional a la calidad empresarial 2012.
            </p>
            <p>Calidad 100% Garantizada.</p>
            <p>Joyeros desde 1970.</p>
            <p>Chordeleg, Azuay, Ecuador</p>
            <a href="joyas_lofar@hotmail.com" className="enlace">
              Descubre tu próximo diseño
            </a>
          </div>
        </div>

        <div className="row productos">
          <article className="col-12 text-center">
            <h2 className="subtitulo">
              <span>Lo que ofrecemos</span>
            </h2>
            <p className="titulo">Nuestros Produtos</p>
            <p>
              Las joyas son la expresión más brillante del corazón humano, y en
              nuestra página encontrarás la pieza perfecta para llevar siempre
              contigo un pedacito de amor, belleza y elegancia.
            </p>
          </article>

          <div className="col-12">
            <div className="row justify-content-center">
              <article className="col-6 col-lg-3 py-1">
                <figure className="producto">
                  <img
                    src="/products/Anillos/Anillo1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <figcaption className="overlay">
                    <p className="overlay-texto">Anillo hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article className="col-6 col-lg-3 py-1">
                <figure className="producto">
                  <img
                    src="/products/Aretes/Arete1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <figcaption className="overlay">
                    <p className="overlay-texto">Aretes hechos en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article className="col-6 col-lg-3 py-1">
                <figure className="producto">
                  <img
                    src="/products/Cadenas/Cadena.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <figcaption className="overlay">
                    <p className="overlay-texto">Cadena hecho en plata </p>
                  </figcaption>
                </figure>
              </article>

              <article className="col-6 col-lg-3 py-1">
                <figure className="producto">
                  <img
                    src="/products/Juegos/imagen 25.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <figcaption className="overlay">
                    <p className="overlay-texto">Juego hechos en filigrana </p>
                  </figcaption>
                </figure>
              </article>
              <a href="Prod.html" button className="d-block btn-productos">
                {" "}
                Todos los productos{" "}
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="separador text-center text-white">
        <p>
          <q>
            Cada joya es una historia que contar, un recuerdo que atesorar y un
            sueño que cumplir. Permítenos ser parte de tus momentos más
            especiales con nuestras piezas únicas y llenas de magia.
          </q>
        </p>
      </div>

      <div className="container">
        <div className="row acerca-de justify-content-around">
          <article className="col-10 col-sm-5">
            <figure className="text-center">
              <img src="/icons/icon-team.png" alt="" />
              <figcaption>
                <strong className="mb-2">Un equipo de expertos</strong>
                <div className="w-100"></div>
                <p>
                  Somos expertos en joyería que fusionamos tradición e
                  innovación para crear piezas excepcionales con pasión y
                  perfección
                </p>
              </figcaption>
            </figure>
          </article>

          <article className="col-10 col-sm-5">
            <figure className="text-center">
              <img src="/icons/icon-services.png" alt="" />
              <figcaption>
                <strong className="mb-2">Una historia de servicio</strong>
                <div className="w-100"></div>
                <p>
                  Decadas de experiencia, calidad y compromiso en cada pieza.
                  Nos enorgullece ser parte de los momentos más especiales de
                  nuestros clientes.
                </p>
              </figcaption>
            </figure>
          </article>
        </div>
      </div>

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
}