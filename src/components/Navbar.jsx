import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"

function Navbar() {

  const { authenticatorUser, isLoggedIn, setUser, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticatorUser()
  }
  return (
    <div>
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
          <button onClick={handleLogout}>Logout</button>
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
    </div>

  )
}
export default Navbar