import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import {experienceDetailsService} from "../services/experience.services"

function ExperienceDetail() {
  const [experienceInfo, setExperienceInfo] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const [experienceId] = useParams()
  useEffect(() => {
    getInfoExperience()
  },[])
  const getInfoExperience = async () => {
    try {
      const response = await experienceDetailsService()
      console.log(response)
      setExperienceInfo(response.data)
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
        {experienceInfo.map((eachExperience) => {
         return(
          <p>{eachExperience.name}</p>
         )
        })}
    </div>
  )
}

export default ExperienceDetail