import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services"

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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />

        <label>Last Name:</label>
        <input
          type="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign up</button>

        {errorMessage !== "" && <p>{errorMessage}</p>}

      </form>
    </div>
  );
}

export default Signup;