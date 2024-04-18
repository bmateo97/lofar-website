/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Context from "@/Utils/context";

const Picture = ({ image, title, addCart }) => {
  const { carrito, setModal, setSelect, onAddItem, onDeleteItem, deleteCarrito } = useContext(Context);
  return (
    <article key={image.id} className="_galeria--item">
      <figure className="producto">
        <img src={image.blob} className="" alt="" />

        <figcaption className="overlay">
          {carrito.filter((item) => item.id === image.id).length == 0 ? (
            <div className="py-2" onClick={() => addCart(image)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
          ) : (
            <div className="py-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-cart-check"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-info ml-1 mr-1 mb-1" type="button" onClick={() => {
                  if (carrito.filter((item) => item.id === image.id)[0].cantidad === 1) {
                    deleteCarrito(image);
                  } else {
                    onDeleteItem(image);
                  }
                }}>-</button>
                <div className="px-3 bg-info text-white">{carrito.filter((item) => item.id === image.id)[0].cantidad}</div>
                <button className="btn btn-info ml-1 mb-1" type="button" onClick={() => onAddItem(image)}>+</button>
              </div>
            </div>
          )}

          <div>
            <button
              className="btn btn btn-outline-light p-0 px-3 my-1"
              type="button"
              onClick={() => {
                setSelect(image);
                setModal(true);
              }}
            >
              Detalles
            </button>
          </div>
          <div className="d-flex no-wrap text-white fw-bold p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-collection"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
            </svg>
            <div className="ml-1">{image.existencias}</div>
            <div className="ml-1">$ {parseFloat(image.precio).toFixed(2)}</div>
            <div className="ml-1">{image.codigo}</div>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default Picture;
