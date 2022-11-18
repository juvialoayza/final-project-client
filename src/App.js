import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import AddItinerary from './components/AddItinerary'
import MyExperiencesList from './pages/MyExperiencesList';
import ExperienceFavorites from './components/ExperienceFavorites';
import MyTrips from './pages/MyTrips';
import MyExperiencesEdit from './pages/MyExperiencesEdit'
import IsPrivate from './components/IsPrivate';

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
        <Route path="/profile/edit/new-experience" element={<IsPrivate><ExperienceCreate/></IsPrivate>} />
        <Route path="/experiences" element={<ExperienceList/>}/>
        <Route path="/experiences/:experienceId" element={<ExperienceDetail/>}/>
        <Route path="/experiences/:experienceId/edit" element={<IsPrivate><MyExperiencesEdit/></IsPrivate>}/>
        <Route path="/my-itinerary" element={<AddItinerary/>}/>
        <Route path="/profile/edit/my-experiences" element={<MyExperiencesList/>}/>
        <Route path="/profile/my-favorites" element={<ExperienceFavorites/>}/>
        <Route path="/my-itinerary/list" element={<MyTrips/>}/>
        <Route path='/experiences/:categoryName' element={<ExperienceListCategory/>}/>

        //páginas de errores
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
