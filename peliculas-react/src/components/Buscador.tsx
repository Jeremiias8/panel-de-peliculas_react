import { useState } from "react"
import '../assets/css/styles.css'

export const Buscador = ({
    listadoState, setListadoState
}) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrado, setNoEncontrado] = useState(false);

    const buscador = "Buscador: ";

    const buscarPeli = (e) => {
        
        e.preventDefault();
        // let target = e.target;

        // crear estado y actualizarlo
        setBusqueda(e.target.value);
        console.log(busqueda);

        // filtrar para buscar coincidencias
        let busquedaFiltrada = listadoState.filter(peli => {

            return peli.titulo.toLowerCase()
                .includes(busqueda
                .toLowerCase());
        });

        // console.log(busquedaFiltrada);
        
        // si el string de busqueda es menor o igual a 1, que retorne todas las pelis
        if (busqueda.length <= 1 || busquedaFiltrada <= 0) {
                
            busquedaFiltrada = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        } else {

            setNoEncontrado(false);
        }

        console.log(busquedaFiltrada);

        {/*
        // actualizar estado del listado principal con lo filtrado
        setListadoState(setBusqueda); */}

    }

  return (
    <div className="buscador__container">
        <h3>{buscador} {busqueda}</h3>

        {noEncontrado && (
            <span
                className="no-mostrar__buscador m-2 p-2"
            >
                No se ha encontrado ninguna coincidencia
            </span>
        )}

        <form>

            <input type="search"
                id="input_busqueda"
                name="busqueda"
                autoComplete="off"
                value={busqueda} 
                onChange={buscarPeli}
                className='form-control m-2 p-2 text-center'
                placeholder='Busca una peli: Avatar 2' 
                required 
            />

            {busqueda.length >= 3 && (
                <div
                    className="text-center"
                >
                    <h4 className="m-3">
                        El valor filtrado estará en la consola del navegador
                    </h4>
                </div>  
            )}
            
            <button className='btn btn-info w-25 m-2 p-2'>
                Buscar
            </button>

        </form>
    </div>
  )

}
