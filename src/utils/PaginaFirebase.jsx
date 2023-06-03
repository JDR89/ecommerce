// import { collection,doc,getDoc,getDocs,query,where,limit } from "firebase/firestore" 
// import { useEffect, useState } from "react"
// import { db } from "./firebase"

// export const PaginaFirebase = () => {

//     const [arregloProductos, setArregloProductos] = useState([])

    // useEffect(() => {
    //   const getData = async() =>{

    //     const query = collection(db,"items")
    //     const response = await getDocs(query)
    //     const docs = response.docs

    //     const data = docs.map(doc=>{return {...doc.data(), id:doc.id}})
    //     setArregloProductos(data)

    //   }
    //   getData()
    // }, [])

    // useEffect(() => {
    //   const getDocumento = async()=>{
    //     const query = doc(db,"items","")
    //     const response = await getDoc(query)
    //     const producto ={
    //         ...response.data,
    //         id:response.id

    //     }
    //     getDocumento()
    //   }
    // }, [])
    
    // useEffect(() => {
    //   const getData = async() =>{

    //     const queryRef = query(collection(db,"items"),where("genero","==","women"))
    //     const response = await getDocs(queryRef)
    //     const docs = response.docs

    //     const data = docs.map(doc=>{return {...doc.data(), id:doc.id}})
    //     console.log(data)
    //     setArregloProductos(data)

    //   }
    //   getData()
    // }, [])

//   return (
//     <div>PaginaFirebase</div>
//   )
// }
