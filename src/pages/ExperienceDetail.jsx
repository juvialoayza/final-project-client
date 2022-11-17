import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import {experienceDetailsService, experienceToFavoritesService} from "../services/experience.services"

function ExperienceDetail() {
  const [experienceInfo, setExperienceInfo] = useState(null)
  const [addToFavorites, setAddToFavorites] = useState([])
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

  const addFavorites = async (event) => {
    try {
     const addFavoritesToUser = await experienceToFavoritesService()
     console.log(addFavoritesToUser)
     setAddToFavorites(addFavoritesToUser.data)
    }catch(error) {
      console.log(error)
    }
  }
  
  return (
    <div>
         <h2>Details</h2>
          <p>{experienceInfo.name}</p>
          <p>{experienceInfo.description}</p>
          <p>{experienceInfo.price}</p>
          <p>{experienceInfo.duration}</p>
          <p>{experienceInfo.creator.firstName} {experienceInfo.creator.lastName}</p>
          <img src={experienceInfo.photoExperience} alt="photo-experience" width={500} />
          <br />
          <button onClick={addFavorites}>Add to favorites</button>
          {/* <form>
          <label htmlFor="favorites">Add to favorites:</label>
          <input type="submit" value="♡" onChange={addFavorites}/>
          </form> */}
          
       
    </div>
  )
}

export default ExperienceDetail