import React from "react";

const Picture = ({ image, title, addCart}) => {
  return (
    <article
      key={image.id}
      class="col-6 col-lg-3 py-1"
      onClick={() => addCart(image)}
    >
      <figure class="producto">
        <img src={image.blob} class="img-fluid" alt="" />

        <figcaption class="overlay">
          <p class="overlay-texto">{title}</p>
        </figcaption>
      </figure>
    </article>
  );
};

export default Picture;
