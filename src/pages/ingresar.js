import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Context from "@/Utils/context";
import Link from "next/link";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();
  const [banner, setBanner] = useState("");
  const { setUsuario } = useContext(Context);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [clave, setClave] = useState("");

  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    if (name == "usuario") setNombreUsuario(value);
    if (name == "clave") setClave(value);
  };

  const onSubmit = async (ev) => {
    if (nombreUsuario == "") return;
    if (clave == "" ) return;
    const reponse = await fetch(
      "https://lofar-api-2b3zz3222q-ue.a.run.app/ingresar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: nombreUsuario,
          contrasena: clave,
        }),
      }
    );

    if (reponse.ok) {
      const data = await reponse.json();
      if (data[0].length > 0) {
        setUsuario(data[0][0]);
        sessionStorage.setItem("user", JSON.stringify(data[0][0]));
        router.push("/");
      } else {
        setBanner("Usuario no encontrado");
        setTimeout(() => setBanner(""), 3000);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Fabrica de Joyas Lofar | Ingresar</title>
        <meta name="description" content="Fabrica de Joyas Lofar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="fondo" id="fondo">
        <img className="contenido-header contenido-header2" src="/bg-girl.jpeg" />
        <div className="p-3" id="login">
          <h3 className="text-center">Ingresar</h3>
          <input
            type="text"
            name="usuario"
            placeholder="Email"
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="clave"
            placeholder="Contraseña"
            onChange={onChangeInput}
          />
          <div className="text-center">
            <button className="btn btn-outline-dark" onClick={onSubmit}>
              Ingresar
            </button>
          </div>
          {banner != "" && (
            <div className="my-2 alert alert-warning">{banner}</div>
          )}
          <div className="text-center mt-1">
            <p className="">
              <Link href="/registrarme">Crear Cuenta</Link>
            </p>
          </div>
        </div>
        <h1 className="texto2">Fabrica de Joyas Lofar</h1>
      </div>
    </>
  );
}
