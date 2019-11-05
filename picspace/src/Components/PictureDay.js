import React from 'react';
import axios from 'axios';
import './PictureDay.css';

//importer la photo du jour à partir de l'API de la nasa
//lien de l'API https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY (ne pas oublier la clé fournie par mail)
class PictureDay extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      hdurl : "",
      title : "",
      date : "",
      explanation : "",
    };
  }

  picturesAPI=() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        this.setState({
          hdurl: response.data.hdurl,
          title: response.data.title,
          date: response.data.date,
          explanation: response.data.explanation,
        });
      });
  };
  
  render(){
    return (
      <div>
      <article>
        <figure>
          <img src={this.state.hdurl} 
          alt={this.state.title} />
        </figure>
        <div>
          <h2>{this.state.title}</h2>
          <p>{this.state.date}</p>
          <p><span>Description : </span>{this.state.explanation}</p>
        </div>
      </article>

        <div>
        <button type="button" onClick={this.picturesAPI}>Get picture day</button>
        </div>  
        </div>
    )
  }
}


export default PictureDay;
