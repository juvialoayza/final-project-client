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
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )
      }
    </div>

  )
}
export default Navbar