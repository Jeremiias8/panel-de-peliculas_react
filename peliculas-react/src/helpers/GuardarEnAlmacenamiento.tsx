
export const GuardarEnAlmacenamiento = (clave, elemento) => {

   // conseguir los elementos que ya tenemos en el localStorage
   let elementos = JSON.parse(localStorage.getItem(clave));
   console.log(elementos);

   // comprobar si es un array
   if (Array.isArray(elementos)) {

     // añadir dentro del array un elemento nuevo
     elementos.push(elemento);
   } else {

     // crear un array con el nuevo elemento
     elementos = [elemento];
   }

   // guardar en el localStorage
   localStorage.setItem(clave, JSON.stringify(elementos));

   // devolver obj guardado
   return elemento;

}