
import { Card } from "./Card"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection,getDocs} from 'firebase/firestore'
import { db } from "../../utils/firebase";


export const CardGrid = () => {
  
 const {genero}=useParams()
  const [data, setData] = useState([])
  

  useEffect(() => {
    const getData=async()=>{
      try {
        const queryRef= collection(db,"items")
        const resp = await getDocs(queryRef)
        const datos = resp.docs.map(doc=>{
          const newDoc ={
            ...doc.data(),
            id:doc.id
          }
          
          return newDoc
        })
        

        if(!genero){
                setData(datos)
              }else{
               const nuevaLista = datos.filter(item=>item.genero === genero)
               setData(nuevaLista)
              }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [genero])
  
  
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 gap-y-10 mt-16">
      {
        data.map(prenda=>(<Card key={prenda.id} prendas={prenda}/>))
      }
    </div>
  )
}
