import React from 'react';
import './App.css';
import RandomPictures from './Components/RandomPictures';
import PictureDay from './Components/PictureDay'


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

class App extends React.Component {
  constructor (props){
    super (props) 
    this.state = {
      isSelected : false
    }
  }

render (){
  return (
    <div className="App">
        <h1>Picture of the Day</h1>
        <section className="picture-of-day"> 
          <PictureDay />
        </section>
        <section className="random-pictures">

        </section>
       <h2> Random Pictures</h2>
       <section>
         <RandomPictures randomPictures={randomPictures}
         isSelected={this.state.isSelected}/>
       </section>
     
    </div>
  );
}
}


export default App;
