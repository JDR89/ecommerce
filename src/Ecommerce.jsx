import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar"
import { CardGrid } from "./components/cards/CardGrid";
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Footer } from "./components/navbar/Footer";

import { CartProvider } from "./context/cartContext";
import { CartContainer } from "./components/cart/CartContainer";







export const Ecommerce = () => {

  //Cambio de theme
  const [theme, setTheme] = useState("lofi");

  const onChangeTheme=()=>{
    setTheme(theme === "lofi" ? "halloween" : "lofi");
  }
  
 
  
  return (
   
   <CartProvider>
   <BrowserRouter>

      <div data-theme={theme}>

       <Navbar onChangeTheme={onChangeTheme} theme={theme}/>

       <Routes>
          <Route path="/" element={<CardGrid/>}/>
          <Route path="/productos" element={<CardGrid/>}/>
          <Route path="/productos/:genero" element={<CardGrid/>}/>
          <Route path="/producto/:productoId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
       
          <Route path="/*" element={<CardGrid/>}/>
       </Routes>
        
       <Footer/>
       
     </div>

   </BrowserRouter>
   </CartProvider>
   
  
  )
}
