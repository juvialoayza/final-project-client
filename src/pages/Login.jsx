import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/auth.services"

import { useContext } from "react"
import { AuthContext } from "../context/auth.context";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';



function Login() {

  const { authenticatorUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")


  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password
    }

    try {
      const response = await loginService(userCredentials)

      localStorage.setItem("authToken", response.data.authToken)

      authenticatorUser()
      navigate("/")


    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  };

  return (
    <div className="login">
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </MDBCol>
          <MDBCol col='4' md='6'>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Log in with</p>

            </div>


            <Form onSubmit={handleLogin}>
              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={handleEmailChange} />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={handlePasswordChange} />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="">Forgot password?</a>
              </div>

              <div className='text-center text-md-start mt-4 pt-2'>
                <MDBBtn className="mb-0 px-5" size='lg' type="submit">Login</MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
              </div>
            </Form>
            {errorMessage !== "" && <p>{errorMessage}</p>}

          </MDBCol>

        </MDBRow>

      </MDBContainer>

    </div>
  );
}

export default Login;