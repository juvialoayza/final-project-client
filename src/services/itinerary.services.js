import service from "./config.services";

const createItineraryService = (newItinerary) => {
    return service.post("/itinerary", newItinerary)
}

const updateItineraryService = (itineraryUpdate)=> {
    return service.patch(`/itinerary/${itineraryId}`)
}

const deleteItineraryService = (itineraryId) => {
    return service.delete()
}

export{
    createItineraryService,
    updateItineraryService
}