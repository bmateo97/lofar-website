import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Context from "@/Utils/context";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();
  const [banner, setBanner] = useState("");
  const { usuario, setUsuario } = useContext(Context);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [clave, setClave] = useState("");

  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    if (name == "nombres") setNombres(value);
    if (name == "apellidos") setApellidos(value);
    if (name == "email") setEmail(value);
    if (name == "telefono") setTelefono(value);
    if (name == "clave") setClave(value);
  };

  const onSubmit = async (ev) => {
    if (nombres == "" || apellidos == "" || email == "" || telefono == "" || clave == "") return;
    const response = await fetch("https://lofar-api-2b3zz3222q-ue.a.run.app/registrarse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        telefono: telefono,
        contrasena: clave,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.affectedRows == 1) {
        setBanner("Registro Exitoso, Inicia Sesión");
        setTimeout(() => setBanner(""), 3000);
        setTimeout(() => router.push('/ingresar'), 3000);
      }
    } else {
      const text = await response.json();
      setBanner(text.message);
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
      <div className="fondo2" id="fondo">
          <img src="/foto.jpg" />
          <div className="p-3" id="login">
 <hr></hr>
    <hr></hr>
    <hr></hr>
            <input
              type="text"
              name="nombres"
              placeholder="Nombres*"
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellido*"
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="email"
              placeholder="Email*"
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono*"
              onChange={onChangeInput}
            />
            <input
              type="password"
              name="clave"
              placeholder="Contraseña*"
              onChange={onChangeInput}
            />
            <div className="text-center">
              <button className="btn btn-outline-dark" onClick={onSubmit}>
                Ingresar
              </button>
            </div>
            {banner != "" && (
              <div className="my-2 alert alert-info">{banner}</div>
            )}
            <div className="m-5"></div>
          </div>
          <h1 className="mt-5 texto">Fabrica de Joyas Lofar</h1>
        </div>
    </>
  );
}

