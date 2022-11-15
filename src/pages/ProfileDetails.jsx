import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteProfileService, getProfileDetailsService, updateProfileService } from "../services/profile.services"

function Profile() {

  const navigate = useNavigate()

  const { userId } = useParams()

  const [details, setDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  

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
      navigate("/error")
    }
  }


  if (isFetching === true) {
    return <h3>...searching</h3>
  }

  const handleDelete = async () => {
    try {
      await deleteProfileService(userId)
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
      <p>Name: {details.firstName}</p>
      <p>Last Name: {details.lastName}</p>
      <p>Biography: {details.bioCreator}</p>

    <button onClick={handleDelete}>Delete</button>
      <Link to={"/profile/edit"}><button>Update</button></Link>

   
      <div>

        
      </div>
    </div>
  )
}
export default Profile