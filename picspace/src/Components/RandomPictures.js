import React from "react";
import './RandomPictures.css';

const RandomPicture = ({randomPictures}) => {
  return (
    <article className="RandomPictures">
      {
        randomPictures.map(
          picture => (
            <figure className="box-random-pictures">
              <img className="img-random-pictures" src ={picture.hdurl} alt="spaceCapture"/>
            </figure>
          )
        )
      }
    </article>
      
  )
}

export default RandomPicture;
