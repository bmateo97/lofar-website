/* eslint-disable react-hooks/exhaustive-deps */
import "@/styles/globals.css";
import "@/Utils/context";
import Context from "@/Utils/context";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState({});

  const getAllImages = async () => {
    const response = await fetch("https://lofar-api-uskfbty6la-ue.a.run.app/images");
    if (response.ok) {
      const imgs = await response.json();
      setImagenes(imgs[0]);
      // setSelect(imgs[0][0])///;
    }
  };

  const addCart = (imagen) => {
    const _image = carrito.filter((img) => img.id == imagen.id);
    if (_image.length > 0) {
      carrito.forEach((img) => {
        if (img.id == imagen.id) {
          img.cantidad++;
        }
      });
    } else {
      setCarrito([...carrito, { ...imagen, cantidad: 1 }]);
    }
  };

  const deleteCarrito = (imagen) => {
    setCarrito(carrito.filter((img) => img.id !== imagen.id));
  };

  const onAddItem = (image) => {
    carrito.forEach((img) => {
      if (img.id == image.id) {
        img.cantidad++;
      }
    });
    setCarrito([...carrito]);
  };

  const onDeleteItem = (image) => {
    if (image.cantidad == 1) return deleteCarrito(image);
    carrito.forEach((img) => {
      if (img.id == image.id) {
        img.cantidad--;
      }
    });
    setCarrito([...carrito]);
  };

  const deleteItem = async (image) => {
    const response = await fetch('https://lofar-api-uskfbty6la-ue.a.run.app/eliminar', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: image.id,
      })
    });

    if (response.ok) {
      getAllImages();
    }
  }

  const editStock = () => {};

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <Context.Provider
      value={{
        usuario,
        setUsuario,
        imagenes,
        carrito,
        addCart,
        deleteCarrito,
        setCarrito,
        onAddItem,
        onDeleteItem,
        deleteItem,
        editStock,
        modal,
        setModal,
        select,
        setSelect,
        getAllImages,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
