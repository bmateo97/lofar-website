import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
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

      <nav className="menu">
        <nav id="desplegable">
          <div className="row justify-content-center">
            <div>
              <a href="index.html"> HOME</a>
            </div>
          </div>
        </nav>

        <nav id="desplegable">
          <div className="row justify-content-center">
            <div>
              <a>Joyas</a>
              <ul>
                <a href="Prod.html"> Todos los productos</a>
                <a href="Anillos.html"> Anillos </a>
                <a href="Aretes.html"> Aretes </a>
                <a href="Cadenas.html"> Cadenas </a>
                <a href="Juegos.html"> Juegos de Plata</a>
              </ul>
            </div>
          </div>
        </nav>

        <nav id="desplegable">
          <div className="row justify-content-center">
            <div>
              <a> BISUTERIA</a>
              <ul>
                <a href="BisuteriaAnillos.html">Anillos</a>
                <a href="BisuteriaPulseras.html">Pulseras</a>
              </ul>
            </div>
          </div>
        </nav>
        <nav id="desplegable">
          <div className="row justify-content-center">
            <div>
              <a href="contacto.html"> CONTACTO</a>
            </div>
          </div>
        </nav>
      </nav>

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

      <div className="container-fluid">
        <section className="contacto row justify-content-center">
          <div className="col-12 col-md-9 text-center">
            <h2 className="subtitulo">
              <span>Contactanos</span>
            </h2>
            <h2 className="subtitulo">
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
          <div className="w-100 mb-4"></div>
          <div>
            <p className="border-bottom border-top">
              <a href="https://wa.me/+593998891208">
                {" "}
                <img src="/icons/icon-cellphone.png" alt="" />
                Tel:0998891208
              </a>
            </p>
          </div>
        </section>

        <footer className="row justify-content-center redes-sociales">
          <div className="col-auto">
            <a href="https://www.facebook.com/JoyasLofar">
              <img src="/icons/facebook.png" alt="" />
            </a>
            <a href="https://wa.me/+593998891208">
              <img src="/icons/whatsapp.png" alt="" />
            </a>
            <a href="https://www.instagram.com/joyaslofar/">
              <img src="/icons/instagram-new.png" alt="" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
