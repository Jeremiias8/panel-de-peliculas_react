import { useState } from "react"

export const Buscador = ({
    conseguirPelis, titulo, setListadoState
}) => {

    const [valorInput, setValorInput] = useState();

    const buscarPeli = (e) => {
        e.preventDefault();
        let target = e.target;

        // crear estado y actualizarlo
        setValorInput(target.busqueda.value);

        // listado completo de películas
        conseguirPelis(valorInput);

        // filtrar para buscar coincidencias
        let busquedaFiltrada = valorInput.filter(valor => valor.titulo !== titulo);
        console.log(busquedaFiltrada);

        // comprobar si hay result
        if (busquedaFiltrada.length > 0) {
            setValorInput(conseguirPelis);
        } else {
            console.error("ERROR");
        }

        // dar value de todo en localStorage
        localStorage.setItem("pelis", JSON.stringify(valorInput));

        // actualizar estado del listado principal con lo filtrado
        setListadoState(valorInput);

    }

  return (
    <div className="buscador__container">
        <form>

            <input type="search"
                id="input_busqueda"
                name="busqueda"
                autoComplete="off"
                value={valorInput} 
                onChange={buscarPeli}
                className='form-control m-2 p-2 text-center'
                placeholder='Busca una peli: Avatar 2' 
                required 
            />
            
            <button className='btn btn-info w-25 m-2 p-2'>
                Buscar
            </button>

        </form>
    </div>
  )

}
