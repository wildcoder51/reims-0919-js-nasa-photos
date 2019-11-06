import React from "react";
import axios from 'axios';
import './RandomPictures.css';

class RandomPictures extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name :"",
      url:"",
      arrayPictures: [],
    }
  this.getRandomPictures = this.getRandomPictures.bind(this);
  }

  getRandomPictures() {
    // Send the request
    axios.get('http://hubblesite.org/api/v3/images/all')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {console.log(data);
      });
  
    };
  

  componentDidMount() {
    this.getRandomPictures()
  }

  // listOfPictures = (picture) =>{
  //   return (
  //     <RandomPictures name={picture.name} url={picture.url}/>
  //   )
  // }

  

  render() {

    return (
      <article className="RandomPictures">
        {
        this.state.arrayPictures.map(picture => 
        (<figure className='box-random-pictures'>
        <img className='img-random-pictures' src ={picture.url} alt={picture.name}/>
        </figure>
            )
          )
        }
      </article>
    );
  }
}
export default RandomPictures;
