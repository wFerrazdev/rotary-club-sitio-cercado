import React from 'react';
import Header from './components/Header.tsx';
import HeroAdvanced from './components/HeroAdvanced.tsx';
import About from './components/About.tsx';
import News from './components/News.tsx';
import Projects from './components/Projects.tsx';
import Team from './components/Team.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import VisualEffects from './components/VisualEffects.tsx';

function App() {
  return (
    <div className="App relative">
      <VisualEffects />
      <Header />
      <HeroAdvanced />
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
