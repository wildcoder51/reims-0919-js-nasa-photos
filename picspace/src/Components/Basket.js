import React from 'react';
import './Basket.css';

function Basket({content}){
  return(
    <div>
      {content && <ul>
        {content.map((picture) => <li>{picture}</li>)}
      </ul>}
    </div>
  );
}




export default Basket;