import React, { useState } from 'react'

export const Buscador = ({listState,setListState}) => {

    const[busqueda,setBusqueda] = useState('');
    const[notFound,setNotFound] = useState(false);
    const findFilm = (e) =>{
        //Actualizar Estado
        setBusqueda(e.target.value);

        //Listado Completo de peliculas y Filtrar para buscar Coincidencias

        let found_film = listState.filter(film =>{
            return film.titulo.toLowerCase().includes(busqueda.toLowerCase());
        })

        //Comprobar si hay un resultado
        if(busqueda.length <= 1 || found_film <= 0){
            found_film = JSON.parse(localStorage.getItem("pelis"));
            setNotFound(true);
        }else{
            setNotFound(false);
        }

        //Dar valor de todo en localStorge

        //Actualizar estado del listado principal con lo q logrado filtrar
        setListState(found_film);
    };

    return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            { ( notFound === true  && busqueda.length > 1 ) &&(<span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
            
            <form>
                <input type="text"
                    id='search_field'
                    name='busqueda'
                    autoComplete='off'
                    value={busqueda}
                    onChange={findFilm}

                />


                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}
