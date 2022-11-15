import ExperienceList from "./ExperienceList"
import { Link} from "react-router-dom"
import imgHeader from "../assets/img-header.jpg"
import imgMadrid from "../assets/madrid.jpg"
import imgSevilla from "../assets/sevilla.jpg"
import "../styles/home.css"

function Home() {
  return (
    <div className="cont-img-header">
      <img src={imgHeader} alt="experience"/>
        <div className="description-page">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="cont-seccion">
        <div className="title-seccion">
          <h3>Featured places
            <span className="view-all" id="view-all-places"> see all</span>
            </h3>
        </div>
        <div className="items-seccion">
          <div className="item-seccion">
            <div className="info-item-seccion"></div>
            <img src={imgSevilla} alt="madrid-city" width="220px" className="img-item-seccion"/>
            <div className="name-city-item-seccion">Madrid</div>
          </div>
          <div className="item-seccion">
            <div className="info-item-seccion"></div>
            <img src={imgMadrid} alt="madrid-city" width="250px" className="img-item-seccion"/>
            <div className="name-city-item-seccion">Madrid</div>
          </div>
          <div className="item-seccion">
            <div className="info-item-seccion"></div>
            <img src={imgMadrid} alt="madrid-city" width="250px" className="img-item-seccion"/>
            <div className="name-city-item-seccion">Madrid</div>
          </div>
          <div className="item-seccion">
            <div className="info-item-seccion"></div>
            <img src={imgMadrid} alt="madrid-city" width="250px" className="img-item-seccion"/>
            <div className="name-city-item-seccion">Madrid</div>
          </div>
          
        </div>
      <h3>Experiences</h3>
      <ExperienceList/>
      </div>
      <div>
        <h3>Categories</h3>
      <div>
      <Link to ="">Art and Culture</Link>
      </div>
      <div>
      <Link to ="">Food</Link>
      </div>
      <div>
      <Link to ="">Photography</Link>
      </div>
      <div>
      <Link to ="">Adventure</Link>
      </div>
      <div>
      <Link to ="">Entertainment</Link>
      </div>
      <div>
      <Link to ="">Dark Tourist</Link>
      </div>
      </div>
      </div>

  )
}

export default Home