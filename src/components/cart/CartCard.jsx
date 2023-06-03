
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
const CartCard = () => {

  const{productCart,removeItem}=useContext(cartContext)

  return (
    <>

    {
      productCart.length === 0 ? <h2 className="">El carrito esta vacio</h2>
      : (
        productCart.map(item =>(
          <div key={item.id} className="card card-side bg-base-100 mt-2 px-3">
        
          <img
            src={item.urlImage}
            alt="prenda"
            className="object-cover h-28 w-28 sm:object-cover sm:h-48 sm:w-48 my-auto "
          />
        
        <div className="card-body">
          <h2 className="card-title flex">{item.title} <span className="ml-auto me-3">x{item.cantidad}</span> </h2>
          <p>Size: <span>M</span></p>
          <div className="card-actions justify-end flex flex-col ml-auto">
            <span className="mb-auto">${item.precio}</span>
            <button
             onClick={()=>removeItem(item.id)}
             className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
        ))
      )
    }
  
  </>
  );
};

export default CartCard;
