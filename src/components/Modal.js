import React from "react";
import { useContext } from "react";
import Image from "next/image";
import Context from "@/Utils/context";

const Modal = () => {
  const { modal, setModal, select } = useContext(Context);

  return (
    <>
      {modal && (
        <div className="detalle">
          <div className="">
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-dark py-1 rounded-circle"
                onClick={() => setModal(!modal)}
              >
                X
              </button>
            </div>
            <div>
              <div className="text-center mb-5 mt-3">
                <p className="text-center">
                  {select.descripcion}
                </p>
                <article key={select.id} className="_galeria--item">
                  <figure className="producto">
                    <img src={select.blob} className="" alt="" />
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
