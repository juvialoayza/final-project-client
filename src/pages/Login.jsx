import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import{ loginService} from "../services/auth.services"

import {useContext} from "react"
import {AuthContext} from "../context/auth.context";


function Login() {

  const {authenticatorUser} = useContext(AuthContext)
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
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>

        <Form.Label>Email:</Form.Label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <Form.Label>Password:</Form.Label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">Login</Button>

        {errorMessage !== "" && <p>{errorMessage}</p>}

      </Form>
    </div>
  );
}

export default Login;