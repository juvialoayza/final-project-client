import React from 'react'
import Button from 'react-bootstrap/Button';
import {showUserExperiences} from "../services/profile.services"
import { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import {deleteExperienceService, updateExperienceService} from "../services/experience.services"
import {uploadImageService} from "../services/upload.services"


function MyExperiencesEdit() {
  const navigate = useNavigate()
  const {experienceId} = useParams
  

  const [experiences, setExperiences] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const[nameInput, setNameInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [placeInput, setPlaceInput] = useState("")
  const [durationInput, setDurationInput] = useState("")
  const [priceInput, setPriceInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  const [photoExperienceInput, setPhotoExperienceInput] = useState("")
  const [isUploadingImage, setIsUploadingImage] = useState(false)



  useEffect(() => {
    getData()
    }, [])

    const getData = async (event) => {
    
      try {
        const response = await showUserExperiences()
        console.log(response)
        setExperiences(response.data)
        setNameInput(response.data.name)
        setCategoryInput(response.data.category)
        setDescriptionInput(response.data.description)
        setPlaceInput(response.data.place)
        setDurationInput(response.data.duration)
        setPriceInput(response.data.price)
        setDateInput(response.data.date)
        setPhotoExperienceInput(response.data.photoExperience)
        setIsFetching(false)
      }catch(error) {
        navigate("/error")
      }
    }

    const handleUpdate = async (event) => {
      event.preventDefault()
     
      const updatedMyExperiences = {
        name: nameInput, 
        category: categoryInput,
        description: descriptionInput,
        place: placeInput,
        duration: durationInput,
        price:priceInput,
        date:dateInput,
        photoExperience: photoExperienceInput
      }
    
      try {
      await updateExperienceService(experienceId, updatedMyExperiences)
      navigate("/profile")
      }catch(error) {
        navigate("/error")
      }
    
      }
  
    if (isFetching === true) {
      return <h3>...searching</h3>
    }

    const handleUploadImage = async (event) => {
      setIsUploadingImage(true)
      console.log(event.target.files)
          
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

    const handleDelete = async () => {
      try {
        await deleteExperienceService()
        console.log("Deleted element")
  
        navigate("/profile/edit/my-experiences")
      } catch (error) {
        console.log(error)
        navigate("/error")
      }
    }

  return (
    <div>
      
         {experiences.map((eachExperience) => {
        return (
          <p key={eachExperience._id}>
      <><h3>{eachExperience.name} </h3>
      <img src={eachExperience.photoExperience} alt="photo-experience" width={90} />
      <p>{eachExperience.place}</p>
      </>
      <Button onClick={handleUpdate}>Save</Button>
      <Button onClick={handleDelete}>Delete</Button>
      </p>
        )
      })}
    </div>
  )
}

export default MyExperiencesEdit