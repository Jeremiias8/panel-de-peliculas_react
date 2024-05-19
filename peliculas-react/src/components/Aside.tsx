import React from 'react'
import { GuardarEnAlmacenamiento } from '../helpers/GuardarEnAlmacenamiento';
import { Buscador } from './Buscador';


export const Aside = ({setListadoState}) => {

    const buscador = "Buscador";
    const tituloComponente = "Añadir película";
    const [value, setValue] = React.useState([
      { 
        id: 1, 
        titulo: 'Peli 1',
        descripcion: 'Descripcion 1'
      }
    ]);
    const [peliState, setPeliState] = React.useState({
      titulo: '',
      descripcion: ''
    });

    // desestructuración
    const { titulo, descripcion } = peliState;

    const conseguirDataForm = (e: Event) => {
      e.preventDefault();

      // conseguir datos del form
      let target = e.target;
      let titulo = target.titulo.value;
      let descripcion = target.descripcion.value;
      const usuario = {
        titulo: titulo,
        descripcion: descripcion
      };

      // salida de info
      // alert("Form enviado !.Con " + titulo + " ,y " + descripcion + " aparte del usuario: " + usuario);
      
      // reseteo de form
      let form = document.querySelector("#aside-form");
      form.reset();

      // crear objeto de la peli a guardar
      const peli = {
        id: new Date().getTime(),
        titulo,
        descripcion
      };

      // guardar state
      setPeliState(peli);

      // actualizar estado del listado principal
      setListadoState(elementos => {
        return [peli, ...elementos];
      });

      // guardar en el localStorage - almacenamiento local
      GuardarEnAlmacenamiento("pelis", peli);
      
      console.log(peliState);
    }

    const guardarEnAlmacenamiento = peli => {

      // conseguir los elementos que ya tenemos en el localStorage
      let elementos = JSON.parse(localStorage.getItem("pelis"));
      console.log(elementos);

      // comprobar si es un array
      if (Array.isArray(elementos)) {

        // añadir dentro del array un elemento nuevo
        elementos.push(peli);
      } else {

        // crear un array con la nueva peli
        elementos = [peli];
      }

      // guardar en el localStorage
      localStorage.setItem("pelis", JSON.stringify(elementos));

      // devolver obj guardado
      return peli;

      // localStorage.setItem('pelis', JSON.stringify([peli]));

    }

    const añadirPelicula = () => {

      setValue([
        ...value,
      ]);
      console.log('Funcionalidad de agregado de película.');

    };

  return (
    <div className="aside__container d-flex mt-5">

        <aside className="lateral d-flex flex-column justify-content-center m-2 p-2">
          <h2>{buscador}</h2>

          <Buscador />
        </aside>

        <section className="agregar d-flex flex-column justify-content-center m-2 mt-2 p-2">
          <h2 className='m-2'>{tituloComponente}</h2>

          <div
            className='m-2 p-2'
          >
            <strong>
              {(titulo && descripcion) && "Creaste con éxito la película: " + titulo}
            </strong>
          </div>

          <form id='aside-form' 
            onSubmit={conseguirDataForm}
          >

            <input type="text"
              id='titulo'
              name='titulo' 
              className='form-control w-50 m-2 p-2'
              placeholder='Título: ...'
              required
            />
            <textarea id="descripcion"
              name='descripcion'
              className='form-control w-75 m-2 p-2'
              placeholder='Descripción: ...'
              required
            ></textarea>

            <button 
              onClick={añadirPelicula}
              className='btn btn-info w-25 m-2 p-2'
            >
              Guardar
            </button>

          </form>
        </section>

    </div>
  )
  
}
