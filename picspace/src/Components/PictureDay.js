import React from 'react';
import './PictureDay.css';

//importer la photo du jour à partir de l'API de la nasa
//lien de l'API https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY (ne pas oublier la clé fournie par mail)
const PictureDay = ({explanation, date, title, url}) =>{
  return (
    <article>
      <figure className='box-picture-day'>
        <img className ='img-picture-day' src={url} alt={title} />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>{date}</p>
        <p><span>Description : </span>{explanation}</p>
      </div>
    </article>
  )
}



export default PictureDay;
