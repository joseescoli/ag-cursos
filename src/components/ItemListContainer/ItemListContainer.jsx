import '../App.css';
import { useState, useEffect } from 'react';
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import { cursos } from './cursos';


export const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])
const { category } = useParams()

  useEffect(() => {

    const promesa = (condicion) => new Promise((resolve, reject) => {
      condicion ? resolve(cursos):reject("No posee los permisos necesarios")
    })

    if ( category ) {
      
      setTimeout( () => {
        promesa(true)
        .then( productos => {  
          
          const productosFiltrados = productos.filter(prod => prod.nombreCat === category).filter(prod => prod.vacantes > 0 )
          setProductos(productosFiltrados)

         } )
        .catch(error => console.error(error))
      }, 2000)

    }
    else {
        // Promesa simulada con 2 segundos de interacción de red.
        setTimeout( () => {
          promesa(true)
          .then( productos => {  setProductos(productos) } )
          .catch(error => console.error(error))
        }, 2000)
    }

  }, [category])

   return (
     <main className='principal'>
        <h1>{greeting}</h1>
        <div className="listado">
          { <ItemList productos={productos} /> }
        </div>
     </main>
   )
}