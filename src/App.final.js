import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import News from './components/News.tsx';
import Projects from './components/Projects.tsx';
import Team from './components/Team.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <News />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
