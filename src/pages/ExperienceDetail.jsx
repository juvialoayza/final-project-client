import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import {experienceDetailsService} from "../services/experience.services"

function ExperienceDetail() {
  const [experienceInfo, setExperienceInfo] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  // console.log(experienceInfo)
  const {experienceId} = useParams()

  useEffect(() => {
    getInfoExperience()
  }, [experienceId])

  const getInfoExperience = async () => {
    try {
      const response = await experienceDetailsService(experienceId)
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
       
         <h2>Details</h2>
          <p>{experienceInfo.name}</p>
          <p>{experienceInfo.description}</p>
          <p>{experienceInfo.price}</p>
          <p>{experienceInfo.duration}</p>
          <p>{experienceInfo.creator[0].firstName} {experienceInfo.creator[0].lastName}</p>
       
    </div>
  )
}

export default ExperienceDetail