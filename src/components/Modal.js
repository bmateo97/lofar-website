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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quia, voluptatum, quae, voluptatem voluptatibus dolorum
                  accusantium quibusdam doloribus voluptas cumque officiis
                  voluptates. Quisquam, voluptas. Quisquam, voluptas. Quisquam,
                </p>
                <article key={select.id} class="_galeria--item">
                  <figure class="producto">
                    <img src={select.blob} class="" alt="" />
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
