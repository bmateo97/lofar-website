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
  const [inputs, setInputs] = useState({
    usuario: "",
    clave: ""
  });

  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault(); // Previene el comportamiento por defecto del botón

    const { usuario, clave } = inputs;

    if (!usuario || !clave) {
      setBanner("Por favor, complete todos los campos.");
      setTimeout(() => setBanner(""), 3000);
      return;
    }

    try {
      const response = await fetch("https://lofar-api-2b3zz3222q-ue.a.run.app/ingresar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          contrasena: clave,
        }),
      });

      const data = await response.json();

      if (response.ok && data[0].length > 0) {
        setUsuario(data[0][0]);
        sessionStorage.setItem("user", JSON.stringify(data[0][0]));
        router.push("/");
      } else {
        setBanner("Usuario no encontrado");
        setTimeout(() => setBanner(""), 3000);
      }
    } catch (error) {
      setBanner("Error en la conexión. Por favor, intente nuevamente.");
      setTimeout(() => setBanner(""), 3000);
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
            value={inputs.usuario}
            onChange={onChangeInput}
          />
          <input
            type="password"
            name="clave"
            placeholder="Contraseña"
            value={inputs.clave}
            onChange={onChangeInput}
          />
          <div className="text-center">
            <button className="btn btn-outline-dark" onClick={onSubmit}>
              Ingresar
            </button>
          </div>
          {banner && (
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

