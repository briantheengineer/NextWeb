import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from "./components/About"
import ContactForm from './components/ContactForm';
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
