import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from "./components/About"
import Services from './components/Services';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      
    </Router>
  )
}

export default App
