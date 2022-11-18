import service from "./config.services";

const createExperienceService = (newExperience) => {
  return service.post("/experiences/experienceCreate", newExperience)
}

const experienceListService = () => {
  // const {name} = useParams()
  return service.get("/experiences")
}
//!Este es el service para enviar la info de los lugares/ciudades
const placesListService = () => {
  return service.get("/experiences/places")
}

const experienceDetailsService = (experienceId) => {
  // const {experienceId} = useParams()
  return service.get(`/experiences/${experienceId}`)
}

const experienceToFavoritesService = (experienceId) => {
return service.patch(`/experiences/my-favorites/${experienceId}`)
}

const getFavoritesListService = () => {
  return service.get("/experiences/my-favorites")
}

const categoriesListService = () => {
  return service.post("/experiences/categories")
}

const updateExperienceService = (experienceId, updatedMyExperiences) => {
  return service.patch(`/experiences/:experienceId/edit`, updatedMyExperiences)
}

const deleteExperienceService = (experienceId) => {
  return service.delete(`/experiences/${experienceId}`)
}
export {
    createExperienceService,
    experienceListService,
    placesListService,
    experienceDetailsService,
    experienceToFavoritesService,
    getFavoritesListService,
    categoriesListService,
    deleteExperienceService,
    updateExperienceService

}