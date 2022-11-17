import service from "./config.services";

const getProfileDetailsService = () => {
    return service.get("/profile/my-profile")
}

const updateProfileService = (userId, userChanges) => {
    return service.patch(`/profile/${userId}/edit`, userChanges)
}

// const deleteProfileService = (userId) => {
//     return service.delete (`/profile/${userId}`)
// }

const showMyItinerary = () => {
    return service.get("/profile/my-profile/my-itinerary")
}

const showUserExperiences = () => {
    return service.get("/profile/my-experiences")
}

export{
    getProfileDetailsService,
    updateProfileService,
    showMyItinerary,
    showUserExperiences
    // deleteProfileService
}