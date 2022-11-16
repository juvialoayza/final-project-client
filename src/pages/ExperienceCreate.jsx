import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createExperienceService} from '../services/experience.services'


function ExperienceCreate(props) {
  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [creatorInput, setCreatorInput] = useState()
  const [placeInput, setPlaceInput] = useState("")
  const [priceInput, setPriceInput] = useState("")
  const [durationInput, setDurationInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  const [photoexperienceInput, setPhotoexperienceInput] = useState("")

  const handleNameChange = (event) => setNameInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleCreatorChange = (event) => setCreatorInput(event.target.value)
  const handlePlaceChange = (event) => setPlaceInput(event.target.value)
  const handlePriceChange = (event) => setPriceInput(event.target.value)
  const handleDurationChange = (event) => setDurationInput(event.target.value)
  const handleDateChange = (event) => setDateInput(event.target.value)
  const handlePhotoexperienceChange = (event) => setPhotoexperienceInput(event.target.value)

const handleSubmit = async (event) => {
  event.preventDefault()

  const newExperience= {
    name: nameInput,
    description: descriptionInput,
    creator: creatorInput,
    place: placeInput,
    price: priceInput,
    duration: durationInput,
    date: dateInput,
    photoexperience: photoexperienceInput
  }
  try {
    await createExperienceService(newExperience)
    navigate("/profile")
    
  } catch(error) {
    console.log(error)
  }
}



  return (
    <div>
        <h3>Create new experience</h3>
        <form>
            <label htmlFor="name">Experience Name:</label>
            <input type="text" name="name" value={nameInput} onChange={handleNameChange} />
            <br />
            <label htmlFor="description">Tell us about your experience:</label>
            <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
            <br />
            <label htmlFor="place">Tell us about your experience:</label>
            <input type="text" name="place" value={placeInput} onChange={handlePlaceChange} />
            <br />
            <label htmlFor="duration">Duration:</label>
            <input type="text" name="duration" value={durationInput} onChange={handleDurationChange} />
            <br />
            <label htmlFor="date">Dates:</label>
            <input type="text" name="date" value={dateInput} onChange={handleDateChange} />
            <br />
            <label htmlFor="photoexperience">Your images:</label>
            <input type="text" name="photoexperience" value={photoexperienceInput} onChange={handlePhotoexperienceChange} />
            <br />
            <button onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}

export default ExperienceCreate