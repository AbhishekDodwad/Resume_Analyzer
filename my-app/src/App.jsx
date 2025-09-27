import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
