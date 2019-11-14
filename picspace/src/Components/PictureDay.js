import React from 'react';
import axios from 'axios';
import './PictureDay.css';
import Fullscreen from "react-full-screen";


class PictureDay extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      hdurl : "",
      title : "",
      date : "",
      explanation : "",
      isFull: false,
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
  goFull = () => {
    this.setState({ isFull: true });
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
          <button onClick={this.goFull}>Go Fullscreen</button>
          <Fullscreen
                enabled={this.state.isFull}
                onChange={isFull => this.setState({isFull})}>
                  {this.state.isFull 
                  ?
                    <img style={{maxHeight: '1920px' , maxWidth: '1080px'}} src={this.state.hdurl} alt=''/>
                  :
                    <></>
                 }
              </Fullscreen>
        </div>
      </article>
      </div>
    )
  }
}


export default PictureDay;
