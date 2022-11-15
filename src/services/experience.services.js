import service from "./config.services";
import { useParams } from "react-router-dom"

const createExperienceService = (newExperience) => {
  return service.post("/experiences/experienceCreate", newExperience)
}

const experienceListService = () => {
  // const {name} = useParams()
  return service.get("/experiences")
}

const placesListService = () => {
  return service.get("/experiences/experienceCreate")
}

const experienceDetailsService = (experienceId) => {
  // const {experienceId} = useParams()
  return service.get(`/experiences/${experienceId}`)
}

export {
    createExperienceService,
    experienceListService,
    placesListService,
    experienceDetailsService
}