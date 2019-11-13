import React from 'react';
import './Basket.css';

function Basket({content}){
  return(
    <div>
      {content && <figure className="basketBlock">
        {content.map((picture) => 
          <img className="basketPicture" src={picture} alt=""/>)}
      </figure>
      }
    </div>
  );
}




export default Basket;