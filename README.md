# Rotary Club de Curitiba-Sítio Cercado

Uma landing page moderna e responsiva para o Rotary Club de Curitiba-Sítio Cercado, desenvolvida com React, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface elegante e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Animações Suaves**: Transições e efeitos visuais com Framer Motion
- **Componentes Interativos**: Cards, modais e formulários funcionais
- **Otimizado para Performance**: Carregamento rápido e experiência fluida

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **React Intersection Observer** - Animações baseadas em scroll

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd rotary-club-sitio-cercado
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── About.tsx       # Sobre o clube
│   ├── News.tsx        # Notícias e artigos
│   ├── Projects.tsx    # Projetos do clube
│   ├── Team.tsx        # Equipe e membros
│   ├── Contact.tsx     # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── App.tsx             # Componente principal
├── index.tsx           # Ponto de entrada
└── index.css           # Estilos globais
```

## 🌟 Funcionalidades

### Header
- Navegação responsiva com menu mobile
- Logo do clube com animações
- Links para todas as seções
- Botão de call-to-action

### Hero Section
- Apresentação impactante do clube
- Estatísticas animadas
- Botões de ação principais
- Efeitos visuais modernos

### Sobre o Clube
- Missão, visão e valores
- Áreas de enfoque do Rotary
- Cards interativos com animações

### Notícias
- Sistema de filtros por categoria
- Busca em tempo real
- Notícias em destaque
- Layout responsivo

### Projetos
- Grid de projetos com filtros
- Status dos projetos (ativo, concluído, planejamento)
- Informações detalhadas de cada projeto
- Call-to-action para doações

### Equipe
- Galeria de membros do clube
- Modal com informações detalhadas
- Cargos e responsabilidades
- Estatísticas do clube

### Contato
- Formulário de contato funcional
- Informações de contato
- Mapa interativo (placeholder)
- Validação de formulário

### Footer
- Links rápidos
- Informações de contato
- Redes sociais
- Newsletter signup

## 🎨 Customização

### Cores
As cores do tema podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  rotary: {
    blue: '#1e40af',    // Azul principal
    gold: '#f59e0b',    // Dourado
    light: '#f8fafc',   // Claro
    dark: '#1e293b'     // Escuro
  }
}
```

### Conteúdo
Todo o conteúdo pode ser facilmente editado nos arquivos dos componentes:
- Textos e descrições
- Informações de contato
- Projetos e notícias
- Membros da equipe

## 📱 Responsividade

O design é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Deploy no Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `build`

### Deploy no Vercel
1. Conecte seu repositório ao Vercel
2. O Vercel detectará automaticamente as configurações

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- **E-mail**: contato@rotarysitio.com.br
- **Telefone**: (41) 3333-4444

## 📄 Licença

Este projeto é desenvolvido para o Rotary Club de Curitiba-Sítio Cercado.

---

**Rotary Club de Curitiba-Sítio Cercado**  
Distrito 4730 - Rotary International  
Servindo a comunidade há mais de 15 anos
