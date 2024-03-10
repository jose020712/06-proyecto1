import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const ListaPelis = ({listState,setListState}) => {
   const [edit,setEdit] = useState(0);

   useEffect(() => {
    console.log("Componentes Cargados");
    getFilms(); 
}, []);
    const getFilms = () => {
        let films = JSON.parse(localStorage.getItem("pelis"));
        setListState(films)
        return films;
    }
    const deleteFilm = (id)=>{
        //Conseguir Peliculas almacenadas
        let films_saved = getFilms();

        //Filtrar esas peliculas para q elimine del array lo q no quiero
        let new_array_films = films_saved.filter(film => film.id !== parseInt(id) );

        //Actualizar estado del listado
        setListState(new_array_films);

        //Actualizar los datos del LocalStorage
        localStorage.setItem('pelis',JSON.stringify(new_array_films));
    }
    

    return (

        <>
            {(listState != null && listState.length >= 1)?
                                 listState.map(peli => {
                                    return (
                                        <article key={peli.id} className="peli-item">
                                            <h3 className="title">{peli.titulo}</h3>
                                            <p className="description">{peli.descripcion}</p>
                                            <button className="edit" onClick={ () => {
                                                setEdit(peli.id);
                                             }}> Editar</button>
                                            <button  className="delete" onClick={ () => deleteFilm(peli.id)} > Borrar</button>
                                            
                                            {/* aparece formulario de editar */}
                                             {edit === peli.id && (
                                                
                                                <Editar peli         = {peli}
                                                        getFilms     ={getFilms}
                                                        setEdit      ={setEdit}
                                                        setListState = {setListState}  
                                                />
                                             )}
                                        
                                        </article>
                                    )
                                                        })
            : <h2>No hay peliculas para mostrar</h2>
        }

        </>
    )
}
