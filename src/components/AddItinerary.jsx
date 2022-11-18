import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect} from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {createItineraryService} from '../services/itinerary.services'
import {experienceListService, placesListService} from '../services/experience.services'

function ItineraryCreate() {
  const navigate = useNavigate()
  
  const [allPlaces, setAllPlaces] = useState([])
  const [allExperiences, setAllExperiences] = useState([])

  const [nameInput, setNameInput] = useState("")
  const [placeInput, setPlaceInput] = useState("")
  const [creatorInput, setCreatorInput] = useState()
  const [experienceInput, setExperienceInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  const [budgetInput, setBudgetInput] = useState("")

  const handleNameChange = (event) => setNameInput(event.target.value)
  const handlePlaceChange = (event) => setPlaceInput(event.target.value)
  const handleCreatorChange = (event) => setCreatorInput(event.target.value)
  const handleExperienceChange = (event) => setExperienceInput(event.target.value)
  const handleDateChange = (event) => setDateInput(event.target.value)
  const handleBudgetChange = (event) => setBudgetInput(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    const newItinerary= {
      name: nameInput,
      place: placeInput,
      creator: creatorInput,
      experience: experienceInput,
      date: dateInput,
      budget: budgetInput
    }

    try {
      await createItineraryService(newItinerary)
      navigate("/profile")
      
    } catch(error) {
      console.log(error)
    }
  }

  const getAllPlaces = async (event) => {
    try {
    const allPlaces = await placesListService()
    console.log(allPlaces)
    setAllPlaces(allPlaces.data.placesList)
    }catch(error) {
      console.log(error)
    }
  }

  const getAllExperiences = async (event) => {
    try {
     const allExperiences = await experienceListService()
     console.log(allExperiences)
     setAllExperiences(allExperiences.data)
    }catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getAllPlaces()
    getAllExperiences()
  },[])


  return (
    <div>
        <h3>Plan your next trip</h3>
        <Form>
            <Form.Label htmlFor="name">Name your trip:</Form.Label>
            <input type="text" name="name" value={nameInput} onChange={handleNameChange} />
            <br />
            <Form.Label htmlfor="place">Where are you going?</Form.Label>
            <select name="place" onChange={handlePlaceChange}>
            <option value="">Choose a place</option>
            {allPlaces.map((eachPlace) => {
return (
        <option value={eachPlace}>{eachPlace}</option>
        
)
})}
</select>
  
    <br />
    <Form.Label htmlfor="experience">Choose your experience</Form.Label>
            <select name="experience" multiple="true" onChange={handleExperienceChange}>
            <option value="">Choose one</option>

{allExperiences.filter(eachExperience => eachExperience.place === placeInput).map(eachPlace => (
  <option value={eachPlace.name}>{eachPlace.name}</option>
))}

</select>

{/* 
  {allExperiences.filter((eachExperience) => {
    if (eachExperience.place === placeInput)
  })
  .map((filteredExperience) => {
    return (
      <option value={filteredExperience.name}>{filteredExperience.name}</option>
    )
  })} */}



<br />
            <Form.Label htmlFor="date">Date:</Form.Label>
            <input type="text" name="date" value={dateInput} onChange={handleDateChange} />
            <br />
            <Button onClick={handleSubmit}>Create</Button>
        </Form>
    </div>
  )
}

export default ItineraryCreate