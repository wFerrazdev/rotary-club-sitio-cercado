import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Users, Calendar, Heart, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detecta se está na seção Hero (azul) - só muda quando sair completamente
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Só sai da seção hero quando ela sair completamente da tela (bottom negativo)
        setIsInHeroSection(heroRect.bottom > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Quem Somos', href: '#about', icon: Users },
    { name: 'Projetos', href: '#projects', icon: Heart },
    { name: 'Notícias', href: '#news', icon: Globe },
    { name: 'Agenda', href: '#calendar', icon: Calendar },
    { name: 'Contato', href: '#contact', icon: Users }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src={isInHeroSection ? "/rotarylogobranca.png" : "/rotarylogoazul.png"} 
                alt="Rotary Club Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`flex items-center space-x-2 transition-colors duration-300 font-medium ${
                  isInHeroSection 
                    ? 'text-white hover:text-white/80' 
                    : 'text-rotary-dark hover:text-rotary-blue'
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                isInHeroSection
                  ? 'bg-white text-rotary-blue hover:bg-white/90 shadow-lg'
                  : 'btn-primary'
              }`}
            >
              Junte-se a Nós
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isInHeroSection
                ? 'text-white hover:bg-white/20'
                : 'text-rotary-dark hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg border-t"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 text-rotary-dark hover:text-rotary-blue transition-colors duration-300 font-medium py-2"
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="btn-primary w-full mt-4"
                >
                  Junte-se a Nós
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
