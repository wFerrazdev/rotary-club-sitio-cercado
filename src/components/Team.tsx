import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Crown, Award, Mail, Linkedin, Calendar, MapPin, X, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  role: 'presidente' | 'vice-presidente' | 'diretor' | 'membro';
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
  phone: string;
  joinDate: string;
}

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamData: TeamMember[] = [
    {
      id: 1,
      name: 'João Silva Santos',
      position: 'Presidente 2024-2025',
      role: 'presidente',
      image: '/api/placeholder/300/300',
      bio: 'Empresário com mais de 20 anos de experiência em gestão, dedicado ao serviço comunitário e desenvolvimento social.',
      email: 'joao.silva@rotarysitio.com',
      phone: '(41) 99999-9999',
      joinDate: '2018-03-15'
    },
    {
      id: 2,
      name: 'Maria Oliveira Costa',
      position: 'Vice-Presidente',
      role: 'vice-presidente',
      image: '/api/placeholder/300/300',
      bio: 'Advogada especializada em direito social, ativa em projetos de assistência jurídica para famílias carentes.',
      email: 'maria.oliveira@rotarysitio.com',
      phone: '(41) 98888-8888',
      joinDate: '2019-07-20'
    },
    {
      id: 3,
      name: 'Pedro Almeida',
      position: 'Diretor de Projetos',
      role: 'diretor',
      image: '/api/placeholder/300/300',
      bio: 'Engenheiro civil com foco em projetos de infraestrutura comunitária e desenvolvimento sustentável.',
      email: 'pedro.almeida@rotarysitio.com',
      phone: '(41) 97777-7777',
      joinDate: '2020-01-10'
    },
    {
      id: 4,
      name: 'Ana Paula Ferreira',
      position: 'Diretora de Comunicação',
      role: 'diretor',
      image: '/api/placeholder/300/300',
      bio: 'Jornalista e especialista em comunicação social, responsável pela divulgação dos projetos do clube.',
      email: 'ana.ferreira@rotarysitio.com',
      phone: '(41) 96666-6666',
      joinDate: '2021-05-15'
    },
    {
      id: 5,
      name: 'Carlos Roberto Lima',
      position: 'Tesoureiro',
      role: 'diretor',
      image: '/api/placeholder/300/300',
      bio: 'Contador com vasta experiência em gestão financeira de organizações sem fins lucrativos.',
      email: 'carlos.lima@rotarysitio.com',
      phone: '(41) 95555-5555',
      joinDate: '2017-11-30'
    },
    {
      id: 6,
      name: 'Fernanda Rocha',
      position: 'Secretária',
      role: 'membro',
      image: '/api/placeholder/300/300',
      bio: 'Administradora de empresas, responsável pela organização e documentação das atividades do clube.',
      email: 'fernanda.rocha@rotarysitio.com',
      phone: '(41) 94444-4444',
      joinDate: '2022-02-28'
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'presidente': return Crown;
      case 'vice-presidente': return Award;
      case 'diretor': return Users;
      default: return Users;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'presidente': return 'from-yellow-400 to-yellow-600';
      case 'vice-presidente': return 'from-blue-400 to-blue-600';
      case 'diretor': return 'from-green-400 to-green-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-rotary-dark mb-6">
            Nossa <span className="gradient-text">Equipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os líderes que dedicam seu tempo e energia para servir nossa comunidade
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {teamData.map((member, index) => {
            const RoleIcon = getRoleIcon(member.role);
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Member Photo */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-32 h-32 rotary-gradient rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-br ${getRoleColor(member.role)} rounded-full flex items-center justify-center`}>
                    <RoleIcon className="text-white" size={20} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-rotary-dark mb-2 group-hover:text-rotary-blue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-rotary-blue font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      Membro desde {new Date(member.joinDate).getFullYear()}
                    </div>
                    <button className="text-rotary-blue font-medium hover:text-rotary-blue/80 transition-colors">
                      Ver Perfil →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center bg-gradient-to-br from-rotary-blue/5 to-blue-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-rotary-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold text-rotary-dark mb-2">25+</div>
            <div className="text-gray-600">Membros Ativos</div>
          </div>

          <div className="text-center bg-gradient-to-br from-rotary-gold/5 to-yellow-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-rotary-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold text-rotary-dark mb-2">15+</div>
            <div className="text-gray-600">Anos de História</div>
          </div>

          <div className="text-center bg-gradient-to-br from-green-500/5 to-green-100 rounded-2xl p-8">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={32} />
            </div>
            <div className="text-3xl font-bold text-rotary-dark mb-2">1</div>
            <div className="text-gray-600">Comunidade Atendida</div>
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center rotary-gradient rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Quer Fazer Parte da Nossa Equipe?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Junte-se a nós e faça a diferença na sua comunidade. 
            Venha conhecer nossos projetos e participe das nossas reuniões.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rotary-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Participe de uma Reunião
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rotary-blue transition-all duration-300">
              Seja um Membro
            </button>
          </div>
        </motion.div>

        {/* Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rotary-gradient rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {selectedMember.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-rotary-dark">
                          {selectedMember.name}
                        </h3>
                        <p className="text-rotary-blue font-medium">
                          {selectedMember.position}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-rotary-dark mb-2">Biografia</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-rotary-dark mb-3">Informações de Contato</h4>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Mail size={16} className="mr-2" />
                            {selectedMember.email}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone size={16} className="mr-2" />
                            {selectedMember.phone}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar size={16} className="mr-2" />
                            Membro desde {new Date(selectedMember.joinDate).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-rotary-dark mb-3">Responsabilidades</h4>
                        <p className="text-gray-600">
                          {selectedMember.role === 'presidente' && 'Liderança geral do clube, representação externa e coordenação de atividades.'}
                          {selectedMember.role === 'vice-presidente' && 'Apoio à presidência e coordenação de comissões específicas.'}
                          {selectedMember.role === 'diretor' && 'Gestão de áreas específicas e coordenação de projetos.'}
                          {selectedMember.role === 'membro' && 'Participação ativa em projetos e atividades do clube.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Team;
