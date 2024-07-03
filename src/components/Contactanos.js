import React from "react";

const Contactanos = () => {
  return (
    <>
      <div class="container-fluid">
        <section class="contacto row justify-content-center">
          <div class="col-12 col-md-9 text-center">
            <h2 class="subtitulo">
              <span>Contactanos</span>
            </h2>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4752889704372!2d-78.77467545594048!3d-2.922592463380104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd055566171791%3A0x92e961b27346500!2sFabrica%20de%20JOYAS%20LOFAR!5e0!3m2!1ses-419!2sec!4v1682893764211!5m2!1ses-419!2sec"
            width="1100"
            height="250"
            // style="border:0;"
            allowFullAcreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
      </div>
    </>
  );
};

export default Contactanos;

