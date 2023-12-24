import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import MouseTrail from './components/Custom Cursor/MouseTrail'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <MouseTrail />
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App