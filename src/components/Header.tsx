import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Users, Calendar, Heart, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Check if we're on the hero section (first 100vh)
      setIsOnHeroSection(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Quem Somos', href: '#about', icon: Users },
    { name: 'Projetos', href: '#projects', icon: Heart },
    { name: 'Notícias', href: '#news', icon: Globe },
    { name: 'Agenda', href: '#calendar', icon: Calendar },
    { name: 'Contato', href: '#contact', icon: Users }
  ];

  // Determine colors and logo based on section
  const isHeroSection = isOnHeroSection && !isScrolled;
  const logoSource = isHeroSection ? "/rotarylogobranca.png" : "/rotarylogoazul.png";
  const textColor = isHeroSection ? "text-white" : "text-rotary-dark";
  const hoverColor = isHeroSection ? "hover:text-white/80" : "hover:text-rotary-blue";
  const bgClass = isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={logoSource} 
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
                className={`flex items-center space-x-2 ${textColor} ${hoverColor} transition-colors duration-300 font-medium`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Junte-se a Nós
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isHeroSection ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-100 text-rotary-dark'
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
