import React from 'react';
import './Basket.css';

function Basket({content}){
  return(
    <div>
      <h2>Ma sélection</h2>
      {content && <figure className="basketBlock">
        {content.map((picture) => 
          <img className="basketPicture" src={picture} alt=""/>)}
      </figure>
      }
    </div>
  );
}




export default Basket;