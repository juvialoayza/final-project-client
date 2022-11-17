import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import ProfileDetails from './pages/ProfileDetails';
import ProfileEdit from './pages/ProfileEdit';
import ExperienceCreate from './pages/ExperienceCreate';
import ExperienceList from './pages/ExperienceList';
import ExperienceDetail from './pages/ExperienceDetail';
import PlacesList from './pages/PlacesList';
import AddItinerary from './components/AddItinerary'
import MyExperiencesList from './pages/MyExperiencesList';
import ExperienceFavorites from './components/ExperienceFavorites';
import MyTrips from './pages/MyTrips';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileDetails/>} />
        <Route path="/profile/edit" element={<ProfileEdit/>} />
        <Route path="/profile/edit/new-experience" element={<ExperienceCreate/>} />
        <Route path="/experiences" element={<ExperienceList/>}/>
        <Route path="/experiences/:experienceId" element={<ExperienceDetail/>}/>
        <Route path="/experiences/placesList" element={<PlacesList/>}/>
        <Route path="/my-itinerary" element={<AddItinerary/>}/>
        <Route path="/profile/edit/my-experiences" element={<MyExperiencesList/>}/>
        <Route path="/profile/my-favorites" element={<ExperienceFavorites/>}/>
        <Route path="/my-itinerary/list" element={<MyTrips/>}/>

        //páginas de errores
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
