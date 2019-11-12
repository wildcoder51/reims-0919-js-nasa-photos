import React from 'react';
import './Basket.css';

function Basket({content}){
  return(
    <div>
      {content && <ul>
        {content.map((picture) => 
        <img src={picture} alt=""/>)}
      </ul>}
    </div>
  );
}




export default Basket;