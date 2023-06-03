import { useContext, useState } from "react";
import CartCard from "./CartCard";
import { cartContext } from "../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const CartContainer = () => {
  const { clearCart, onCantidad, onTotalPrice, productCart } =
    useContext(cartContext);
  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        direccion: e.target[2].value,
        telefono: e.target[1].value,
        email: e.target[0].value,
      },
      items: productCart,
      total: (onTotalPrice() * 15) / 100 + onTotalPrice(),
    };

    // CREO REFERENCIA EN LA BASE DE DATOS
    const queryRef = collection(db, "orders");

    // AGREGAMOS EL DOC
    addDoc(queryRef, order).then((resp) => setIdOrder(resp.id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 container mx-auto">
      <div className="mt-16 sm:col-span-2">
        <CartCard />
      </div>

      <div className="mt-16 mx-auto">
        <div className="card w-96 bg-base-100 shadow-md border">
          <div className="card-body">
            <h2 className="card-title">Order</h2>
            <button onClick={clearCart}>X</button>
            <hr />
            <div className="grid grid-cols-2">
              <div>
                <p>N° products</p>
                <p>Subtotal</p>
                <p>Taxes (15%)</p>
                <p>Total:</p>
              </div>

              <div>
                <p>
                  <span>{onCantidad()}</span> products
                </p>
                <p>$ {onTotalPrice()}</p>
                <p>$ {(onTotalPrice() * 15) / 100}</p>
                <p>$ {(onTotalPrice() * 15) / 100 + onTotalPrice()}</p>
              </div>
            </div>

            <div className="card-actions justify-end"></div>
          </div>
        </div>

        {
          productCart.length >= 1 && (
            <div className="form-control mt-10 border p-6  flex flex-col justify-center" >

          <form  onSubmit={sendOrder}>
            <label className="input-group">
              <span className="w-1/3">Email</span>
              <input
                type="email"
                placeholder="info@site.com"
                className="input input-bordered"
              />
            </label>

            <label className="input-group mt-1">
              <span className="w-1/3">Telefono</span>
              <input
                type="text"
                placeholder="+54 35123132"
                className="input input-bordered"
              />
            </label>

            <label className="input-group mt-1">
              <span className="w-1/3">Direccion</span>
              <input
                type="text"
                placeholder="calle falsa 123"
                className="input input-bordered"
              />
            </label>

            <button
              disabled={onTotalPrice() <= 0}
              className="btn btn-primary w-2/3 mt-2 ms-12 flex justify-center"
              type="submit"
            >
              Checkout
            </button>
          </form>
        </div>
          )
        }
        


      </div>
    </div>
  );
};
