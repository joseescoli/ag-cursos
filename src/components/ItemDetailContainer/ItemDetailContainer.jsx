import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { cursos } from '../ItemListContainer/cursos.js';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

const [item, setItem] = useState([])

  const { product } = useParams()

  useEffect(() => {
    
    const promesa = (condicion) => new Promise((resolve, reject) => {
      condicion ? resolve(cursos):reject("No posee los permisos necesarios")
    })

    // Promesa simulada con 2 segundos de interacción de red.
    setTimeout( () => {
      promesa(true)
      .then( 
        items => { 
        const filtro = items.find( prod => prod.id === parseInt(product) )
        setItem(filtro)
    } )
      .catch(error => console.error(error))
    }, 2000)

  }, [])

  console.log(item);

   return (
     <div className='items'>
          <ItemDetail item={item}/>
     </div>
   )
}