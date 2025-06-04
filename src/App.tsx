import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import Skills from './components/Skills';

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from '../src/components/UI/resizable-navbar';

import { useState } from 'react';

function scrollToTarget(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + startY;
  const distance = endY - startY;
  const duration = 2200; // total scroll time in ms
  let startTime: number | null = null;

  function easeInOutQuad(t: number) {
    return t < 0.5
      ? 2 * t * t // slow start
      : -1 + (4 - 2 * t) * t; // fast middle, slow end
  }

  function animateScroll(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

function App() {
  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Education', link: '#education' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
              items={navLinks}
              onItemClick={(item) => {
                const id = item.link.replace('#', '');
                scrollToTarget(id);
              }}
            />
          <div className="hidden lg:flex">
            <NavbarButton href="#contact">Let’s Talk</NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="#contact" className="mt-4">
              Let’s Talk
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <section id="home">
        <Header />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <ContactUs />
      </section>

      <Footer />
    </>
  );
}

export default App;