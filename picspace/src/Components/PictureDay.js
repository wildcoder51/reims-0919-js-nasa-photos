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
    axios.get('https://api.nasa.gov/planetary/apod?api_key=7GoNhxiPhapOpE2LfRVHIVFHAHh9be2lUYlSpbSR')
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
        <div className="blocPictureDay">
          <div className="pictureDay">
            <img className="pictureDayImg" src={this.state.hdurl} 
            alt={this.state.title} />
          </div>
          <div className="description">
            <h3>{this.state.title}</h3>
            <p>{this.state.date}</p>
            <p className="explanation"><span>Description : </span>{this.state.explanation}</p>
            <button className="fullScreenButton" onClick={this.goFull}>Go Fullscreen</button>
            <Fullscreen
              enabled={this.state.isFull}
              onChange={isFull => this.setState({isFull})}>
                {this.state.isFull 
                ?
                  <img  src={this.state.hdurl} alt=''/>
                :
                  <></>
              }
            </Fullscreen>
          </div>
        </div>
      </div>
    )
  }
}


export default PictureDay;
