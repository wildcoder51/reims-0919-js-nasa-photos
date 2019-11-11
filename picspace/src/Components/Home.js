import React from 'react';
import RandomPictures from './RandomPictures';
import PictureDay from './PictureDay';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import './Home.css';


function Home() {
  return(

    <div className="App">
    
      <h1><em>Picture of the Day</em></h1>
      <section className="picture-of-day"> 
        <PictureDay />
      </section>
      <section className="random-pictures">
        <br/>
        <hr/>
        <br/>
      </section>
      <h2><em>Random Pictures from : <a className="linkHubble" href="https://hubblesite.org/">Hubble Site</a></em></h2>
      <section>
        <RandomPictures />
      </section>
      <div>
        <ScrollUpButton/>
      </div>
    </div>
  );
}
    
    
    
export default Home;