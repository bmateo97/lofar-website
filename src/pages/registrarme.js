import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Context from "@/Utils/context";
import Header from "@/components/Header";

export default function Page() {
  const router = useRouter();
  const [banner, setBanner] = useState("");
  const { usuario, setUsuario } = useContext(Context);
  const [inputs, setInputs] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
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
    const { nombres, apellidos, email, telefono, clave } = inputs;

    if (!nombres || !apellidos || !email || !telefono || !clave) {
      
      setBanner("Por favor, complete todos los campos.");
    setTimeout(() => setBanner(""), 3000);
    return;
  }

  try{
    const response = await fetch("https://lofar-api-2b3zz3222q-ue.a.run.app/registrarse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombres,
        apellidos,
        email,
        telefono,
        contrasena: clave,
      }),
    });

const data = await response.json();


    if (response.ok && data.affectedRows == 1) {
      setBanner("Registro Exitoso, Inicia Sesión ")
setTimeout(() => {
setBanner("");
router.push('/ingresar');

}, 3000);
    }else{
      setBanner(data.message || "Error en el registro.");
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
        <meta name="description" content="Fabrica de Joyas lofar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="fondo2" id="fondo">
          <img className="contenido-header3" />          
          <div className="p-3" id="login">
            <hr />
       
</div>


        
<div className="container-fluid">
<div className="text-center">
<div className="recuadro">

<div>Ingrese todos los campos por favor. </div>

           <input
              type="text"
              name="nombres"
              placeholder="Nombres*"
              value={inputs.nombres}
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos*"
              value={inputs.apellidos}
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="email"
              placeholder="Email*"
              value={inputs.email}
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono*"
              value={inputs.telefono}
              onChange={onChangeInput}
            />
            <input
              type="password"
              name="clave"
              placeholder="Contraseña*"
              value={inputs.clave}
              onChange={onChangeInput}
            />


            <div className="text-center">
              <button className="btn btn-outline-dark" onClick={onSubmit}>
                Registrar e ingresar
              </button>
            </div>

            {banner && (
                <div className="my-2 alert alert-info">{banner}</div>
              )}
            <div className="m-5"></div>
          </div>
          <h1 className="mt-5 texto"></h1>
          </div>
          </div>
          </div>
    </>
  );
}
