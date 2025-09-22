import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Filter, Search } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
}

const News: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'Rotary Club Sítio Cercado realiza entrega de cestas básicas',
      excerpt: 'Mais de 100 famílias foram beneficiadas com a entrega de cestas básicas na comunidade do Sítio Cercado.',
      content: 'O Rotary Club de Curitiba-Sítio Cercado realizou no último sábado a entrega de mais de 100 cestas básicas para famílias em situação de vulnerabilidade social na região. A ação contou com a participação de 25 rotarianos e voluntários.',
      author: 'João Silva',
      date: '2024-01-15',
      category: 'Ações Sociais',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Projeto de alfabetização atende 50 adultos',
      excerpt: 'Iniciativa promove educação básica para adultos na comunidade local.',
      content: 'O projeto "Alfabetização para Todos" já beneficiou mais de 50 adultos na região do Sítio Cercado, oferecendo aulas de leitura e escrita gratuitas.',
      author: 'Maria Santos',
      date: '2024-01-10',
      category: 'Educação',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'Campanha de vacinação contra a gripe',
      excerpt: 'Rotary Club organiza campanha de vacinação em parceria com a secretaria de saúde.',
      content: 'Em parceria com a Secretaria Municipal de Saúde, o Rotary Club organizou uma campanha de vacinação que imunizou mais de 300 pessoas contra a gripe.',
      author: 'Pedro Costa',
      date: '2024-01-08',
      category: 'Saúde',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 4,
      title: 'Reunião mensal do clube',
      excerpt: 'Próxima reunião acontece na primeira quinta-feira do mês.',
      content: 'A reunião mensal do Rotary Club de Curitiba-Sítio Cercado acontece toda primeira quinta-feira do mês, às 19h30, na sede do clube.',
      author: 'Ana Oliveira',
      date: '2024-01-05',
      category: 'Eventos',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['Todas', 'Ações Sociais', 'Educação', 'Saúde', 'Eventos'];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'Todas' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-rotary-dark mb-6">
            Últimas <span className="gradient-text">Notícias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe as últimas ações e projetos do Rotary Club de Curitiba-Sítio Cercado
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-4 mb-12"
        >
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rotary-blue focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-rotary-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-rotary-dark mb-6">Destaques</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-rotary-blue/5 to-rotary-gold/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-rotary-blue to-rotary-gold flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Foto</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-rotary-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {new Date(news.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-rotary-dark mb-3 line-clamp-2">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User size={16} className="mr-1" />
                        {news.author}
                      </div>
                      <button className="flex items-center text-rotary-blue font-medium hover:text-rotary-blue/80 transition-colors">
                        Ler mais
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-rotary-dark mb-6">Todas as Notícias</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {regularNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Imagem</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        {news.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Calendar size={12} className="mr-1" />
                        {new Date(news.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <h4 className="font-bold text-rotary-dark mb-2 line-clamp-2 text-sm">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {news.excerpt}
                    </p>
                    <button className="text-rotary-blue text-sm font-medium hover:text-rotary-blue/80 transition-colors">
                      Ler mais →
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            Ver Todas as Notícias
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
