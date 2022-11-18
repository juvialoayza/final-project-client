import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Sign Up</h4>
      <Form onSubmit={handleSignup}>
    
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <input
          type="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        </Form.Group>
        <Form.Group>

        <Form.Label>Last Name:</Form.Label>
        <input
          type="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          />
          </Form.Group>
          <Form.Group>
        <Form.Label>Email:</Form.Label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        </Form.Group>
        <Form.Group>

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          />
          </Form.Group>
        <Button variant="primary" type="submit">Sign up</Button>

        {errorMessage !== "" && <p>{errorMessage}</p>}

      </Form>
    </div>
  );
}

export default Signup;