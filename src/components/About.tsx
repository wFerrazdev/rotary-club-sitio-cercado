import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Heart, Globe, Award, TreePine } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const areas = [
    {
      icon: Heart,
      title: 'Promoção da Paz',
      description: 'Trabalhamos para resolver conflitos e promover a compreensão entre as pessoas.'
    },
    {
      icon: Target,
      title: 'Luta contra Doenças',
      description: 'Financiamos iniciativas de saúde e prevenção de doenças em nossa comunidade.'
    },
    {
      icon: Globe,
      title: 'Água Limpa',
      description: 'Garantimos acesso à água potável e saneamento básico para todos.'
    },
    {
      icon: Users,
      title: 'Desenvolvimento Local',
      description: 'Fortalecimento econômico e comunitário através de projetos sustentáveis.'
    },
    {
      icon: Award,
      title: 'Educação Básica',
      description: 'Melhoramos a alfabetização e educação básica em nossa região.'
    },
    {
      icon: TreePine,
      title: 'Meio Ambiente',
      description: 'Protegemos o meio ambiente através de ações de preservação e conscientização.'
    }
  ];

  const values = [
    'Serviço',
    'Integridade',
    'Diversidade',
    'Liderança',
    'Camaradagem',
    'Excelência'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-rotary-dark mb-6">
            Sobre o <span className="gradient-text">Rotary Club</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Rotary Club de Curitiba-Sítio Cercado é uma organização de líderes 
            locais que se unem para resolver os desafios mais urgentes de nossa 
            comunidade, conectando pessoas e criando mudanças positivas.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-rotary-blue to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-rotary-dark mb-4">Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar serviço humanitário, ajudar a construir boa vontade e paz, 
              e melhorar a vida das pessoas através de programas de saúde, educação e desenvolvimento comunitário.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-rotary-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-rotary-dark mb-4">Nossa Visão</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser uma organização global de líderes comunitários que unem pessoas 
              e recursos para criar mudanças duradouras em todo o mundo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-rotary-dark mb-4">Nossos Valores</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value, index) => (
                <span
                  key={value}
                  className="bg-rotary-blue/10 text-rotary-blue px-3 py-1 rounded-full text-sm font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Areas of Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-rotary-dark text-center mb-12">
            Áreas de <span className="gradient-text">Enfoque</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-rotary-blue"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rotary-blue to-rotary-gold rounded-lg flex items-center justify-center mr-4">
                    <area.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-rotary-dark">
                    {area.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
