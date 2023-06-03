import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {

  // LISTA DE CARRITO
  const [productCart, setProductCart] = useState([])


  const isInCart=(id)=>{
    const existe = productCart.some(e=>e.id === id)
    return existe
  }

  const AddItem=(product)=>{

    const newList = [...productCart]

    if(isInCart(product.id)){
      const productIndex = productCart.findIndex(item => item.id === product.id)
      newList[productIndex].cantidad = newList[productIndex].cantidad + product.cantidad
      setProductCart(newList)
    }
    else{
      setProductCart([...productCart,product])
    }
  }

  const removeItem =(id)=>{
    const newList = productCart.filter(item=>item.id !== id)
    setProductCart(newList)
  }

  const clearCart=()=>{
    setProductCart([])
  }

  const onTotalPrice=()=>{
    const totalPrecio = productCart.reduce((acc, num)=>acc + (num.precio)*num.cantidad,0)
    return totalPrecio
  }
  
  const onCantidad = () =>{
    const totalCantidad = productCart.reduce((acc,num)=>acc + num.cantidad,0)
    return totalCantidad
  }
    

  return (
    <cartContext.Provider value={{productCart,AddItem,removeItem,clearCart,isInCart,onCantidad,onTotalPrice}} >
      {children}
    </cartContext.Provider>
  );
};
