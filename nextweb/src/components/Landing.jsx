import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
  <header className="bg-gray-900 text-white text-center py-20 flex justify-center items-center content-center">
    <div className="md:w-1/2 max-w-lg mx-auto border">
      <h2 className="text-4xl font-bold mb-4">
        Criação de Sites Profissionais para o Seu Negócio
      </h2>
      <p className="mb-6">
        A NextWeb oferece soluções completas para quem precisa de um site moderno e funcional, perfeito para qualquer tipo de negócio. Nosso diferencial? Criamos sites que convertem visitantes em clientes.
      </p>
      <button className="bg-white text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">
        Comece Agora
      </button>
      <p className="mt-4">+5,000 pessoas como você já criaram seus sites conosco!</p>
    </div>
    <div className="w-fit h-fit border ml-8">
      <h1>eai bicha</h1>
    </div>
  </header>

      <section className="bg-gray-100 text-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento Web</h3>
              <p className="mb-4">
                Criação de sites responsivos e otimizados, prontos para qualquer dispositivo.
              </p>
              <Link to="/servicos" className="text-gray-600 hover:text-gray-800">
                Saiba Mais
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">SEO e Marketing Digital</h3>
              <p className="mb-4">
                Aumente sua visibilidade online e atraia mais clientes com estratégias eficazes de SEO.
              </p>
              <Link to="/servicos" className="text-gray-600 hover:text-gray-800">
                Saiba Mais
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Consultoria</h3>
              <p className="mb-4">
                Receba orientações personalizadas para alavancar seu negócio na internet.
              </p>
              <Link to="/servicos" className="text-gray-600 hover:text-gray-800">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NextWeb. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
