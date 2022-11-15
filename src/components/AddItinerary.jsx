import {useEffect} from 'react'
import {useState} from 'react'
import {createItineraryService} from '../services/itinerary.services'

function ItineraryCreate() {
  const [itineraryList, setItineraryList] = useState([])

  useEffect(()=> {
    getItinerary()
  },[])

  const getItinerary = async() => {
    try{
      await createItineraryService()
      setItineraryList()
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>ItineraryCreate</div>
  )
}

export default ItineraryCreate