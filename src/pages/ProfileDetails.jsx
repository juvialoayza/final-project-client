import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import ExperienceFavorites from "../components/ExperienceFavorites"
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

  // const handleDelete = async () => {
  //   try {
  //     await deleteProfileService(userId)
  //     console.log("Deleted element")

  //     navigate("/profile")
  //   } catch (error) {
  //     console.log(error)
  //     navigate("/error")
  //   }
  // }

  

  return (
    <Form>

    <div className="mb-3">

      <h1>Profile</h1>
      <h3>👋 Hola {details.firstName} </h3>
      <img src={details.photoUser} alt="photo-user" width={200} />
      <div>
      <h3>Personal information</h3>
      <Form.Label htmlFor="exampleFormControlInput1">Name: {details.firstName}</Form.Label>
      <p>Last Name: {details.lastName}</p>
      <p>Biography: {details.bioCreator}</p>
      </div>

      <div>
      {details.favorites.map((eachFavorite)=>{
        return(
          <p>My favorites: {eachFavorite.name}</p>
          )
        })}
      </div>
      
      {/* <Link to={"/profile/my-favorites"}><button>My favorites</button></Link>
      <br /> */}

      <Link to={"/profile/edit"}><Button>Edit</Button></Link>
      <Link to={"/profile/edit/new-experience"}><Button>Create Experience</Button></Link>
      <Link to={"/profile/edit/my-experiences"}><Button>Manage your experiences</Button></Link>
      {/* <ProfileFavorites/> */}
   
    </div>
      </Form>
  )
}
export default Profile