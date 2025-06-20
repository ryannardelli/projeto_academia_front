import React from 'react';

const Footer = () => {
  return (
   <footer className="bg-primary py-12 sm:px-10 px-6 tracking-wide text-white">
  <div className="max-w-screen-xl mx-auto">
    <div className="max-w-xl mx-auto text-center">
      <img src="assets/img/logo.png" alt="Logo" className="mx-auto w-32 mb-6" />

      <h3 className="text-2xl font-bold text-white">Newsletter</h3>
      <p className="text-sm mt-4 text-slate-200 leading-relaxed">
       Inscreva-se na nossa newsletter e fique por dentro das últimas novidades, atualizações e ofertas exclusivas. Receba conteúdos valiosos e faça parte da nossa comunidade!
      </p>

      <div className="bg-slate-100/10 flex px-2 py-1.5 rounded-full text-left mt-8 backdrop-blur-md border border-slate-300/20">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full outline-none bg-transparent text-sm pl-4 text-white placeholder:text-slate-300"
        />
        <button
          type="button"
          className="bg-white hover:bg-slate-200 text-primary font-medium text-sm rounded-full px-4 py-2 ml-4 transition-all tracking-wide cursor-pointer"
        >
          Enviar
        </button>
      </div>
    </div>

    <hr className="my-12 border-slate-600/30" />

    <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h4 className="text-sm font-semibold mb-6 text-white">Sobre nós</h4>
       <p className="text-slate-300 mb-2 text-sm leading-relaxed">
        Nossa plataforma oferece treinos personalizados, flexíveis e acessíveis, focando na sua evolução, saúde e bem-estar, onde quer que você esteja.
      </p>

      </div>

      <div>
        <h4 className="text-sm font-semibold mb-6 text-white">Serviços</h4>
        <ul className="space-y-4">
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Treinos Personalizados</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Consultoria com Personal Trainer</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Planos Alimentares</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Avaliação Física Online</a></li>
        </ul>
      </div>


      <div>
        <h4 className="text-sm font-semibold mb-6 text-white">Conteúdos</h4>
        <ul className="space-y-4">
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Vídeos de Treino</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Guias de Alimentação</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Blog Fitness</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Dicas de Saúde</a></li>
        </ul>
    </div>


      <div>
        <h4 className="text-sm font-semibold mb-6 text-white">Sobre</h4>
        <ul className="space-y-4">
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Nossa História</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Missão e Visão</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Equipe de Treinadores</a></li>
          <li><a href="#" className="text-slate-300 hover:text-white text-sm">Depoimentos de Alunos</a></li>
        </ul>
     </div>

    </div>
  </div>
</footer>
  );
};

export default Footer;