import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteProfileService, getProfileDetailsService } from "../services/profile.services"

function Profile() {

  const navigate = useNavigate()

  // const { userId } = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [bioCreatorInput, setBioCreatorInput] = useState("")

  const handleFirstNameChange = (event) => setFirstNameInput(event.target.value)
  const handleLastNameChange = (event) => setLastNameInput(event.target.value)
  const handleEmailChange = (event) => setEmailInput(event.target.value)
  const handlePasswordChange = (event) => setPasswordInput(event.target.value)
  const handleBioCreatorChange = (event) => setBioCreatorInput(event.target.value)



  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await getProfileDetailsService()
      // console.log(response.data)
      setDetails(response.data)
      setIsFetching(false)
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  if (isFetching === true) {
    return <h3>...searching</h3>
  }

  const handleDelete = async () => {
    try {
      await deleteProfileService()
      console.log("Deleted element")

      navigate("/profile")
    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  return (
    <div>
      <h3>👋 Hola {details.firstName} </h3>
      <form>

      <label htmlFor="firstName">Nombre:</label>
      <input type="text" name="firstName" value={firstNameInput} onChange={handleFirstNameChange}></input>
      <br />
      <label htmlFor="lastName">Apellido:</label>
      <input type="text" name="lastName" value={lastNameInput} onChange={handleLastNameChange}></input>
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={emailInput} onChange={handleEmailChange}></input>
      <br />
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" onChange={handlePasswordChange} ></input>
      <br />
      <label htmlFor="bioCreator">Biography:</label>
      <br />
      <textarea name="bioCreator" rows="10" cols="40" onChange={handleBioCreatorChange}>Describe tu experiencia </textarea>
      <br />
      {/* <label htmlFor="photoExperience">Fotos:</label>
      <input type="file" name="photoExperience" onChange={handlePasswordChange}></input> */}

      </form>
      <div>

        <button onClick={handleDelete}>Delete</button>
        <Link to={`/profile/${details._id}/edit`}><button>Update</button></Link>
      </div>
    </div>
  )
}

export default Profile