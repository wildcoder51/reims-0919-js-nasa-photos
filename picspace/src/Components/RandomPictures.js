import React from "react";
import axios from 'axios';
import './RandomPictures.css';

class RandomPictures extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: "",
      name : "",
      file_url: "",
      arrayId: [],
      arrayPictures:[],
    }
  this.getIdPicture = this.getIdPicture.bind(this);
  }

  getIdPicture() {
    // Send the request
    axios.get('http://hubblesite.org/api/v3/image/4574')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data =>{ 
        console.log (arrayId)
        this.setState({
        arrayId : data});
      });
  };

  // getRandomPictures() {
  //   // Send the request
  //   axios.get('http://hubblesite.org/api/v3/image/')
  //     // Extract the DATA from the received response
  //     .then(response => response.data)
  //     // Use this data to update the state
  //     .then(data =>{ 
  //       this.setState({
  //       arrayPictures : data});
  //     });
  // };
  

  // componentDidMount() {
  //   this.getRandomPictures()
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
