import '@/styles/globals.css'
import '@/Utils/context'
import Context from '@/Utils/context'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [usuario, setUsuario] = useState(null);
  return <Context.Provider value={{ usuario, setUsuario }}>
    <Component {...pageProps} />
  </Context.Provider>
}
