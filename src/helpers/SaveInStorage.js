  //funcion para guardar en el local Storage
   export const SaveInStorage = (key,element) =>{
        
    //Conseguir los elementos que ya tenemos en el localStorage
   
     let elements = JSON.parse(localStorage.getItem(key));
    
    
    //Comprobar si es un array
    if(Array.isArray(elements)){
        //Guardar un elemento Nuevo
        elements.push(element);
    }else{
        //Crear un array con un element nuevo
        elements = [element]; 
    }
    
    //Guardar en el LocalStorage

    localStorage.setItem(key,JSON.stringify(elements));

    //Devolver objeto guardado

    return element;

    
}