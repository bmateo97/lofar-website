/* eslint-disable react-hooks/exhaustive-deps */
import "@/styles/globals.css";
import "@/Utils/context";
import Context from "@/Utils/context";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(null);
  const [imagenes, setImagenes] = useState([]);
  const [panel, setPanel] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState({});
  const [precio, setPrecio] = useState(100);
  const [genero, setGenero] = useState("todo");

  const getAllImages = async () => {
    const response = await fetch("https://lofar-api-uskfbty6la-ue.a.run.app/images");
    if (response.ok) {
      const imgs = await response.json();
      setImagenes(imgs[0]);
    }
  };

  const getPanel = async () => {
    const response = await fetch("https://lofar-api-uskfbty6la-ue.a.run.app/getpanel");
    if (response.ok) {
      const panel = await response.json();
      setPanel(panel[0][0]);
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

  const editStock = async (id, value) => {
    const response = await fetch('https://lofar-api-uskfbty6la-ue.a.run.app/actualizar', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        existencias: value,
      })
    });

    if (response.ok) {
      setImagenes(imagenes.map(img => {
        if (img.id == id) {
          img.existencias = value;
        }
        return img;
      }));
    }
  };

  const onEditPrecio = (ev) => {
    setPrecio(ev.target.value);
  }

  const onEditGenero = (ev) => {
    setGenero(ev.target.value);
  }

  useEffect(() => {
    getAllImages();
    getPanel();
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
        setImagenes,
        panel,
        precio,
        onEditPrecio,
        genero,
        onEditGenero,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}
