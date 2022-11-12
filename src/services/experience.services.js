import service from "./config.services";

const createExperienceService = (newExperience) => {
  return service.post("/experiences/experienceCreate", newExperience)
}

export {
    createExperienceService
}