import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Hero Section */} 
      <header className="bg-gray-900 text-white text-center py-20 flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 max-w-lg mx-auto">
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
        <div className='w-full md:w-1/2 max-w-lg mx-auto mt-8 md:mt-0'>
            <svg className='w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000">
              <path d="m0,418.39c0,.94,1.07,1.69,2.41,1.69h945.03c1.33,0,2.41-.75,2.41-1.69s-1.07-1.69-2.41-1.69H2.41c-1.33,0-2.41.75-2.41,1.69Z" fill="#444" />
              <path d="m789.19,420.78H162.66V17.31c0-9.54,7.76-17.31,17.31-17.31h591.91c9.54,0,17.31,7.76,17.31,17.31v403.47Z" fill="#666" />
              <path d="m841.34,463.64H108.95c-2.53,0-4.6-1.57-5.29-4.01-.68-2.43.27-4.86,2.43-6.17l57.09-34.83h626.22l.18.11,54.72,34.77c2.11,1.34,3.03,3.76,2.33,6.17-.7,2.4-2.77,3.96-5.27,3.96Z" fill="#ccc" />
              <rect x="179.09" y="25.72" width="592.95" height="368.63" fill="#fff" />
              <polygon points="794.9 441.5 159.09 441.5 190.52 416 764.9 416 794.9 441.5" fill="#666" />
              <polygon points="626.31 458.64 324.83 458.64 336.26 441.5 614.88 441.5 626.31 458.64" fill="#666" />
              <path d="m653.28,171.49h-31.41c-2.73,0-4.95-2.22-4.95-4.95s2.22-4.95,4.95-4.95h31.41c2.73,0,4.95,2.22,4.95,4.95s-2.22,4.95-4.95,4.95Z" fill="#ccc" />
              <path d="m689.4,171.49h-14.66c-2.73,0-4.95-2.22-4.95-4.95s2.22-4.95,4.95-4.95h14.66c2.73,0,4.95,2.22,4.95,4.95s-2.22,4.95-4.95,4.95Z" fill="#ccc" />
              <path d="m338.8,175.27h-95.6c-4.88,0-8.85-3.97-8.85-8.85s3.97-8.85,8.85-8.85h95.6c4.88,0,8.85,3.97,8.85,8.85s-3.97,8.85-8.85,8.85Z" fill="#000" />
              <path d="m286.97,198.88h-46.07c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h46.07c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z" fill="#ccc" />
              <path d="m540.95,220.19H239.74c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h301.21c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z" fill="#ccc" />
              <path d="m515.04,234.59H239.74c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h275.29c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z" fill="#ccc" />
              <polygon points="838.74 152.18 824.02 157.02 824.02 135.82 837.38 135.82 838.74 152.18" fill="#f2a7aa" />
              <circle cx="825.84" cy="127.02" r="14.67" fill="#f2a7aa" />
              <path d="m829.87,125.57c-2.46-.07-4.07-2.56-5.02-4.82-.95-2.27-1.94-4.87-4.21-5.81-1.86-.77-5.15,4.4-6.62,3.03-1.53-1.43-.04-8.81,1.59-10.13s3.85-1.58,5.95-1.68c5.11-.24,10.26.18,15.27,1.22,3.1.65,6.29,1.62,8.53,3.86,2.83,2.84,3.56,7.13,3.76,11.14.21,4.1-.03,8.4-2.02,11.98-1.99,3.59-6.17,6.24-10.17,5.32-.4-2.18,0-4.41.16-6.62.15-2.21,0-4.59-1.35-6.35s-4.23-2.45-5.8-.89" fill="#36344e" />
              <path d="m847.92,130.65c1.47-1.08,3.22-1.97,5.03-1.75,1.95.24,3.6,1.85,4.1,3.75s-.06,4-1.27,5.55c-1.21,1.55-3,2.58-4.9,3.1-1.1.3-2.3.42-3.35-.03-1.54-.66-2.37-2.64-1.77-4.2" fill="#36344e" />
              <rect x="820.09" y="388" width="13.79" height="19.56" fill="#f2a7aa" />
              <path d="m806.66,419.41c-1.45-1.51-3.79-2.86-5.12-4.24-1.49-1.44-2.74-3.1-3.51-4.92-1.42-3.09-2.11-6.42-2.42-9.77-.3-3.07-.23-6.28.14-9.33.08-1.67.09-3.43.42-5.05,1.29-7.37,5.11-12.79,10.44-15.95,5.57-3.24,12.45-4.45,18.96-3.25,6.49,1.23,12.1,5.52,15.4,11.09,4.54,7.8,5.43,17.65,4.91,27.04-.51,10.78-4.13,20.81-8.53,29.45-3.68,6.89-8.42,13.49-14.02,19.08-5.07,5.37-11.78,10.21-19.11,12.31-6.93,1.94-14.16,2.86-21.29,2.54-8.69-.35-17.22-2.35-24.62-5.42-4.74-1.66-9.26-3.94-13.33-7.06-2.45-1.81-4.67-4.12-5.51-7.2-1.28-4.38-1.39-9.11-.23-13.54" fill="#36344e" />
              <circle cx="795.41" cy="414.34" r="4.55" fill="#f2a7aa" />
              <circle cx="819.88" cy="421.9" r="3.48" fill="#f2a7aa" />
            </svg>
          </div>
        </header>

      {/* Services Section */}
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
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NextWeb. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
