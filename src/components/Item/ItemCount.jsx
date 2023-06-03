import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"



export const ItemCount = ({item}) => {

    const{AddItem}=useContext(cartContext)

    const onAddItem = () =>{
      const newItem ={
        ...item,
        cantidad:counter
      }
      AddItem(newItem)
    }

    const [counter, setCounter] = useState(1)

    const sumar=()=>{
        setCounter(counter + 1)
    }

    const restar=()=>{
        setCounter(counter - 1)
    }

    


  return (
    <div>

      <div>
        <h2>Amount</h2>
      </div>

      <div>
        <button 
         className=''
         disabled={counter <= 1} 
         onClick={restar}
         
         >
          -
          </button>
        <span>{counter}</span>
        <button onClick={sumar}>+</button>
      </div>

      <div>
      <div className="btn-group ">
        <button className="focus:bg-gray-500 btn">XS</button>
        <button className="focus:bg-gray-500 btn">S</button>
        <button className="focus:bg-gray-500 btn">M</button>
        <button className="focus:bg-gray-500 btn">L</button>
      </div>
      </div>

       <div>
         <button 
         className='btn btn-outline w-full mt-3 border-1 rounded-full'
         onClick={onAddItem}
         
         >
          Add to cart
         </button> 
         
       </div> 

    </div>
  );
}
