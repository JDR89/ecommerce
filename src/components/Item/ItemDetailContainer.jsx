
import { useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import {doc,getDoc} from "firebase/firestore"
import { db } from "../../utils/firebase"


export const ItemDetailContainer = () => {
  
const [item, setItem] = useState({})
const {productoId}=useParams()



// NO NECESITO HACER UN MAP PORQUE SOLO ESTOY RECIBIENDO UN DOCUEMNTO DE FIREBASE
  useEffect(() => {
    const queryRef = doc(db,"items",productoId)
    getDoc(queryRef).then(resp=>{
      const newDoc = {
        ...resp.data(),
        id:resp.id
      }
      setItem(newDoc)
    })
    
  }, [productoId])
  


  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}
