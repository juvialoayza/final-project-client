import React from 'react'
import { useEffect, useState } from "react"
import { showMyItinerary } from "../services/profile.services"
import { useNavigate, Link } from "react-router-dom"
import {deleteItineraryService, updateItineraryService} from "../services/itinerary.services"

function MyTrips() {
  const navigate = useNavigate()

  const [details, setDetails] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [nameInput, setNameInput] = useState("")


  useEffect(() => {
    getData()
  }, [])

  const getData = async (event) => {

    try {
      const response = await showMyItinerary()
      console.log(response)
      setDetails(response.data)
      setNameInput(response.data.name)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleNameChange = (event) => setNameInput(event.target.value)

  const handleUpdate = async (event) => {

    event.preventDefault()
   
    const updatedTrips = {
      name: nameInput, 
    }
  
    try {
    await updateItineraryService(updatedTrips)
    navigate("/itinerary/my-itinerary/list")
    }catch(error) {
      navigate("/error")
    }
  
    }

  if (isFetching === true) {
    return <h3>...searching</h3>
  }

  const handleDelete = async () => {
    try {
      await deleteItineraryService()
      console.log("Deleted element")

      navigate("/itinerary/my-itinerary/list")
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }


  return (
    <div>
      {details.map((eachExperience) => {
        return (
          <p key={eachExperience._id}>
            <img src={eachExperience.photoExperience} width={90} />
            <h3>{eachExperience.name} </h3>
            <p>{eachExperience.place}</p>
            <p>{eachExperience.description}</p>
            <p>Experience by: {eachExperience.creator.firstName} {eachExperience.creator.lastName}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Edit</button>
          </p>
  )
})}
    </div >
  )
}

export default MyTrips