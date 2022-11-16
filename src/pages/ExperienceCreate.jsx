import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createExperienceService, placesListService } from '../services/experience.services'
import { uploadImageService } from "../services/upload.services"

function ExperienceCreate() {
  const navigate = useNavigate()

  const [allPlaces, setAllPlaces] = useState([])

  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [creatorInput, setCreatorInput] = useState()
  const [placeInput, setPlaceInput] = useState("")
  const [priceInput, setPriceInput] = useState("")
  const [durationInput, setDurationInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  const [photoExperienceInput, setPhotoExperienceInput] = useState("")
  const [isUploadingImage, setIsUploadingImage] = useState(false)

  const handleNameChange = (event) => setNameInput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionInput(event.target.value)
  const handleCreatorChange = (event) => setCreatorInput(event.target.value)
  const handlePlaceChange = (event) => setPlaceInput(event.target.value)
  const handlePriceChange = (event) => setPriceInput(event.target.value)
  const handleDurationChange = (event) => setDurationInput(event.target.value)
  const handleDateChange = (event) => setDateInput(event.target.value)
  const handlePhotoExperienceChange = (event) => setPhotoExperienceInput(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newExperience = {
      name: nameInput,
      description: descriptionInput,
      creator: creatorInput,
      place: placeInput,
      price: priceInput,
      duration: durationInput,
      date: dateInput,
      photoExperience: photoExperienceInput
    }
    try {
      await createExperienceService(newExperience)
      navigate("/profile")

    } catch (error) {
      console.log(error)
    }
  }

  const getAllPlaces = async (event) => {
    try {
      const allPlaces = await placesListService()
      console.log(allPlaces)
      setAllPlaces(allPlaces.data.placesList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPlaces()
  }, [])

  const handleUploadImage = async (event) => {
    setIsUploadingImage(true)
    console.log(event.target.files[0])

    const sendForm = new FormData()
    sendForm.append("image", event.target.files[0])

    try {
      const response = await uploadImageService(sendForm)
      console.log(response.data.image)
      setPhotoExperienceInput(response.data.image)
      setIsUploadingImage(false)
    } catch (error) {
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
        <label htmlfor="place">Place</label>
        <select name="place" onChange={handlePlaceChange}>
          <option value="">Choose a place</option>
          {allPlaces.map((eachPlace) => {
            return (
              <option value={eachPlace}>{eachPlace}</option>

            )
          })}
        </select>

        <br />
        <label htmlFor="description">Tell us about your experience:</label>
        <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
        <br />
        <label htmlFor="duration">Duration:</label>
        <input type="text" name="duration" value={durationInput} onChange={handleDurationChange} />
        <br />
        <label htmlFor="date">Dates:</label>
        <input type="text" name="date" value={dateInput} onChange={handleDateChange} />
        <br />
        <label htmlFor="photoExperience">Your images:</label>
        <input type="file" name="photoExperience" onChange={handleUploadImage} />
        <br />
        {isUploadingImage === true && <p>... loading content</p>}
        {photoExperienceInput !== "" ? <img src={photoExperienceInput} alt="image" width={200} /> : <p> Choose image </p>}
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}

export default ExperienceCreate