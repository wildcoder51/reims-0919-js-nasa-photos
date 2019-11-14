import React from 'react';
import './Basket.css';

function Basket({content}){
  return(
    <div>
      <div>
      {content && <figure className="basketBlock">
        {content.map((picture) => 
        <img className="basketPicture" src={picture} alt=""/>)}
      </figure>}
      </div >
      <div className="listButton">
      <button className="buttonClic"><img className="buttonPrint" src="http://stagewp.sharethis.com/wp-content/uploads/2017/05/Print.png" alt=""/></button>
      <button className="buttonClic"><img className="buttonDownload" src="https://img.vola.fr/d/icons/VOLA-WEB-PICTO-TELECHARGER-BLANC.png" alt=""/></button>
      <button className="buttonClic"><img className="buttonMail" src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-email-symbol-icon-png-image_3569787.jpg" alt=""/></button>
      </div>
    </div>
  );
}




export default Basket;