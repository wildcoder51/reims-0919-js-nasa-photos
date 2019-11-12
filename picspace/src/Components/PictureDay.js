import React from 'react';
import axios from 'axios';
import './PictureDay.css';


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
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APIKEY}`)
      .then(response => {
        this.setState({
          hdurl: response.data.hdurl,
          title: response.data.title,
          date: response.data.date,
          explanation: response.data.explanation,
        });
      });
  };
  
  componentDidMount(){
    this.picturesAPI();
  }

  render(){
    return (
      <div>
      <article>
        <figure className="pictureDay">
          <img className="pictureDayImg" src={this.state.hdurl} 
          alt={this.state.title} />
        </figure>
        <div className="description">
          <h2>{this.state.title}</h2>
          <p>{this.state.date}</p>
          <p className="explanation"><span>Description : </span>{this.state.explanation}</p>
        </div>
      </article>
      </div>
    )
  }
}


export default PictureDay;
