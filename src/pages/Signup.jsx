import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBRow, MDBCol, MDBCheckbox }
  from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    try {
      await signupService(newUser)
      console.log(newUser)
      navigate("/login")

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  };

  return (
    <div className="signup">
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
          </MDBCol>
          <MDBCol col='4' md='6'>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="fw-bold mb-5">Sign up now</p>
            </div>
            <MDBRow>
              <Form onSubmit={handleSignup}>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName} onChange={handleFirstNameChange} />
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' value={lastName} onChange={handleLastNameChange} />
                </MDBCol>

            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={handleEmailChange} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={handlePasswordChange} />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>

            <MDBBtn className='w-100 mb-4' size='md' type="submit">Sign up</MDBBtn>
            {errorMessage !== "" && <p>{errorMessage}</p>}
              </Form>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>


    // <div style={{ display: 'block',
    //               width: 700,
    //               padding: 30 }}>
    //   <h4>Sign Up</h4>
    //   <Form onSubmit={handleSignup}>

    //   <Form.Group>
    //     <Form.Label>Name:</Form.Label>
    //     <input
    //       type="firstName"
    //       name="firstName"
    //       value={firstName}
    //       onChange={handleFirstNameChange}
    //     />
    //     </Form.Group>
    //     <Form.Group>

    //     <Form.Label>Last Name:</Form.Label>
    //     <input
    //       type="lastName"
    //       name="lastName"
    //       value={lastName}
    //       onChange={handleLastNameChange}
    //       />
    //       </Form.Group>
    //       <Form.Group>
    //     <Form.Label>Email:</Form.Label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={handleEmailChange}
    //     />
    //     </Form.Group>
    //     <Form.Group>

    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //       />
    //       </Form.Group>
    //     <Button variant="primary" type="submit">Sign up</Button>

    //     {errorMessage !== "" && <p>{errorMessage}</p>}

    //   </Form>
    // </div> * /}


  );
}

export default Signup;