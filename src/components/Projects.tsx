import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, BookOpen, Shield, Globe, Award, Eye, ArrowRight, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'ativo' | 'concluído' | 'planejamento';
  beneficiaries: number;
  budget: string;
  startDate: string;
  endDate?: string;
  image: string;
  impact: string;
  icon: React.ComponentType<any>;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedStatus, setSelectedStatus] = useState('Todos');

  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Alfabetização para Todos',
      description: 'Projeto de alfabetização de adultos que oferece aulas gratuitas de leitura e escrita para pessoas acima de 18 anos na comunidade do Sítio Cercado.',
      category: 'Educação',
      status: 'ativo',
      beneficiaries: 50,
      budget: 'R$ 15.000',
      startDate: '2024-01-01',
      image: '/api/placeholder/400/250',
      impact: 'Melhoria na qualidade de vida e oportunidades de emprego',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Cestas Básicas Solidárias',
      description: 'Distribuição mensal de cestas básicas para famílias em situação de vulnerabilidade social na região do Sítio Cercado.',
      category: 'Ação Social',
      status: 'ativo',
      beneficiaries: 120,
      budget: 'R$ 8.000',
      startDate: '2023-06-01',
      image: '/api/placeholder/400/250',
      impact: 'Segurança alimentar para famílias carentes',
      icon: Heart
    },
    {
      id: 3,
      title: 'Vacinação em Ação',
      description: 'Campanhas de vacinação em parceria com a secretaria de saúde para imunizar a comunidade contra doenças preveníveis.',
      category: 'Saúde',
      status: 'concluído',
      beneficiaries: 300,
      budget: 'R$ 5.000',
      startDate: '2023-09-01',
      endDate: '2023-12-31',
      image: '/api/placeholder/400/250',
      impact: 'Redução de doenças e melhoria da saúde pública',
      icon: Shield
    },
    {
      id: 4,
      title: 'Preservação Ambiental',
      description: 'Projeto de conscientização ambiental e limpeza de áreas verdes na região, com plantio de árvores e educação ecológica.',
      category: 'Meio Ambiente',
      status: 'ativo',
      beneficiaries: 200,
      budget: 'R$ 12.000',
      startDate: '2024-02-01',
      image: '/api/placeholder/400/250',
      impact: 'Preservação do meio ambiente e conscientização',
      icon: Globe
    },
    {
      id: 5,
      title: 'Jovens Líderes',
      description: 'Programa de desenvolvimento de liderança para jovens de 15 a 25 anos, oferecendo workshops e mentorias.',
      category: 'Desenvolvimento',
      status: 'planejamento',
      beneficiaries: 30,
      budget: 'R$ 20.000',
      startDate: '2024-06-01',
      image: '/api/placeholder/400/250',
      impact: 'Formação de futuros líderes comunitários',
      icon: Award
    },
    {
      id: 6,
      title: 'Apoio às Mulheres',
      description: 'Programa de capacitação profissional e apoio psicológico para mulheres em situação de vulnerabilidade.',
      category: 'Ação Social',
      status: 'ativo',
      beneficiaries: 40,
      budget: 'R$ 18.000',
      startDate: '2023-11-01',
      image: '/api/placeholder/400/250',
      impact: 'Empoderamento feminino e independência econômica',
      icon: Users
    }
  ];

  const categories = ['Todos', 'Educação', 'Ação Social', 'Saúde', 'Meio Ambiente', 'Desenvolvimento'];
  const statuses = ['Todos', 'ativo', 'concluído', 'planejamento'];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'Todos' || project.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'bg-green-100 text-green-800';
      case 'concluído': return 'bg-blue-100 text-blue-800';
      case 'planejamento': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ativo': return 'Em Andamento';
      case 'concluído': return 'Concluído';
      case 'planejamento': return 'Em Planejamento';
      default: return status;
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-rotary-dark mb-6">
            Nossos <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os projetos que estamos desenvolvendo para transformar nossa comunidade
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-4 mb-12"
        >
          <div className="flex gap-2 flex-wrap">
            <Filter className="text-gray-500 mt-2" size={20} />
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-rotary-blue text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedStatus === status
                    ? 'bg-rotary-gold text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {status === 'Todos' ? 'Todos' : getStatusText(status)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-48 rotary-gradient flex items-center justify-center relative">
                  <project.icon className="text-white" size={48} />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users size={16} className="mr-1" />
                      {project.beneficiaries}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-rotary-dark mb-3 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-rotary-blue mb-1">Impacto:</h4>
                    <p className="text-sm text-gray-600">{project.impact}</p>
                  </div>

                  {/* Budget and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="font-medium">Orçamento: {project.budget}</span>
                    <span>
                      {new Date(project.startDate).toLocaleDateString('pt-BR')}
                      {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('pt-BR')}`}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-rotary-blue text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
                    <Eye size={16} />
                    Ver Detalhes
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="rotary-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Quer Apoiar Nossos Projetos?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Junte-se a nós e faça parte da transformação da nossa comunidade. 
              Sua contribuição faz a diferença!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rotary-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Fazer Doação
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rotary-blue transition-all duration-300">
                Seja Voluntário
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
