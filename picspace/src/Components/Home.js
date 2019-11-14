import React from 'react';
import RandomPictures from './RandomPictures';
import PictureDay from './PictureDay';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import './Home.css';


function Home({addBasketAndAlert}) {
  return(

    <div className="App">
    
      <h1><em>Picture of the Day</em></h1>
      <section className="picture-of-day"> 
        <PictureDay />
      </section>
      <hr/>
      <h2>Pictures from Hubble Space Telescope</h2>
      <h4>Notes (from Wikipedia) :</h4>
      <figure className="random-block-notes">
        <img className='hubble-miror' src='https://upload.wikimedia.org/wikipedia/commons/d/d6/Working_on_Hubble%27s_Main_Mirror_in_1990_22_lg_web.jpg' alt='' />
        <figcaption className='text-hubble'>The Hubble is a space telescope that was launched into low Earth orbit in 1990 and remains in operation.<br/>That’s not the first space telescope, but it is <span>one of the largest and most versatile</span>.
          <br/>Hubble features a <span>2.4-meter (7.9 ft) mirror</span>, and its four main instruments observe in <strong>the ultraviolet, visible, and near infrared</strong> regions of the electromagnetic spectrum.
          <br/><p>Learn more on <a className='link-hubble-text' href="https://hubblesite.org/">hubblesite.org</a></p>
        </figcaption>
      </figure>
      <section>
        <RandomPictures addBasketAndAlert={addBasketAndAlert} />
      </section>
      <ScrollUpButton/>
    </div>
  );
}
    
    
    
export default Home;