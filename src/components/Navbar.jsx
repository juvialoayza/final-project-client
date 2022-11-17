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
    <div>
<<<<<<< HEAD
      {isLoggedIn === true ? (
        <div className='items-menu'>
          <div className='items-menu'>
            <NavLink to="/">Home</NavLink>
          </div>
          <div className='items-menu'>
            <NavLink to="/profile">Profile</NavLink>
          </div>
          <div className='items-menu'>
          <NavLink to="/experiences">Experiences</NavLink>
          </div>
          <div className='items-menu'>
          <NavLink to="/my-itinerary">Next Trip</NavLink>
          </div>
          <div className='items-menu'>
          <NavLink to="/my-itinerary/list">My planned trips</NavLink>
          </div>
          <NavLink to="/"><button onClick={handleLogout}>Logout</button></NavLink>
        </div>
      ) : (
        <div>
          <div className='items-menu'>
          <NavLink to="/">Home</NavLink>
          </div>
          <div className='items-menu'>
          <NavLink to="/experiences">Experiences</NavLink>
          </div>
          <div className='items-menu'>
          <NavLink to="/signup">Signup</NavLink>
          </div>
          <div className='items-menu'>
          <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      )
      }
=======
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
              <button onClick={handleLogout}>Logout</button>
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
>>>>>>> aa962074188a33fc32c025c61906f8d4c576f087
    </div>

  )
}
export default Navbar