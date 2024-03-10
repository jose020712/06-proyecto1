import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Crear = ({setListState}) => {
    const tituloComponente = "Añadir Pelicula";
    const [peliState, setPeliState] = useState({
        titulo:" ",
        descripcion:" "
    });

   
    const getFormValues = (e) => {
        //Prevenir q se recargue cuando envia un formulario
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear Objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        //Guardar estado
        setPeliState(peli);

        //Actualizar el estado del listado principal
        
        setListState((elememts)=>{
            return[...elememts,peli];
        })

        //Guardar en el almacenamiento local
        SaveInStorage("pelis",peli);
        
        //

        
    }

  


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            

            <form onSubmit={ getFormValues }>

                <input type="text"
                    id='title'
                    name='titulo'
                    placeholder="Titulo"
                />

                <textarea
                    id='description'
                    name='descripcion'
                    placeholder="Descripcion">

                </textarea>

                <input type="submit"
                    id='save'
                    value="Guardar"
                />

            </form>


        </div>
    )
}
