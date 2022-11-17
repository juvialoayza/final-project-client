import React from 'react'
import { useEffect, useState } from "react"
import {showMyItinerary} from "../services/profile.services"
import { useNavigate, Link } from "react-router-dom"

function MyTrips() {
  const navigate = useNavigate()

  const [details, setDetails] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
  getData()
  }, [])

  const getData = async (event) => {
    
    try {
      const response = await showMyItinerary()
      console.log(response)
      setDetails(response.data)
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
      {details.map((eachExperience) => {
        return (
          <p key={eachExperience._id}>
      <><h3>{eachExperience.name} </h3>
      {/* <img src={eachExperience.creator.photoExperience} alt="photo-experience" width={90} /> */}
      <p>{eachExperience.place}</p>
      <p>Experience by: {eachExperience.creator.firstName} {eachExperience.creator.lastName}</p></>
      </p>
        )
      })}
      
    </div>
  )
}

export default MyTrips