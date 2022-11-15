import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import {experienceListService} from "../services/experience.services"


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

    } catch(error) {
        console.log(error)
    }
  }

  if (isFetching === true) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
        

        {list.map((eachExperience) => {
            return (
                <p key={eachExperience._id}>
                    <Link to={`/experiences/${eachExperience._id}`}>
                      <h4>{eachExperience.name}</h4>
                      </Link>
                      <h6>{eachExperience.place}</h6>
                      {/* <p>{eachExperience.description}</p> */}
                    
                </p>
            )
        })}

    </div>
  )
}

export default ExperienceList