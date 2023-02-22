import "../styles/home.css"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/NavbarMenu"
import { experienceListService } from "../services/experience.services"
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function ExperienceList() {
  const navigate = useNavigate()

  // const {cityName} = useParams()

  const [list, setList] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getExperienceList()
  }, [])

  const getExperienceList = async () => {
    try {
      const response = await experienceListService()
      console.log(response)
      setList(response.data)
      setIsFetching(false)

    } catch (error) {
      console.log(error)
    }
  }

  if (isFetching === true) {
    return <h3>...buscando</h3>
  }

  return (
    <div className="items-experience-seccion">
      {list.map((eachExperience) => {
        return (
          <Card style={{ width: '18rem' }}>
          <p key={eachExperience._id}>
          <Card.Img variant="top" src={eachExperience.photoExperience} alt="photo-experience" />
              <Card.Body>
              <Card.Title><Link to={`/experiences/${eachExperience._id}`}>
                  <p>{eachExperience.name}</p>
                </Link></Card.Title>
                <p>{eachExperience.place}</p>
                <p><span className="bold">€{eachExperience.price}/ </span><span>person</span></p>
              </Card.Body>
          </p>
          </Card>
        )
      })}
    </div>
  )
}



export default ExperienceList