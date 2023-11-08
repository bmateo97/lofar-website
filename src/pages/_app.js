/* eslint-disable react-hooks/exhaustive-deps */
import "@/styles/globals.css";
import "@/Utils/context";
import Context from "@/Utils/context";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getAllImages = async () => {
    const response = await fetch("http://localhost:3000/images");
    if (response.ok) {
      const imgs = await response.json();
      setImagenes(imgs[0]);
    } else {
    }
  };

  const addCart = (imagen) => {
    setCarrito([...carrito, imagen]);
  }

  const deleteCarrito = (imagen) => {
    setCarrito(carrito.filter((img) => img.id !== imagen.id));
  };

  useEffect(() => {
    console.log(carrito);
    getAllImages();
  }, [carrito]);
  return (
    <Context.Provider
      value={{ usuario, setUsuario, imagenes, carrito, addCart, deleteCarrito }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
