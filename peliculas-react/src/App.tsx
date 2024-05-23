import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import usuarioIcono from './assets/icons/bx-user.svg';
import cerrarSesionIcono from './assets/icons/bx-log-out.svg';

import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Aside } from './components/Aside';
import { Content } from './components/Content';
import { Listado } from './components/Listado';

library.add(fas, faTwitter, faFontAwesome);

function App() {
  
  const [listadoState, setListadoState] = useState([]);
  const [inicioSesion, setInicioSesion] = useState(false);

  const usuarioSesion = {
    nombre: '',
    nickname: ''
  }

  const inicioDeSesion = () => {

    alert("Sesión iniciada");
  };

  const cerradoDeSesion = () => {

    alert("Sesión cerrada");
  }

  return (
    <>
      <div className="layout d-flex flex-column m-2">

        <div>

          <span
            className='m-2 p-2'
            onClick={() => inicioDeSesion()}
          >
            <img src={usuarioIcono} className='m-2 p-2' />
          </span>

          <span
            className='m-2 p-2'
            onClick={() => cerradoDeSesion()}
          >
            <img src={cerrarSesionIcono} className='m-2 p-2' />
          </span>

          {/*
          {inicioSesion === null && (
            <h3>
              Pendiente de entrar
            </h3>
          )} {
            <h3>
              Inicio exitoso
            </h3>
          }
          */}

        </div>
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
        <Aside listadoState={listadoState} 
          setListadoState={setListadoState} 
        />

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
