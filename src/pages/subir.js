/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import FileBase64 from 'react-file-base64';
import Context from "@/Utils/context";
import Contenido from "@/components/Contenido";
import { useRouter } from "next/router";

const Subir = () => {
  const router = useRouter();
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [existencias, setExistencias] = useState(0);
  const [blob, setBlob] = useState("");
  const [message, setMessage] = useState("");
  const { setUsuario, getAllImages } = useContext(Context);
  
  const handlerExistencias = (e) => setExistencias(e.target.value);
  const handlerDescripcion = (e) => setDescripcion(e.target.value);
  const handleCategoria = (e) => setCategoria(e.target.value);
  const handleImagen = (b) => {
    if (b.type == "image/png" || b.type == "image/jpeg" || b.type == "image/jpg") {
      setBlob(b.base64);
    } else {
      setMessage("Formato no permitido, solo se permite png, jpeg, jpg !");
      setTimeout(() => setMessage(""), 3000);
    };
  };

  const onSubmit = async () => {
    if (categoria == "") {
      setMessage("Seleccione una categoría");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    if (blob == "") {
      setMessage("Seleccione una imagen");
      setTimeout(() => setMessage(""), 3000);
    }

    const response = await fetch("http://localhost:3000/insertar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria, blob, existencias, descripcion }),
    });
    
    if (response.ok) {
      await response.json();
      getAllImages();
      setMessage("Foto subida exitosamente !");
      setTimeout(() => setMessage(""), 3000);
    } else {
      if (response.status == 413) {
        setMessage("Imagen excede el tamaño permitido");
        setTimeout(() => setMessage(""), 3000);
      }
      setMessage("Error al subir");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  useEffect(() => {
    const _usuario = sessionStorage.getItem("user");
    if (_usuario) {
      const user = JSON.parse(_usuario);
      setUsuario(user);
    } else {
      router.push("/");
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Subir</title>
      </Head>
      <Header />
      <Contenido />

      <div className="container text-center pb-5">
        <select className="p-1 mr-2" onChange={handleCategoria} value={categoria} title="Seleccione una categoria">
          <option value="">Seleccione una categoria</option>
          <option value="anillos">Anillos</option>
          <option value="aretes">Aretes</option>
          <option value="cadenas">Cadenas</option>
          <option value="pulseras">Pulseras</option>
          <option value="juegos">Juegos de plata</option>
          <option value="anillos-b">Anillos bisuteria</option>
          <option value="pulseras-b">Pulseras bisuteria</option>
        </select>
        <input className="p-1 mr-2" placeholder="existencias" type="number" value={existencias} onChange={handlerExistencias} />
        {/* <input
          type="file"
          className=""
          accept="image/png image/jpeg"
          onChange={handleImagen}
        /> */}
        <FileBase64
          multiple={ false }
          onDone={ handleImagen } />
          <textarea className="" placeholder="Descripción (500)" maxLength="500" onChange={handlerDescripcion} ></textarea>
        <button
          className="btn btn-info px-5"
          type="button"
          onClick={onSubmit}
        >Subir</button>
        {message ? <div className="my-2 alert alert-info">{message}</div> : null}
      </div>
      <Contactanos />
      <Footer />
    </>
  );
};

export default Subir;
