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
         <div className="card-main">
         <img className="card-photo" src={experienceInfo.photoExperience} alt="photoExperience" />
              <div className="card-desc">
                <p className="card-title">{experienceInfo.name}</p>
                <p>Created by: {experienceInfo.creator[0].firstName} {experienceInfo.creator[0].lastName}</p>
                <p>{experienceInfo.duration}</p>
                <p className="card-price"><span className="bold">€{experienceInfo.price}/ </span><span>person</span></p>
                <p>{experienceInfo.description}</p>
         </div>
    </div>
    </div>
  )
}

export default ExperienceDetail