import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <div className="Header">
      <div className="titre">PicSpace</div>
        <div className="HeaderLinks">
          <div className="Headerlink"><Link className="link" to="/">Home</Link></div>
          <div className="Headerlink"><Link className="link" to="/Basket">Ma selection</Link></div>
        </div>
    </div>

  )
}

export default Header;