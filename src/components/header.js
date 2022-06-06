import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {
  return (
    <div className="header"> 
       
      <div>
        <NavLink to="/" exact className='links' activeClassName="red">
          Popular
        </NavLink>
        <NavLink to="/battle" className='links' activeClassName="red">
          Battle
        </NavLink>
      </div>

      <i class="fas fa-lightbulb"></i>
    </div>
  );
}
