import { useContext, useState, useEffect } from "react";
import Context from "@/Utils/context";

const ModalB = () => {
  const { modal, setModal, setSelect, select, setImagenes, imagenes } = useContext(Context);

  const handlerDescripcion = (e) => {
    setSelect({
      ...select,
      descripcion: e.target.value,
    });
  };

  const handlerPrecio = (e) => {
    setSelect({
      ...select,
      precio: e.target.value,
    });
  };

  const onEditDesc = async () => {
    const response = await fetch(
      "https://lofar-api-2b3zz3222q-ue.a.run.app/descripcion",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: select.id,
          descripcion: select.descripcion,
          precio: select.precio,
        }),
      }
    );

    if (response.ok) {
      setImagenes(
        imagenes.map((img) => {
          if (img.id == select.id) {
            img.descripcion = select.descripcion;
            img.precio = select.precio;
          }
          return img;
        })
      );
      setModal(false);
    }
  };

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
              <div className=" mb-5 mt-3">
                <label>
                  Descripción:
                  <textarea
                    className="text-center"
                    onChange={handlerDescripcion}
                    value={select.descripcion}
                  ></textarea>
                </label>
                <label>
                  Precio: <br />
                  <input type="number" min={0} value={select.precio} onChange={handlerPrecio} />
                </label>
                <br />
                <button className="btn btn-info" onClick={onEditDesc}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalB;
