import { useState } from "react";
import {Link} from "react-router-dom"



export const Card = ({prendas}) => {
  
  
  const [hovered, setHovered] = useState(false);
  
  const toggleHover = () => {
    setHovered(!hovered);
  };


  const{name,urlImage,urlImageDos,precio,id}=prendas
  

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">

      <figure>
        <Link to={`/producto/${id}`}>
        <img
          src={hovered? urlImageDos: urlImage}
          alt="ropa"
          className="cursor-pointer"
          onMouseEnter={toggleHover} onMouseLeave={toggleHover}
        />
        </Link>
      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">${precio}</div>
        </h2>

      </div>

    </div>
  );
};
