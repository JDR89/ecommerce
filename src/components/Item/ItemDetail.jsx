

import { Caroulsel } from "./Caroulsel";
import { ItemCount } from "./ItemCount";




export const ItemDetail = ({ item }) => {
  
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 container mx-auto my-auto shadow-xl">

      <div>
        <Caroulsel item={item}/>
      </div>

      <div className="grid-cols-1 m-3">
        <h2 className="card-title text-2xl">{item.name}</h2>
        <span>${item.precio}</span>

        <ItemCount item={item} />

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quae natus cumque. Reiciendis error minus provident asperiores eaque omnis, culpa ea nesciunt tempore natus iusto facere maxime! Quidem, optio at.
        </p>
        
      </div>

    </div>
  );
};
