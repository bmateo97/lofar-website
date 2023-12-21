/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactanos from "@/components/Contactanos";
import Context from "@/Utils/context";
import Contenido from "@/components/Contenido";
import { useRouter } from "next/router";

const Subir = () => {
  const router = useRouter();
  const [ url, setUrl ] = useState("");
  const [message, setMessage] = useState("");
  const [ title, setTitle ] = useState("");
  const { setUsuario } = useContext(Context);

  const onChangeUrl = (ev) => setUrl(ev.target.value);
  const onChangeTitle = (ev) => setTitle(ev.target.value);

  const onSubmit = async () => {
    if (url == "" || title == "") {
      setMessage("Url o Titulo vacios");
      setTimeout(() => setMessage(""), 3000);
      return;
    };
    const response = await fetch(
      "https://lofar-api-uskfbty6la-ue.a.run.app/panel",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, title }),
      }
    );

    if (response.ok) {
      setUrl("");
      setTitle("");
      setMessage("Panel actualizado !");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Error al actualizar");
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

      <div className="container pb-5">
      <div className="mt-2">
          <label>
            Existencias: <br />
            <input
              className="p-1 mr-2"
              placeholder="Url"
              type="text"
              value={url}
              onChange={onChangeUrl}
            />
          </label>
        </div>
        <div className="mt-2">
          <label>
            Existencias: <br />
            <input
              className="p-1 mr-2"
              placeholder="Titulo"
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
          </label>
        </div>
        <button className="btn btn-info px-5" type="button" onClick={onSubmit}>
          Subir
        </button>
        {message ? (
          <div className="my-2 alert alert-info">{message}</div>
        ) : null}
      </div>
      <Contactanos />
      <Footer />
    </>
  );
};

export default Subir;
