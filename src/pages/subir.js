import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import FileBase64 from 'react-file-base64';

const Subir = () => {
  const [categoria, setCategoria] = React.useState("");
  const [blob, setBlob] = React.useState("");

  const handleCategoria = (e) => setCategoria(e.target.value);
  const handleImagen = (b) => {
    setBlob(b.base64)
  };
  const onSubmit = async () => {
    console.log(categoria, blob);
    const response = await fetch("http://localhost:3000/insertar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoria, blob }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      if (response.status == 413) {
        console.log("Imagen excede el tamano permitido")
      }
      console.log(response);
      console.log("Error al subir");
    }
  };

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

      <div className="container text-center py-5">
        <input type="text" placeholder="Categoria" onChange={handleCategoria} />
        {/* <input
          type="file"
          className=""
          accept="image/png image/jpeg"
          onChange={handleImagen}
        /> */}
        <FileBase64
          multiple={ false }
          onDone={ handleImagen } />
        <br />
        <button
          className="btn btn-info px-5 mt-3"
          type="button"
          onClick={onSubmit}
        >
          Subir
        </button>
      </div>

      <Contactanos />
      <Footer />
    </>
  );
};

export default Subir;
