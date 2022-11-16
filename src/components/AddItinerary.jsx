import {useEffect} from 'react'
import {useState} from 'react'
import { Navigate } from 'react-router-dom'
import {createItineraryService} from '../services/itinerary.services'
import {experienceListService, placesListService} from '../services/experience.services'

function ItineraryCreate() {
  // const navigate = useNavigate()
  const [allPlaces, setAllPlaces] = useState([])
  const [allExperiences, setAllExperiences] = useState([])

  const [nameInput, setNameInput] = useState("")
  const [placeInput, setPlaceInput] = useState("")
  const [creatorInput, setCreatorInput] = useState()
  const [experienceInput, setExperienceInput] = useState([])
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
      Navigate("/profile")
      
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
        <form>
            <label htmlFor="name">Name your trip:</label>
            <input type="text" name="name" value={nameInput} onChange={handleNameChange} />
            <br />
            <label htmlfor="place">Where are you going?</label>
            <select name="place" onChange={handlePlaceChange}>
            <option value="">Choose a place</option>
{allPlaces.map((eachPlace) => {
return (
        <option value={eachPlace}>{eachPlace}</option>
        
)
})}
</select>
  
    <br />
    <label htmlfor="experience">Choose your experience</label>
            <select name="experience" onChange={handleExperienceChange}>
            <option value="">Choose one</option>

{allPlaces.filter((eachPlace) => {
allExperiences.map((eachExperience) => {
  return (
    <div>
    {eachExperience.place === eachPlace ? <option value={eachExperience.name}>{eachExperience.name}</option> : ""}
    </div>
  )

})
})
// map((eachExperience) => {
// return (
//   // <div>
//   //       {eachExperience.place === eachPlace ? <option value={eachExperience.name}>{eachExperience.name}</option> : ""}
//   //       </div>
//         <option value={eachExperience}>{eachExperience.name}</option>
        
// )
// })}
}
</select>
<br />
            <label htmlFor="date">Date:</label>
            <input type="text" name="date" value={dateInput} onChange={handleDateChange} />
            <br />
            <button onClick={handleSubmit}>Create</button>
        </form>
    </div>
  )
}

export default ItineraryCreate