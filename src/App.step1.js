import React from 'react';
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main style={{ padding: '40px', marginTop: '80px' }}>
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
