import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteProfileService, getProfileDetailsService, updateProfileService } from "../services/profile.services"

function Profile() {

  const navigate = useNavigate()

  const { userId } = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [bioCreatorInput, setBioCreatorInput] = useState("")

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await getProfileDetailsService()
      // console.log(response.data)
      setDetails(response.data)
      setFirstNameInput(response.data.firstName)
      setLastNameInput(response.data.lastName)
      setEmailInput(response.data.email)
      setPasswordInput(response.data.password)
      setBioCreatorInput(response.data.bioCreator)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleFirstNameChange = (event) => setFirstNameInput(event.target.value)
  const handleLastNameChange = (event) => setLastNameInput(event.target.value)
  const handleEmailChange = (event) => setEmailInput(event.target.value)
  const handlePasswordChange = (event) => setPasswordInput(event.target.value)
  const handleBioCreatorChange = (event) => setBioCreatorInput(event.target.value)

  const handleUpdate = async (event) => {

  event.preventDefault()
  try {
    const updatedProfile = {
      firstName: firstNameInput, 
      lastName: lastNameInput,
      email: emailInput,
      password: passwordInput,
      bioCreator: bioCreatorInput
    }

  await updateProfileService(userId, updatedProfile)
  
  navigate("/profile")

  }catch(error) {
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
      <h3>👋 Hi {details.firstName} </h3>
      <form>

      <label htmlFor="firstName">Name:</label>
      <input type="text" name="firstName" value={firstNameInput} onChange={handleFirstNameChange}></input>
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" value={lastNameInput} onChange={handleLastNameChange}></input>
      <br />
      {/* <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={emailInput} onChange={handleEmailChange}></input>
      <br />
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" onChange={handlePasswordChange}></input>
      <br /> */}
      <label htmlFor="bioCreator">About you:</label>
      <br />
      <textarea name="bioCreator" rows="10" cols="40" onChange={handleBioCreatorChange}>Cuentanos sobre ti</textarea>
      <br />
      {/* <label htmlFor="photoExperience">Fotos:</label>
      <input type="file" name="photoExperience" onChange={handlePasswordChange}></input> */}
      <button onClick={handleUpdate}>Update</button>
      </form>
      <div>

        <button onClick={handleDelete}>Delete</button>
        
      </div>
    </div>
  )
}
{/* <Link to={`/profile/${details._id}/edit`}></Link>
</Link> */}
export default Profile