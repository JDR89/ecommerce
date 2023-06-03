
import { productos } from "../data/productos"

export const getRopa=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err=>console.log(err))
    }, 1000);
})