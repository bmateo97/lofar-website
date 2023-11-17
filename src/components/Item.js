import React, { useContext } from "react";
import Context from "@/Utils/context";

const Item = ({ image, addCart }) => {
  const { onAddItem, onDeleteItem } = useContext(Context);
  return (
    <article key={image.id} class="_galeria--item">
      <figure class="producto">
        <img src={image.blob} class="" alt="" />

        <figcaption class="overlay">
          <button className="btn btn-info mb-2" onClick={() => addCart(image)}>
            Quitar
          </button>
          <div className="d-flex mb-3 align-items-center">
            <button
              className="px-4 mr-1 btn btn-info fs-5 fw-bold"
              onClick={() => onAddItem(image)}
            >
              +
            </button>
            <div className="px-3 bg-info text-white">{image.cantidad}</div>
            <button
              className="px-4 ml-1 btn btn-info fs-5 fw-bold"
              onClick={() => onDeleteItem(image)}
            >
              -
            </button>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default Item;
