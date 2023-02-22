import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
    <div id="menu-nav" >
        <Navbar.Brand href="/"><img src="wanderlust_2.png" alt="logo" height={80} /></Navbar.Brand>
        {isLoggedIn === true ? (
          <Navbar expand="lg"  >
          <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"><b>Home</b></Nav.Link>
                <Nav.Link href="/profile"><b>Profile</b></Nav.Link>
                <Nav.Link href="/experiences"><b>Experiences</b></Nav.Link>
                <Nav.Link href="/my-itinerary"><b>Next Trip</b></Nav.Link>
                <Nav.Link href="/" onClick={handleLogout}><b>Logout</b></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>

        ) : (
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"><b>Home</b></Nav.Link>
                  <Nav.Link href="/experiences"><b>Experiences</b></Nav.Link>
                  <Nav.Link href="/signup"><b>Signup</b></Nav.Link>
                  <Nav.Link href="/login"><b>Login</b></Nav.Link>
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


