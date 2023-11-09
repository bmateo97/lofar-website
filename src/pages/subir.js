/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import FileBase64 from 'react-file-base64';
import Context from "@/Utils/context";
import { useRouter } from "next/router";

const Subir = () => {
  const router = useRouter();
  const [categoria, setCategoria] = useState("");
  const [blob, setBlob] = useState("");
  const [message, setMessage] = useState("");
  const { setUsuario } = useContext(Context);
  
  const handleCategoria = (e) => setCategoria(e.target.value);
  const handleImagen = (b) => {
    // if (b.type != "image/png" && b.type != "image/jpeg", b.type != "image/jpg") {
      // setMessage("Formato no permitido, solo se permite png, jpeg, jpg !");
      // setTimeout(() => setMessage(""), 3000);
      // return;
    // };
    setBlob(b.base64);
  };

  const onSubmit = async () => {
    if (categoria == "") {
      setMessage("Seleccione una categoria");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    const response = await fetch("http://localhost:3000/insertar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria, blob }),
    });
    
    if (response.ok) {
      await response.json();
      setMessage("Foto subida exitosamente !");
      setTimeout(() => setMessage(""), 3000);
    } else {
      if (response.status == 413) {
        setMessage("Imagen excede el tamano permitido");
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
      <div class="contenido-header">
        <div class="fondo" id="fondo">
          <h1 class="texto">Fabrica de Joyas Lofar</h1>
        </div>
      </div>

      <Header />

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
        {/* <input
          type="file"
          className=""
          accept="image/png image/jpeg"
          onChange={handleImagen}
        /> */}
        <FileBase64
          multiple={ false }
          onDone={ handleImagen } />
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
