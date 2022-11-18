import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { getProfileDetailsService, updateProfileService } from "../services/profile.services"
import {uploadImageService} from "../services/upload.services"

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
  const [photoUserInput, setPhotoUserInput] = useState("")
  const [isUploadingImage, setIsUploadingImage] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await updateProfileService()
      // console.log(response.data)
      setDetails(response.data)
      setFirstNameInput(response.data.firstName)
      setLastNameInput(response.data.lastName)
      setEmailInput(response.data.email)
      setPasswordInput(response.data.password)
      setBioCreatorInput(response.data.bioCreator)
      setPhotoUserInput(response.data.photoUser)
      setIsFetching(false)
    } catch (error) {
      navigate("/error")
    }
  }

  const handleFirstNameChange = (event) => setFirstNameInput(event.target.value)
  const handleLastNameChange = (event) => setLastNameInput(event.target.value)
  // const handleEmailChange = (event) => setEmailInput(event.target.value)
  // const handlePasswordChange = (event) => setPasswordInput(event.target.value)
  const handleBioCreatorChange = (event) => setBioCreatorInput(event.target.value)
  const handlePhotoUserChange=(event) => setPhotoUserInput(event.target.value)

  const handleUpdate = async (event) => {

  event.preventDefault()
 
  const updatedProfile = {
    firstName: firstNameInput, 
    lastName: lastNameInput,
    email: emailInput,
    password: passwordInput,
    bioCreator: bioCreatorInput,
    photoUser:photoUserInput
  }

  try {
  await updateProfileService(userId, updatedProfile)
  navigate("/profile")
  }catch(error) {
    navigate("/error")
  }

  }


  if (isFetching === true) {
    return <h3>...searching</h3>
  }



  const handleUploadImage = async (event) => {
  setIsUploadingImage(true)
  console.log(event.target.files)
      
  const sendForm = new FormData()
  sendForm.append("image", event.target.files[0])
      
  try {
   const response = await uploadImageService(sendForm)
            console.log(response.data.image)
            setPhotoUserInput(response.data.image)
            setIsUploadingImage(false)
          } catch (error) {
            console.log(error)
          }
        }
        

  return (
    <div>
      <h3>👋 Hi {details.firstName} </h3>
      <Form>

      <Form.Label htmlFor="photoUser">Profile Picture: </Form.Label>
      <input type="file" name="photoUser" onChange={handleUploadImage}></input>
      <br />
      {isUploadingImage === true && <p>... loading content</p>}
      {photoUserInput !== "" ? <img src={photoUserInput} alt="image" width={200} /> : <p> Choose image </p>}
      <br />
      <Form.Label htmlFor="firstName">Name: </Form.Label>
      <input type="text" name="firstName" value={firstNameInput} onChange={handleFirstNameChange}></input>
      <br />
      <Form.Label htmlFor="lastName">Last Name: </Form.Label>
      <input type="text" name="lastName" value={lastNameInput} onChange={handleLastNameChange}></input>
      <br />
      {/* <Form.Label htmlFor="email">Email:</Form.Label>
      <input type="email" name="email" value={emailInput} onChange={handleEmailChange}></input>
      <br />
      <Form.Label htmlFor="password">Password:</Form.Label>
      <input type="text" name="password" onChange={handlePasswordChange}></input>
      <br /> */}
      <Form.Label htmlFor="bioCreator">Biography: </Form.Label>
      <br />
      <textarea name="bioCreator" value={bioCreatorInput} rows="10" cols="40" onChange={handleBioCreatorChange}>Tell us about you</textarea>
      <br />
      <Button onClick={handleUpdate}>Save</Button>
      </Form>
     
    </div>
  )
}
export default Profile