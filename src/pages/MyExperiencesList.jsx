import React from 'react'
import {showUserExperiences} from "../services/profile.services"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"


function MyExperiencesList() {
  const navigate = useNavigate()
  

  const [experiences, setExperiences] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getData()
    }, [])

    const getData = async (event) => {
    
      try {
        const response = await showUserExperiences()
        console.log(response)
        setExperiences(response.data)
        setIsFetching(false)
      }catch(error) {
        navigate("/error")
      }
    }
  
    if (isFetching === true) {
      return <h3>...searching</h3>
    }

  return (
    <div>
         {experiences.map((eachExperience) => {
        return (
          <p key={eachExperience._id}>
      <><h3>{eachExperience.name} </h3>
      {/* <img src={eachExperience.creator.photoExperience} alt="photo-experience" width={90} /> */}
      <p>{eachExperience.place}</p>
      </>
      </p>
        )
      })}
    </div>
  )
}

export default MyExperiencesList
