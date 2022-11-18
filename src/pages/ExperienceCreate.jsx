import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createExperienceService, placesListService, categoriesListService } from '../services/experience.services'
import { uploadImageService } from "../services/upload.services"

function ExperienceCreate() {
  const navigate = useNavigate()

  const [allPlaces, setAllPlaces] = useState([])
  const [allCategories, setAllCategories] = useState([])

  const [nameInput, setNameInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("")
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
  const handleCategoryChange = (event) => setCategoryInput(event.target.value)
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
      category: categoryInput,
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
  
  const getAllCategories = async (event) => {
    try {
      const allCategories = await categoriesListService()
      console.log(allCategories)
      setAllCategories(allCategories.data.categoryList)
    }catch(error) {
      console.log(error)
    }
  }
  


  useEffect(() => {
    getAllPlaces()
    getAllCategories()
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
    <div className='new-experience-form'>
      <h3>Create new experience</h3>
      <form>
        <Form.Label htmlFor="name">Experience Name:</Form.Label>
        <input type="text" name="name" value={nameInput} onChange={handleNameChange} />
        <br />
        <Form.Label htmlfor="place">Place</Form.Label>
        <select name="place" onChange={handlePlaceChange}>
          <option value="">Choose a place</option>
          {allPlaces.map((eachPlace) => {
            return (
              <option value={eachPlace}>{eachPlace}</option>

            )
          })}
        </select>
        <br />
        <Form.Label htmlfor="category">Category</Form.Label>
        <select name="category" onChange={handleCategoryChange}>
          <option value="">Choose a category</option>
          {allCategories.map((eachCategory) => {
            return (
              <option value={eachCategory}>{eachCategory}</option>

            )
          })}
        </select>
        <br />
        <Form.Label htmlFor="description">Tell us about your experience:</Form.Label>
        <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
        <br />
        <Form.Label htmlFor="duration">Duration:</Form.Label>
        <input type="text" name="duration" value={durationInput} onChange={handleDurationChange} />
        <br />
        <Form.Label htmlFor="price">Price:</Form.Label>
        <input type="text" name="price" value={priceInput} onChange={handlePriceChange} />
        <br />
        <Form.Label htmlFor="date">Dates:</Form.Label>
        <input type="text" name="date" value={dateInput} onChange={handleDateChange} />
        <br />
        <Form.Label htmlFor="photoExperience">Your images:</Form.Label>
        <input type="file" name="photoExperience" onChange={handleUploadImage} />
        <br />
        {isUploadingImage === true && <p>... loading content</p>}
        {photoExperienceInput !== "" ? <img src={photoExperienceInput} alt="image" width={200} /> : <p> Choose image </p>}
        <Button onClick={handleSubmit}>Create</Button>
      </form>
    </div>
  )
}

export default ExperienceCreate