import React from 'react';
import './Navbar.css';



function Navbar() {
  return(
    <div className='Navbar'>
      <p><span className="titre"><em>PicSpace</em></span></p>
      <button className="panier">Ma selection</button>
    </div>
  );
}



export default Navbar;