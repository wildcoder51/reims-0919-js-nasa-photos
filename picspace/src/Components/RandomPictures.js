import React from 'react';
import axios from 'axios';
import './RandomPictures.css';


class RandomPictures extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name : '',
      file_url: '',
      arrayId: [],
      arrayPictures:[],
    };
    this.getIdPicture = this.getIdPicture.bind(this);
  }
 
  getIdPicture() {
    let tempArray = [];
    axios.get('http://hubblesite.org/api/v3/images/all')
      .then(response => {
        for(let i = 0; i < response.data.length; i++) {
          this.state.arrayId.push(response.data[i].id);
        }
       
        for(let y = 0; y < this.state.arrayId.length; y++) {
          axios.get(`http://hubblesite.org/api/v3/image/${this.state.arrayId[y]}`)
            .then(response => {
              if (response.data.image_files) {
                tempArray.push(`http://${response.data.image_files[0].file_url}`);
                this.setState({ arrayPictures: tempArray});
              }
            });
        }
      });     
  }
 

  componentDidMount() {
    this.getIdPicture();
  }

  render() {
    return (
      <article className="RandomPictures">
        {
          this.state.arrayPictures.map(picture =>
            (<figure className='box-random-pictures' key={picture} >
              <img className='img-random-pictures' src ={picture} alt={picture}/>
              <button className='img-checkbox'  onClick={()=>this.props.addBasketAndAlert(picture)} >Ajouter au panier</button>
            </figure>
            )
          )
        }
      </article>
    );
  }
}
export default RandomPictures;
