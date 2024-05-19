import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Aside } from './components/Aside';
import { Content } from './components/Content';
import { Listado } from './components/Listado';

library.add(fas, faTwitter, faFontAwesome);

function App() {
  
  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout d-flex flex-column m-2">

        {/* Header */}
        <Header />

        {/* Nav */}
        <Nav />

        {/* Content */}
        <section id="content" className='content'>
          <Content />

          <span className='m-3 font-monospace'>
            <h2>
              Datos desde el Almacenamiento Local
            </h2>
          </span>
          
          <Listado
             listadoState={listadoState}
             setListadoState={setListadoState}
          />
        </section>

        {/* Aside */}
        <Aside setListadoState={setListadoState} />

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <p className="read-the-docs">
          <strong>Jeremías | 2024 &copy;</strong>
        </p>

      </div>
    </>
  )
}

export default App
