import {useEffect} from 'react'
import {useState} from 'react'
import { Navigate } from 'react-router-dom'
import {createItineraryService} from '../services/itinerary.services'

function ItineraryCreate() {
  const [nameInput, setNameInput] = useState("")
  const [placeInput, setPlaceInput] = useState("")
  const [dateInput, setDateInput] = useState("")

  const handleNameChange = (event) => setNameInput(event.target.value)
  const handlePlaceChange = (event) => setPlaceInput(event.target.value)
  const handleDateChange = (event) => setDateInput(event.target.value)

  const handleSubmit = async(event) => {
    event.preventDefault()

    const newItinerary = {
      name: nameInput,
      place: placeInput,
      date: dateInput
    }
    try{
      await createItineraryService(newItinerary)
      navigate("/profile")

    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <h3>Create itinerary</h3>
      <form>
        <label htmlFor="place">Where to?</label>
        <select name="place">
        <option selected>Tell us where you want to go</option>
        <option value={placesList}></option>
        </select>
      </form>
      </div>
  )
}

export default ItineraryCreate