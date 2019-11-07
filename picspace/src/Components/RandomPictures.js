import React from "react";
import axios from 'axios';
import './RandomPictures.css';

/*
const randomPictures = [{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1909/McloudsCarina_Hubble_1080.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1910/MilkyWaySaltFlat_Huerta_960_annotated.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1910/BabyBinary_Alma_960.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1910/earth_cassinimessenger_1024c.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1909/Pelican_Akar_960.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1909/McloudsCarina_Hubble_1080.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1910/M31After_Scherer_960.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
},
{
  "copyright": "Sergio Kaminsky",
  "date": "2019-10-24",
  "explanation": "Light-years across, this suggestive shape known as the Seahorse Nebula appears in silhouette against a rich, luminous background of stars. Seen toward the royal northern constellation of Cepheus, the dusty, obscuring clouds are part of a Milky Way molecular cloud some 1,200 light-years distant. It is also listed as Barnard 150 (B150), one of 182 dark markings of the sky cataloged in the early 20th century by astronomer E. E. Barnard. Packs of low mass stars are forming within from collapsing cores only visible at long infrared wavelengths. Still, colorful stars in Cepheus add to the pretty, galactic skyscape.",
  "hdurl": "https://apod.nasa.gov/apod/image/1909/PlutoTrueColor_NewHorizons_960.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Dark Seahorse in Cepheus",
  "url": "https://apod.nasa.gov/apod/image/1910/Barnard150Seahorse1024.jpg"
}

]
*/

class RandomPictures extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: "",
      name : "",
      file_url: "",
      arrayId: [],
      arrayPictures:[],
      onSelect : false,
    }
    this.getIdPicture = this.getIdPicture.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }
 
  getIdPicture() {
    let tempArray = [];
    // Send the request
    axios.get('http://hubblesite.org/api/v3/images/all')
      // Extract the DATA from the received response
      .then(response => {
        for(let i = 0; i < response.data.length; i++) {
          this.state.arrayId.push(response.data[i].id);
        };
       
        for(let y = 0; y < this.state.arrayId.length; y++) {
          axios.get(`http://hubblesite.org/api/v3/image/${this.state.arrayId[y]}`)
          .then(response => {
            if (response.data.image_files !== undefined) {
              tempArray.push(`http://${response.data.image_files[0].file_url}`);
              this.setState({ arrayPictures: tempArray});
            }
          })
        };
      });     
  };
 

  componentDidMount() {
  this.getIdPicture()
  }
  // handleClick = (onSelect) =>{
  //   this.setState({
  //     onSelect : !this.state.onSelect
  //   })
  // }


  render() {
 
    return (
      <article className="RandomPictures">
      {
      this.state.arrayPictures.map(picture =>
      //randomPictures.map(picture => 
      (<figure className='box-random-pictures'>
      <img className='img-random-pictures' src ={picture} alt={picture.name}/>
      <label class="container">Sélection<input className='img-checkbox' type='checkbox' onClick={this.handleClick} /></label>
      </figure>
          )
        )
      }
    </article>
    );
  }
}
export default RandomPictures;