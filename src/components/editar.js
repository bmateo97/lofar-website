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
          <button className="btn btn-info mb-2" onClick={() => editStock(image)}>
            Existencias
          </button>          
        </figcaption>
      </figure>
    </article>
  );
};

export default Editar;
