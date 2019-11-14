import React from 'react';
import axios from 'axios';
import Fullscreen from "react-full-screen";
import './RandomPictures.css';


class RandomPictures extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name : '',
      file_url: '',
      arrayPictures:[],
      isFull: false,
      fullscreenPicture: '',
    };
    this.getIdPicture = this.getIdPicture.bind(this);
  }
 
  getIdPicture() {
    axios.get('http://hubblesite.org/api/v3/images/all')
      .then(response => 
        response.data.forEach(element => {
          const hubbleObject = {}
          hubbleObject.id = element.id
          axios.get(`http://hubblesite.org/api/v3/image/${element.id}`)
            .then(responseFromImage => {
              if (responseFromImage.data.image_files) {
                hubbleObject.url = `http:${responseFromImage.data.image_files[0].file_url}`
              }
              if (responseFromImage.data.name) {
                hubbleObject.name = responseFromImage.data.name
              }
              this.setState(prevState => ({arrayPictures: [...prevState.arrayPictures, hubbleObject]}))
            });
        })
      )
  }
 

  componentDidMount() {
    this.getIdPicture();
  }

  goFull = (picture) => {
    this.setState({ isFull: true });
    this.setState({ fullscreenPicture: picture });
  }

  render() {
    return (
      <div>
        <Fullscreen
                  enabled={this.state.isFull}
                  onChange={isFull => this.setState({isFull})}>
                  {this.state.isFull 
                    ?
                      <img style={{maxHeight: '1920px' , maxWidth: '1080px'}} src={this.state.fullscreenPicture} alt=''/>
                    
                    :
                      <></>
                  }
        </Fullscreen>
        <article className="RandomPictures">
          {
            this.state.arrayPictures.map(picture =>
              (<figure className='box-random-pictures' key={picture.id} >
                <p className='title-random-pictures'>Name{picture.name}</p>
                <img className='img-random-pictures' src ={picture.url} alt={picture.name}/>
                <button className='img-checkbox'  onClick={()=>this.props.addBasketAndAlert(picture.url)} >Add Pics</button>
                <button onClick={()=>this.goFull(picture.url)}>Go Fullscreen</button>
              </figure>
              )
            )
          }
        </article>
      </div>
    );
  }
}
export default RandomPictures;
