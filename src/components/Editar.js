import React from 'react'


export const Editar = ({peli,getFilms,setEdit,setListState}) => {
  const titulo_componente = "Editar pelicula";
  
  const saveEdit = (e,id) =>{
    e.preventDefault();
      //Conseguir el target del evento
      let target = e.target

      //Buscar el indice del objeto de la pelicula a actualizar
      const pelis_almacenadas = getFilms();
      const index = pelis_almacenadas.findIndex(film => film.id === id);

      //Crear objeto con ese index

      let film_updated = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }
      
      //Actualizar el elemento con ese Index
      pelis_almacenadas[index] = film_updated;

      //Guardar el nuevo array de objetos en el localStorage
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))
       

      //Actualizar estados
      setListState(pelis_almacenadas);
      setEdit(0)

  }

  return (
    
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>

      <form onSubmit={e => saveEdit(e,peli.id)}>
        <input type='text'
               name='titulo'
               className='titulo_editado'
               defaultValue={peli.titulo}
        />

        <textarea name='descripcion'
                  defaultValue={peli.descripcion}
                  className='descripcion_editada'
        />

        <input type='submit'
               className='editar'
               value="Actualizar"
        />         
      </form>
    </div>
  )
}
