import React from 'react'

import foto1 from '../assets/img/chimaev.jpg';
import foto2 from '../assets/img/covington.jpg';
import foto3 from '../assets/img/mcgregor.jpg';
import foto4 from '../assets/img/topuria.png';

export const Content = () => {

  return (
    <div className="content__container">

        <div className="card m-2 p-2 d-flex flex-column justify-content-center align-items-center">

            <img src={foto1} 
                className='card-img-top mt-2 w-50 img-rounded img-fluid'
                alt="..." 
            />

            <div className="card-body">
                <h5 className="card-title">
                    Título
                </h5>
                <p className="card-text">
                    Descripción
                </p>
                
                <a href="#" className='btn btn-danger m-2'>Editar</a>
                <a href="#" 
                    className='btn btn-success m-2'
                    onClick={(nombre) => alert(nombre + " ha iniciado la function de borrado !")}
                >Borrar</a>
            </div>
        </div>

        <div className="card m-2 p-2 d-flex flex-column justify-content-center align-items-center">

            <img src={foto2} 
                className='card-img-top mt-2 w-50 img-rounded img-fluid'
                alt="..." 
            />

            <div className="card-body">
                <h5 className="card-title">
                    Título
                </h5>
                <p className="card-text">
                    Descripción
                </p>

                <a href="#" className='btn btn-danger m-2'>Editar</a>
                <a href="#" className='btn btn-success m-2'>Borrar</a>
            </div>
        </div>

        <div className="card m-2 p-2 d-flex flex-column justify-content-center align-items-center">

            <img src={foto3} 
                className='card-img-top mt-2 w-50 img-rounded img-fluid'
                alt="..." 
            />

            <div className="card-body">
                <h5 className="card-title">
                    Título
                </h5>
                <p className="card-text">
                    Descripción
                </p>
                
                <a href="#" className='btn btn-danger m-2'>Editar</a>
                <a href="#" className='btn btn-success m-2'>Borrar</a>
            </div>
        </div>

        <div className="card m-2 p-2 d-flex flex-column justify-content-center align-items-center">

            <img src={foto4} 
                className='card-img-top w-50 img-rounded img-fluid'
                alt="..." 
            />

            <div className="card-body">
                <h5 className="card-title">
                    Título
                </h5>
                <p className="card-text">
                    Descripción
                </p>
                
                <a href="#" className='btn btn-danger m-2'>Editar</a>
                <a href="#" className='btn btn-success m-2'>Borrar</a>
            </div>
        </div>

    </div>
  )

}
