
export const Editar = ({
    peli, conseguirPelis, 
    setEditar, setListadoState
}) => {

    const tituloComponente = "Editar película";

    const guardarEdicion = (e, id) => {

        e.preventDefault();

        // conseguir los valores del event
        let target = e.target;

        // buscar índice del obj de la peli a actualizar
        const pelisAlmacenadas = conseguirPelis();
        console.log(pelisAlmacenadas);
        
        // me encuentra el índice de cada objeto mediante el id buscado
        const indicePelis = pelisAlmacenadas.findIndex(peli => peli.id === id);
        console.log(indicePelis);

        // crear obj con id de ese índice, título y descripción del form
        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        // console.log(peliActualizada);
        // devolviendo así, el valor actualizado, capturando cada vez que se modifique 

        // actualizar el elemento con ese indice
        pelisAlmacenadas[indicePelis] = peliActualizada;
        console.log(pelisAlmacenadas);

        // guardar en nuevo array de objetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));

        // finalmente, actualizar estados
        setListadoState(pelisAlmacenadas);
        setEditar(0);

    };

  return (
    <div className="editar__container d-flex flex-row justify-content-center">

        <h3>{tituloComponente}</h3>

        <form
            onSubmit={e => guardarEdicion(e, peli.id)} 
            className="d-flex flex-column m-2 mt-3 p-2"
        >
            <div className="form-group">

                <input type="text" 
                    name="titulo"
                    className="form-control m-2 p-2"
                    defaultValue={peli.titulo}
                />
                <textarea name="descripcion" 
                    className="form-control m-2 p-2"
                    defaultValue={peli.descripcion}
                ></textarea>

                <button type="submit" 
                    className="btn btn-primary rounded-2"
                    value="Modificar" 
                >
                    Modificar
                </button>
            
            </div>
        </form>

    </div> 
  )

}
