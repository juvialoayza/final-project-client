import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { experienceListService } from "../services/experience.services"


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
    <div >
      {list.map((eachExperience) => {
        return (
          <p key={eachExperience._id}>
              <div className="card-main">
                <img className="card-photo" src={eachExperience.photoExperience} alt="photo-experience" />
                <div className="card-desc">
            <Link to={`/experiences/${eachExperience._id}`}>
                  <p className="card-title">{eachExperience.name}</p>
                </Link>
                <p className="card-place">{eachExperience.place}</p>
                <p className="card-price"><span className="bold">€{eachExperience.price}/ </span><span>person</span></p>
                
              </div>
            </div>
          </p>
        )
      })}

    </div>
  )
}

export default ExperienceList