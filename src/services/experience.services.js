import service from "./config.services";
import { useParams } from "react-router-dom"

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
return service.patch(`/favorites/${experienceId}`)
}

const getFavoritesListService = () => {
  return service.get("/experiences/my-favorites")
}

export {
    createExperienceService,
    experienceListService,
    placesListService,
    experienceDetailsService,
    experienceToFavoritesService,
    getFavoritesListService

}