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
import ExperienceList from './pages/ExperienceList';
import ExperienceDetail from './pages/ExperienceDetail';
import PlacesList from './pages/PlacesList';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/experiences/experienceCreate" element={<ExperienceCreate/>} />
        <Route path="/experiences" element={<ExperienceList/>}/>
        <Route path="/experiences/:experienceId" element={<ExperienceDetail/>}/>
        <Route path="/experiences/placesList" element={<PlacesList/>}/>

        //páginas de errores
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
