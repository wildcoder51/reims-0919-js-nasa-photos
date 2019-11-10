import React from 'react';
import RandomPictures from './RandomPictures';
import PictureDay from './PictureDay';


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
      <h2><em>Random Pictures</em></h2>
      <section>
        <RandomPictures />
      </section>
    </div>
  );
}
    
    
    
export default Home;