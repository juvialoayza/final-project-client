import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile'
import ExperienceCreate from './pages/ExperienceCreate';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="/experience/experienceCreate" element={<ExperienceCreate/>} />
        <Route path="/experience/:experienceId" element={<ExperienceDetail/>}/> */}
=======
        <Route path="/profile" element={<Profile />} />

>>>>>>> 1467a2e64834f649d13d6b2253652be8203a4383

        //páginas de errores
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
