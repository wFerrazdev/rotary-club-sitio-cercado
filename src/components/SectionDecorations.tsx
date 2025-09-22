import React from 'react';

interface SectionDecorationsProps {
  section: 'about' | 'news' | 'projects' | 'team' | 'contact';
}

const SectionDecorations: React.FC<SectionDecorationsProps> = ({ section }) => {
  const decorations = {
    about: (
      <>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-rotary-blue/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-rotary-gold/5 to-transparent rounded-full blur-xl"></div>
      </>
    ),
    news: (
      <>
        <div className="absolute top-1/3 left-0 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-28 h-28 bg-gradient-to-l from-yellow-500/5 to-transparent rounded-full blur-2xl"></div>
      </>
    ),
    projects: (
      <>
        <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-500/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-44 h-44 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </>
    ),
    team: (
      <>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-xl"></div>
      </>
    ),
    contact: (
      <>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-bl from-rotary-blue/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-tr from-rotary-gold/5 to-transparent rounded-full blur-xl"></div>
      </>
    )
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {decorations[section]}
    </div>
  );
};

export default SectionDecorations;
