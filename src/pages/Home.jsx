import ExperienceList from "./ExperienceList"
import { Link } from "react-router-dom"
import imgHeader from "../assets/photo-grid.png"
import imgMadrid from "../assets/madrid.png"
import imgSevilla from "../assets/sevilla.jpg"
import imgBarcelona from "../assets/barcelona.png"
import imgValencia from "../assets/valencia.png"
import imgExpFood from "../assets/experience_food.jpg"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import "../styles/home.css"
// import {useState} from "react"
// import {experiencesByCategory} from "../services/experience.services"


function Home() {


  return (
    <div className="cont-img-header">
      <div className="description-page">
        <p>We will show you hidden gems and tell you stories that only a local would know, <b>in a different way!</b></p>
      </div>
      <div>
      <img src={imgHeader} alt="experience" width="95%" id="image-home" />
      </div>
      <div className="cont-seccion">
        <div className="title-seccion">
          <h3>Featured places</h3>
        </div>
        <div className="items-seccion">
          <div>
            <img src={imgMadrid} alt="madrid-city" width="250px" className="img-item-seccion" />
            <div className="name-city-item-seccion">Madrid</div>
          </div>
          <div>
            <img src={imgSevilla} alt="sevilla-city" width="250px" className="img-item-seccion" />
            <div className="name-city-item-seccion">Sevilla</div>
          </div>
          <div>
            <img src={imgBarcelona} alt="barcelona-city" width="250px" className="img-item-seccion" />
            <div className="name-city-item-seccion">Barcelona</div>
          </div>
          <div>
            <img src={imgValencia} alt="valencia-city" width="250px" className="img-item-seccion" />
            <div className="name-city-item-seccion">Valencia</div>
          </div>

        </div>
        <div className="cont-seccion">
          <div className="title-seccion">
          </div>
          <div className="card-main">
            <br />
            <h2>Experiences</h2>
            <ExperienceList />
          </div>
        </div>
      </div>
      {/* <div>
        <h2>Choose a category</h2>
        <div>
          <Link to="">Art and Culture</Link>
        </div>
        <div>
          <Link to="">Food</Link>
        </div>
        <div>
          <Link to="">Photography</Link>
        </div>
        <div>
          <Link to="">Adventure</Link>
        </div>
        <div>
          <Link to="">Entertainment</Link>
        </div>
        <div>
          <Link to="">Dark Tourist</Link>
        </div>
      </div> */}
    </div>

  )
}

export default Home