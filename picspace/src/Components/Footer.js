import React from 'react';
import './Footer.css';



const Footer = () => {
  return (

    <div className="footer">
      <div >
        <p>Website created by :</p>
      </div>

      <div className="listProfile">

        <div className="personnalProfile">
          <p>Sylvie :</p>
          <a href="https://github.com/R1SsophieFEHU"><img className="logoGithub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="Sylvie"/></a>
          <a href="https://github.com/R1SsophieFEHU"><img className="logoLinkedin" src="https://culliganrecrute.fr/wp-content/uploads/2018/01/linkedin-icon.png" alt="Sylvie"/></a>
        </div>

        <div className="personnalProfile">
          <p>Maxime Féry:</p>
          <a href="https://github.com/Max2810"><img className="logoGithub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="Maxime"/></a>
          <a href="https://www.linkedin.com/in/maxime-f%C3%A9ry-450769192/"><img className="logoLinkedin" src="https://culliganrecrute.fr/wp-content/uploads/2018/01/linkedin-icon.png" alt="Maxime"/></a>
        </div>

        <div className="personnalProfile">
          <p>Jessy Pinchon:</p>
          <a href="https://github.com/R1SsophieFEHU"><img className="logoGithub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="Jessy"/></a>
          <a href="https://github.com/R1SsophieFEHU"><img className="logoLinkedin" src="https://culliganrecrute.fr/wp-content/uploads/2018/01/linkedin-icon.png" alt="Jessy"/></a>
        </div>

        <div className="personnalProfile">
          <p>Sophie Trochain:</p>
          <a href="https://github.com/R1SsophieFEHU"><img className="logoGithub" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png" alt="Sophie"/></a>
          <a href="https://github.com/R1SsophieFEHU"><img className="logoLinkedin" src="https://culliganrecrute.fr/wp-content/uploads/2018/01/linkedin-icon.png" alt="Sophie"/></a>
        </div>
      </div>

    </div>


  )
}

export default Footer;