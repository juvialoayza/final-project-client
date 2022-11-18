import { useContext } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"
import homeBtn from "../assets/home-button.png"
function Navbar() {

  const { authenticatorUser, isLoggedIn, setUser, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticatorUser()
   
  }
  return (
    <div >
             {isLoggedIn === true ? (
            <div className='items-menu'>
              <div className='item-menu'>
                <NavLink to="/">Home</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/profile">Profile</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/experiences">Experiences</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/my-itinerary">Next Trip</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/my-itinerary/list">My Trips</NavLink>
              </div>
              <NavLink to="/"><button onClick={handleLogout}>Logout</button></NavLink>
            </div>
          ) : (
            <div className='items-menu'>
              <div className='item-menu'>
                <NavLink to="/">Home</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/experiences">Experiences</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/signup">Signup</NavLink>
              </div>
              <div className='item-menu'>
                <NavLink to="/login">Login</NavLink>
              </div>
            </div>
          )
          }
    </div>

  )
}
export default Navbar