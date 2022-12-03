import { useContext } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { AuthContext } from "../context/auth.context"
import homeBtn from "../assets/home-button.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavbarMenu() {

  const { authenticatorUser, isLoggedIn, setUser, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticatorUser()
   
  }
  return (
    <div id='menu-nav'>
      <img src="wanderlust_2.png" alt="logo" height={80}/>
    {isLoggedIn === true ? (
    <Navbar bg="light" expand="lg" >
    <Container id='container-menu' className="me-auto">
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="nav-text">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/experiences">Experiences</Nav.Link>
          <Nav.Link href="/my-itinerary">Next Trip</Nav.Link>
          <NavLink to="/"><button onClick={handleLogout}>Logout</button></NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    ) : (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/experiences">Experiences</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
    </div>
  )
}
export default NavbarMenu

{/* <div >
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
    </div> */}
