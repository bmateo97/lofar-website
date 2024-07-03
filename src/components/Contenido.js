/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Context from "@/Utils/context";

const Contenido = () => {
  const { panel } = useContext(Context);
  return (
    <div className="fondo" id="fondo">
      <img className="contenido-header" src={panel.url} />
      <h1 className="texto">{panel.title}</h1>
    </div>
  );
};

export default Contenido;

