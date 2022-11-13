import service from "./config.services";

const createExperienceService = (newExperience) => {
  return service.post("/experiences/experienceCreate", newExperience)
}

const experienceListService = () => {
  return service.get("/experiences")
}


export {
    createExperienceService,
    experienceListService
}