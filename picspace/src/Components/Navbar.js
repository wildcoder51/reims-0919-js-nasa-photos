import React from 'react';
import './Navbar.css';
import Basket from './Basket';



function Navbar() {
  return(
    <div className='Navbar'>
      <p><span className="titre"><em>PicSpace</em></span></p>
      <button className="panier"><Basket />My selection</button>
    </div>
  );
}



export default Navbar;