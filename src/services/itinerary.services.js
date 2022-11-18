import service from "./config.services";

const createItineraryService = (newItinerary) => {
    return service.post("/itinerary", newItinerary)
}

const updateItineraryService = (itineraryId, updatedTrips)=> {
    return service.patch(`/itinerary/${itineraryId}`, updatedTrips)
}

const deleteItineraryService = (itineraryId) => {
    return service.delete(`/itinerary/${itineraryId}`)
}



export{
    createItineraryService,
    updateItineraryService,
    deleteItineraryService
}