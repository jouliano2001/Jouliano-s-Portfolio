import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import ContactUs from './components/ContactUs'
import Skills from './components/Skills'
import { Navbar, NavbarButton, NavbarLogo, NavBody, NavItems } from './components/UI/resizable-navbar'

function App() {
  return (
    <div className='flex flex-col'>
        <Navbar>
          <NavBody>
            <NavbarLogo/>
            <NavItems items={[
              { name: "Home", link: "#" },
              { name: "About", link: "#about" },
              { name: "Experience", link: "#projects" },
              { name: "Education", link: "#projects" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" }
            ]} />
            <NavbarButton href="#contact">Contact</NavbarButton>
          </NavBody>
        </Navbar>
        <Header/>
        <AboutMe/>
        <Experience/>
        <Education/>
        <Skills/> 
        <Projects/>
        <ContactUs/>
        <Footer/> 
    </div>
  )
}

export default App
