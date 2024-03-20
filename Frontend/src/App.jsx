import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import LoginSign from './pages/LoginSign'
import Games from './pages/Games'
import Notifications from './pages/Notifications'
import SignUp from './pages/SignUp';
import SignUp2 from './pages/SignUp2';
import { useNavigate } from 'react-router-dom';
import Planner from './pages/Planner';

import './styles.css'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginSign />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/games" element={<Games />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signup2" element={<SignUp2 />} />
        <Route exact path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  )
}


