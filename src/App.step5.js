import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import News from './components/News.tsx';
import Projects from './components/Projects.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <News />
      <Projects />
      
      <main style={{ padding: '40px' }}>
        <section>
          <h2>Bem-vindos ao nosso site!</h2>
          <p>Em breve teremos nosso site completo com todas as informações sobre nossos projetos e atividades. Site atualizado em dezembro de 2024.</p>
        </section>
        
        <section style={{ marginTop: '40px' }}>
          <h3>Entre em Contato</h3>
          <p>E-mail: contato@rotarysitio.com.br</p>
          <p>Telefone: (41) 3333-4444</p>
          <p>Endereço: Rua das Flores, 123 - Sítio Cercado, Curitiba-PR</p>
        </section>
      </main>
      
      <footer style={{ padding: '20px', background: '#1e293b', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2024 Rotary Club de Curitiba-Sítio Cercado - Distrito 4730</p>
      </footer>
    </div>
  );
}

export default App;
