import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  Users,
  Globe,
  Award,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Notícias', href: '#news' },
    { name: 'Equipe', href: '#team' },
    { name: 'Contato', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  const areas = [
    { name: 'Promoção da Paz', icon: Heart },
    { name: 'Luta contra Doenças', icon: Users },
    { name: 'Água Limpa', icon: Globe },
    { name: 'Educação', icon: Award }
  ];

  return (
    <footer className="bg-rotary-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-96 h-96 flex items-center justify-center" style={{ width: '384px', height: '384px' }}>
                <img 
                  src="/rotarylogoazul.png" 
                  alt="Rotary Club Logo" 
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Servindo nossa comunidade através de projetos sociais, educacionais 
              e humanitários há mais de 15 anos. Junte-se a nós e faça a diferença!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-rotary-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-rotary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-rotary-gold mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <p>Rua das Flores, 123</p>
                  <p>Sítio Cercado - Curitiba/PR</p>
                  <p>CEP: 81925-000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-rotary-gold flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <p>(41) 3333-4444</p>
                  <p>(41) 99999-8888</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-rotary-gold flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <p>contato@rotarysitio.com.br</p>
                  <p>secretaria@rotarysitio.com.br</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Areas of Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Áreas de Enfoque</h4>
            <div className="space-y-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <area.icon className="text-rotary-gold flex-shrink-0" size={16} />
                  <span className="text-sm">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">
              Receba Nossas Notícias
            </h4>
            <p className="text-gray-300 mb-6">
              Mantenha-se atualizado sobre nossos projetos e eventos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-rotary-gold focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-rotary-gold text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300">
                Inscrever-se
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              <p>
                © 2024 Rotary Club de Curitiba-Sítio Cercado. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                Distrito 4730 - Rotary International
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-rotary-gold rounded-full flex items-center justify-center text-white hover:bg-yellow-600 transition-colors duration-300"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
