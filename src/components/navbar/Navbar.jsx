import { Link } from "react-router-dom";

import { Toogle } from "./Toogle";
import { CartWidget } from "../cart/CartWidget";



export const Navbar = ({onChangeTheme,theme}) => {

    
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
            {/* icono cuando se hace mobile */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Menu botones cuando se hace mobile */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/productos/men">Men</Link>
            </li>
            <li>
              <Link to="/productos/women">Woman</Link>
            </li>
            <li>
              <Link to="/productos/kid">Kid</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl">
            <span className="font-medium text-xl">JDR |</span>
            <span className="font-normal text-base"> Shop</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Menu grande */}
        <ul className="menu menu-horizontal px-1">
            <li >
              <Link to="/productos/men" className={`hover:bg-gray-300 text-sm rounded-full ${theme==="halloween" && "hover:bg-warning"} `}>Men</Link>
            </li>
            <li >
              <Link to="/productos/women" className={`hover:bg-gray-300 text-sm rounded-full ${theme==="halloween" && "hover:bg-warning"} `}>Women</Link>
            </li>
            <li >
              <Link to="/productos/kid" className={`hover:bg-gray-300 text-sm rounded-full ${theme==="halloween" && "hover:bg-warning"} `}>Kid</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
          <CartWidget theme={theme}/>

          <Toogle onChangeTheme={onChangeTheme}/>
      </div>
    </div>
  );
};
