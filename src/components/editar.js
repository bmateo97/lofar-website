import React, { useContext } from "react";
import Context from "@/Utils/context";

const Editar = ({ image }) => {
  const { deleteItem, editStock } = useContext(Context);

  return (
    <article key={image.id} class="_galeria--item">
      <figure class="producto">
        <img src={image.blob} class="" alt="" />

        <figcaption class="overlay">
          <button className="btn btn-info mb-2" onClick={() => deleteItem(image)}>
            Eliminar
          </button>
          <div className="d-flex mb-3 align-items-center">
            <button
              className="px-4 mr-1 btn btn-info fs-5 fw-bold"
              onClick={() => editStock(image.id, image.existencias + 1)}
            >
              +
            </button>
            <div className="px-3 bg-info text-white">{image.existencias}</div>
            <button
              className="px-4 ml-1 btn btn-info fs-5 fw-bold"
              onClick={() => editStock(image.id, image.existencias - 1)}
            >
              -
            </button>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default Editar;
