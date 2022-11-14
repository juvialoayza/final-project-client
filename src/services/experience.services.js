import service from "./config.services";
import { useParams } from "react-router-dom"

const createExperienceService = (newExperience) => {
  return service.post("/experiences/experienceCreate", newExperience)
}

const experienceListService = () => {
  // const {name} = useParams()
  return service.get("/experiences")
}


export {
    createExperienceService,
    experienceListService
}