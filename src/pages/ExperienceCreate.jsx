import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {createExperienceService, experienceListService} from '../services/experience.services'


function ExperienceCreate() {
  const [placesList, setPlacesList] = useState([])

  useEffect(() => {
  getPlaces()
  }, [])

  const getPlaces = async () => {
    try {
        const response = await experienceListService()
        console.log(response)
        setPlacesList(response.data)
    }catch(error) {
        console.log(error)
    }
  }


  return (
    <div>
        <h3>Create new Experience</h3>
        <form>
            <label htmlFor="name">Experience Name:</label>
            <input type="text" name="name" value={nameInput} onChange={nameChange} />
            <br />
            <label htmlFor="category">Category:</label>
            <select name="category">
            <option value="">Choose category:</option>
            
            </select>
        </form>
    </div>
  )
}

export default ExperienceCreate