import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="shadow-md p-5">
        <ul className="flex justify-between  items-center ">
            <div>
                <p className="text-2xl font-bold text-purple-500">EmaJone</p>
            </div>
          <div className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-violet-400" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-violet-400" : ""
              }
            >
              Products
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-violet-400" : ""
              }
            >
              Dashboard
            </NavLink>
            
          </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
