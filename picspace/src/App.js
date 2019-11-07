import React from 'react';
import './App.css';
import RandomPictures from './Components/RandomPictures';
import PictureDay from './Components/PictureDay';

class App extends React.Component {
  constructor (props){
    super (props);
    this.state = {
    };
  }

  render (){
    return (
      <div className="App">
        <h1>Picture of the Day</h1>
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
}


export default App;
