import { useState, useEffect } from 'react'
import '../assets/css/styles.css';
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {

    console.log("Componente de listado de pelis listo.");
    conseguirPelis();
  }, []);

  const tituloComponente = "Listado";
  const descripcionComponente = "Puntos"; 

  const conseguirPelis = () => {

    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    console.log(peliculas);

    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {

    // alert(id);

    // conseguir pelis almacenadas
    let pelis_almacenadas = conseguirPelis();

    // filtrarlas para que elimine del array la que quiero remover
    let arrayPelisFiltradas = pelis_almacenadas.filter(pelicula => pelicula.id !== parseInt(id));

    // actualizar estado del listado
    setListadoState(arrayPelisFiltradas);

    // actualizar datos en localStorage
    localStorage.setItem("pelis", JSON.stringify(arrayPelisFiltradas));

  }

  return (
    <>
      {listadoState !== null ? 
          listadoState.map(peli => {

            return (
              <div className="listado__container m-2 mt-3 p-2">

                <article key={peli.id} 
                  className="d-flex justify-content-center m-2 p-2"
                >

                  <h3 className='titulo m-2 p-2'>Título: {peli.titulo}</h3>
                  <p className="descripcion m-2 p-2">Género: {peli.descripcion}</p>

                  <button
                    onClick={() => setEditar(peli.id)} 
                    className="btn btn-info m-2 p-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => borrarPeli(peli.id)} 
                    className='btn btn-secondary m-2 p-2'
                  >
                    Borrar
                  </button>

                  {/* formulario de edición */}
                  {editar === peli.id && (
                    <Editar peli={peli}
                      conseguirPelis={conseguirPelis}
                      setEditar={setEditar}
                      setListadoState={setListadoState}
                    />
                  )}

                </article>

              </div>
            );
          })
        : (<div className='m-2 p-2'>
            <h1 className='m-2'>No hay películas</h1>
          </div>
        )     
      }
    </>
  )
  
}
