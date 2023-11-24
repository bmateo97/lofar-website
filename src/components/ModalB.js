import React from "react";
import { useContext, useState } from "react";
import Context from "@/Utils/context";

const ModalB = () => {
  const { modal, setModal, select, setImagenes, imagenes } = useContext(Context);
  const [descripcion, setDescripcion] = useState(select.descripcion);

  const handlerDescripcion = (e) => setDescripcion(e.target.value);

  const onEditDesc = async () => {
    const response = await fetch('http://localhost:3000/descripcion', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: select.id,
        descripcion: descripcion,
      })
    });

    
    if (response.ok) {
      setImagenes(imagenes.map(img => {
        if (img.id == select.id) {
          img.descripcion = descripcion;
        }
        return img;
      }));
      setModal(false)
    }
  }

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
                <textarea className="text-center" onChange={handlerDescripcion} value={descripcion}></textarea>
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
