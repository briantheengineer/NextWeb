import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans">
  <header className="bg-gray-900 text-white text-center py-20 flex justify-center items-center content-center">
    <div className="flex flex-col lg:flex-row lg:justify-center sm:items-center sm:justify-center lg:items-center p-5">
      <div className="w-full lg:w-1/2 text-center lg:px-14">
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
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <svg className='h-1/2 w-auto' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 949.85 463.64"><path d="m0,418.39c0,.94,1.07,1.69,2.41,1.69h945.03c1.33,0,2.41-.75,2.41-1.69s-1.07-1.69-2.41-1.69H2.41c-1.33,0-2.41.75-2.41,1.69Z" fill="#2f2e43" stroke-width="0"/><path d="m789.19,420.78H162.66V17.31c0-9.54,7.76-17.31,17.31-17.31h591.91c9.54,0,17.31,7.76,17.31,17.31v403.47Z" fill="#2f2e41" stroke-width="0"/><path d="m841.34,463.64H108.95c-2.53,0-4.6-1.57-5.29-4.01-.68-2.43.27-4.86,2.43-6.17l57.09-34.83h626.22l.18.11,54.72,34.77c2.11,1.34,3.03,3.76,2.33,6.17-.7,2.4-2.77,3.96-5.27,3.96Z" fill="#dfdfdf" stroke-width="0"/><rect x="179.09" y="25.72" width="592.95" height="368.63" fill="#fff" stroke-width="0"/><polygon points="794.9 441.5 159.09 441.5 190.52 416 764.9 416 794.9 441.5" fill="#2f2e41" stroke-width="0"/><polygon points="626.31 458.64 324.83 458.64 336.26 441.5 614.88 441.5 626.31 458.64" fill="#2f2e41" stroke-width="0"/><path d="m653.28,171.49h-31.41c-2.73,0-4.95-2.22-4.95-4.95s2.22-4.95,4.95-4.95h31.41c2.73,0,4.95,2.22,4.95,4.95s-2.22,4.95-4.95,4.95Z" fill="#dfdfdf" stroke-width="0"/><path d="m689.4,171.49h-14.66c-2.73,0-4.95-2.22-4.95-4.95s2.22-4.95,4.95-4.95h14.66c2.73,0,4.95,2.22,4.95,4.95s-2.22,4.95-4.95,4.95Z" fill="#dfdfdf" stroke-width="0"/><path d="m338.8,175.27h-95.6c-4.88,0-8.85-3.97-8.85-8.85s3.97-8.85,8.85-8.85h95.6c4.88,0,8.85,3.97,8.85,8.85s-3.97,8.85-8.85,8.85Z" fill="#000000" stroke-width="0"/><path d="m286.97,198.88h-46.07c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h46.07c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z" fill="#dfdfdf" stroke-width="0"/><path d="m540.95,220.19H239.74c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h301.21c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z" fill="#dfdfdf" stroke-width="0"/><path d="m515.04,234.59H239.74c-2.97,0-5.4-2.42-5.4-5.4s2.42-5.4,5.4-5.4h275.29c2.97,0,5.4,2.42,5.4,5.4s-2.42,5.4-5.4,5.4Z" fill="#dfdfdf" stroke-width="0"/><polygon points="838.74 152.18 824.02 157.02 824.02 135.82 837.38 135.82 838.74 152.18" fill="#f2a7aa" stroke-width="0"/><circle cx="825.84" cy="127.02" r="14.67" fill="#f2a7aa" stroke-width="0"/><path d="m829.87,125.57c-2.46-.07-4.07-2.56-5.02-4.82-.95-2.27-1.94-4.87-4.21-5.81-1.86-.77-5.15,4.4-6.62,3.03-1.53-1.43-.04-8.81,1.59-10.13s3.85-1.58,5.95-1.68c5.11-.24,10.26.18,15.27,1.22,3.1.65,6.29,1.62,8.53,3.86,2.83,2.84,3.56,7.13,3.76,11.14.21,4.1-.03,8.4-2.02,11.98-1.99,3.59-6.17,6.24-10.17,5.32-.4-2.18,0-4.41.16-6.62.15-2.21,0-4.59-1.35-6.35s-4.23-2.45-5.8-.89" fill="#36344e" stroke-width="0"/><path d="m847.92,130.65c1.47-1.08,3.22-1.97,5.03-1.75,1.95.24,3.6,1.85,4.1,3.75s-.06,4-1.27,5.55c-1.21,1.55-3,2.58-4.9,3.1-1.1.3-2.3.42-3.35-.03-1.54-.66-2.37-2.64-1.77-4.2" fill="#36344e" stroke-width="0"/><rect x="820.09" y="388" width="13.79" height="19.56" fill="#f2a7aa" stroke-width="0"/><path d="m806.66,419.41c-1.45,0-2.74-.04-3.71-.13-3.66-.34-7.16-3.04-8.92-4.62-.79-.71-1.04-1.84-.63-2.82h0c.29-.7.88-1.22,1.61-1.43l9.68-2.77,15.67-10.58.17.31c.07.12,1.6,2.89,2.12,4.76.2.71.14,1.31-.15,1.77-.21.32-.49.5-.73.61.28.3,1.17.9,3.91,1.34,3.99.64,4.84-3.51,4.87-3.68l.03-.14.12-.08c1.9-1.23,3.07-1.78,3.48-1.66.25.08.67.2,1.81,11.49.11.35.91,2.95.37,5.43-.59,2.7-12.39,1.77-14.75,1.56-.07,0-8.9.64-14.96.64Z" fill="#36344e" stroke-width="0"/><rect x="865.58" y="374.8" width="13.79" height="19.56" transform="translate(-71.35 519.94) rotate(-31.95)" fill="#f2a7aa" stroke-width="0"/><path d="m857.61,416.73c-1.62,0-3.11-.19-4.17-.38-1.04-.18-1.86-1.01-2.03-2.06h0c-.12-.75.1-1.5.61-2.07l6.75-7.47,7.7-17.27.31.17c.12.06,2.89,1.6,4.32,2.92.54.5.81,1.03.8,1.58,0,.38-.15.69-.29.9.4.1,1.47.14,4.03-.94,3.73-1.57,2.25-5.54,2.19-5.71l-.05-.13.06-.13c.97-2.05,1.66-3.14,2.07-3.25.25-.07.68-.18,7.61,8.79.28.24,2.33,2.02,3.19,4.42.93,2.6-9.58,8.06-11.69,9.13-.07.05-11.06,8.04-15.57,10.31-1.79.9-3.91,1.18-5.84,1.18Z" fill="#36344e" stroke-width="0"/><path d="m844.04,224.38h-38.61l-3.5,35.92,15.33,132.71h19.71l-7.88-76.65,31.97,69.2,17.52-12.26-24.97-64.6s8.92-56.28,1.91-70.3c-7.01-14.02-11.48-14.02-11.48-14.02Z" fill="#36344e" stroke-width="0"/><polygon points="863.24 226.57 801.92 226.57 820.32 147.3 847.03 147.3 863.24 226.57" fill="#000000" stroke-width="0"/><path id="uuid-52db3307-ec3e-496d-a5d4-9d1f33ffc652-45-45-44-44-399" d="m786.69,145.73c-.98-4.82.81-9.23,4-9.84,3.19-.61,6.56,2.8,7.54,7.63.42,1.92.35,3.91-.19,5.81l3.88,20.49-10.02,1.58-2.76-20.36c-1.24-1.55-2.08-3.37-2.45-5.31h0Z" fill="#f2a7aa" stroke-width="0"/><path d="m846.38,147.3h-23.56l-15.88,31.77-5.99-23.8-13.16,1.4s3.11,46.51,16.73,44.94c13.61-1.57,45.36-43.48,41.87-54.3Z" fill="#000000" stroke-width="0"/><path id="uuid-2800d917-a06e-4fc6-b661-0f9df9cadefc-46-46-45-45-400" d="m872.7,268.11c.98,4.82-.81,9.23-4,9.84-3.19.61-6.56-2.8-7.54-7.63-.42-1.92-.35-3.91.19-5.81l-3.88-20.49,10.02-1.58,2.76,20.36c1.24,1.55,2.08,3.37,2.45,5.31,0,0,0,0,0,0Z" fill="#f2a7aa" stroke-width="0"/><path d="m832.95,147.3s13.39-.57,14.08,0c3.65,2.99,25.09,110.66,25.09,110.66h-13.58s-25.6-110.66-25.6-110.66Z" fill="#000000" stroke-width="0"/></svg>
      </div>
    </div>
  </header>





      <section className="bg-gray-100 text-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 flex flex-col items-center">
            <div className='w-16 h-16 mb-4 flex justify-center items-center'><svg fill="#000000" className='h-full' viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.92236,70.81226c-.0249-.04541-.04345-.09229-.06933-.13746-.01123-.01953-.02442-.03662-.03565-.0559a15.989,15.989,0,0,0-5.97314-5.8855l-88-49.5a16.09272,16.09272,0,0,0-15.68848,0l-88,49.5A15.99092,15.99092,0,0,0,26.168,70.64575c-.01563.0271-.03369.05127-.04883.07862-.02441.0437-.042.08886-.06543.13256A15.98294,15.98294,0,0,0,24,78.67871v98.64258a16.02048,16.02048,0,0,0,8.15576,13.94531l88.00049,49.5a15.97122,15.97122,0,0,0,7.24463,2.02222c.17871.01343.35693.03052.53906.032.02393.00049.04785.00049.07178.00049.25146,0,.499-.01465.74463-.03735a15.97135,15.97135,0,0,0,7.08789-2.01734l88-49.5A16.02048,16.02048,0,0,0,232,177.32129V78.67871A15.98584,15.98584,0,0,0,229.92236,70.81226ZM128.91016,118.821,48.37891,73.96558,128,29.17871l79.74365,44.856ZM216,177.32129l-79.87891,44.93188.78711-89.57421L216,87.74561Z"/>
            </svg></div>
              <h3 className="text-xl font-semibold mb-4 w-full">Desenvolvimento Web</h3>
              <p className="mb-4">
                Criação de sites responsivos e otimizados, prontos para qualquer dispositivo.
              </p>
              <Link to="/servicos" className="text-gray-600 hover:text-gray-800">
                Saiba Mais
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 max-h-72 shadow-md transition-transform transform hover:scale-105 flex justify-center flex-wrap">
            <div className='w-16 h-16 mb-4 flex justify-center items-center'>
              <svg fill="#000000" className='h-full' viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.92236,70.81226c-.0249-.04541-.04345-.09229-.06933-.13746-.01123-.01953-.02442-.03662-.03565-.0559a15.989,15.989,0,0,0-5.97314-5.8855l-88-49.5a16.09272,16.09272,0,0,0-15.68848,0l-88,49.5A15.99092,15.99092,0,0,0,26.168,70.64575c-.01563.0271-.03369.05127-.04883.07862-.02441.0437-.042.08886-.06543.13256A15.98294,15.98294,0,0,0,24,78.67871v98.64258a16.02048,16.02048,0,0,0,8.15576,13.94531l88.00049,49.5a15.97122,15.97122,0,0,0,7.24463,2.02222c.17871.01343.35693.03052.53906.032.02393.00049.04785.00049.07178.00049.25146,0,.499-.01465.74463-.03735a15.97135,15.97135,0,0,0,7.08789-2.01734l88-49.5A16.02048,16.02048,0,0,0,232,177.32129V78.67871A15.98584,15.98584,0,0,0,229.92236,70.81226ZM128.91016,118.821,48.37891,73.96558,128,29.17871l79.74365,44.856ZM216,177.32129l-79.87891,44.93188.78711-89.57421L216,87.74561Z"/>
            </svg></div>
              <h3 className="text-xl font-semibold mb-4 w-full">SEO e Marketing Digital</h3>
              <p className="mb-4">
                Aumente sua visibilidade online e atraia mais clientes com estratégias eficazes de SEO.
              </p>
              <Link to="/servicos" className="text-gray-600 hover:text-gray-800">
                Saiba Mais
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 max-h-72 shadow-md transition-transform transform hover:scale-105 flex justify-center flex-wrap">
            <div className='w-16 h-16 mb-4 flex justify-center items-center'><svg fill="#000000" className='h-full' viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.92236,70.81226c-.0249-.04541-.04345-.09229-.06933-.13746-.01123-.01953-.02442-.03662-.03565-.0559a15.989,15.989,0,0,0-5.97314-5.8855l-88-49.5a16.09272,16.09272,0,0,0-15.68848,0l-88,49.5A15.99092,15.99092,0,0,0,26.168,70.64575c-.01563.0271-.03369.05127-.04883.07862-.02441.0437-.042.08886-.06543.13256A15.98294,15.98294,0,0,0,24,78.67871v98.64258a16.02048,16.02048,0,0,0,8.15576,13.94531l88.00049,49.5a15.97122,15.97122,0,0,0,7.24463,2.02222c.17871.01343.35693.03052.53906.032.02393.00049.04785.00049.07178.00049.25146,0,.499-.01465.74463-.03735a15.97135,15.97135,0,0,0,7.08789-2.01734l88-49.5A16.02048,16.02048,0,0,0,232,177.32129V78.67871A15.98584,15.98584,0,0,0,229.92236,70.81226ZM128.91016,118.821,48.37891,73.96558,128,29.17871l79.74365,44.856ZM216,177.32129l-79.87891,44.93188.78711-89.57421L216,87.74561Z"/>
            </svg></div>
              <h3 className="text-xl font-semibold mb-4 w-full">Consultoria</h3>
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
     
     
      <section className="bg-cover bg-center py-20 text-center relative" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
  <div className="absolute inset-0 bg-gray-900"></div> {/* Background overlay for contrast */}
  <div className="container mx-auto px-4 relative z-10">
    {/* Tagline */}
    <h1 className="text-5xl font-bold text-white mb-4 leading-tight max-w-xl mx-auto">
      Transforme sua presença online com sites modernos e eficientes
    </h1>

    {/* Título breve sobre o benefício */}
    <p className="text-lg text-white mb-8 max-w-xl mx-auto">
      Criamos soluções digitais que melhoram a performance do seu negócio e atraem mais clientes.
    </p>

    {/* Destaque sobre o problema resolvido */}
    <p className="text-xl text-white mb-6 max-w-xl mx-auto">
      Se o seu site não está convertendo visitantes em clientes, nós temos a solução.
    </p>

    {/* Destaque dos benefícios */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Design Responsivo</h3>
        <p className="text-gray-600">
          Sites que se adaptam a qualquer dispositivo, garantindo uma experiência fluida e agradável para todos os seus visitantes.
        </p>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Otimização para SEO</h3>
        <p className="text-gray-600">
          Melhoramos a visibilidade do seu site nos mecanismos de busca, atraindo mais tráfego orgânico e clientes potenciais.
        </p>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Desempenho Elevado</h3>
        <p className="text-gray-600">
          Nossos sites são otimizados para garantir velocidade de carregamento e performance impecável em todas as plataformas.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-12">
      <a
        href="/contato"
        className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
      >
        Transforme seu negócio agora!
      </a>
    </div>
  </div>
</section>


      
<section className="bg-gray-100 py-10">
  <div className="container mx-auto px-6">
    
   {/* Primeira Seção */}
<div className="flex flex-col md:flex-row items-center mb-16 border md:h-72">
  {/* SVG à esquerda do texto */}
  <div className="w-1/2 md:pr-6 border h-full">
  <svg className="h-full w-full sm:max-h-56" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 678.62 510.81641">
<path id="uuid-fb20b2b5-bc5b-4117-a1ee-c5d1a8aa62bd-661" d="m183.39,55.89c2.75-6.95,8.68-11.07,13.24-9.21,4.56,1.86,6.03,9.01,3.28,15.96-1.06,2.79-2.79,5.27-5.06,7.23l-12.04,29.28-14.07-6.29,13.36-28.2c-.3-3.01.14-6.02,1.28-8.78,0,0,0,0,0,0Z" fill="#a0616a" stroke-width="0"/><path d="m132.94,242.82s-20.19-9.78-18.79-16.8c1.4-7.03,61.55-156.74,61.55-156.74l27.85,18.3-70.61,155.25Z" fill="#e6e6e6" stroke-width="0"/><path d="m435.76,606.19h-193.12c-28.09,0-50.94-22.85-50.94-50.94V50.94c0-28.09,22.85-50.94,50.94-50.94h193.12c28.09,0,50.94,22.85,50.94,50.94v504.31c0,28.09-22.85,50.94-50.94,50.94Z" fill="#d7d7d8" stroke-width="0"/><path d="m435.9,592.4h-193.4c-20.79,0-37.71-16.92-37.71-37.71V50.51c0-20.79,16.92-37.71,37.71-37.71h193.4c20.79,0,37.71,16.92,37.71,37.71v504.18c0,20.79-16.92,37.71-37.71,37.71Z" fill="#fff" stroke-width="0"/><path d="m366.55,46.36h-54.69c-7.22,0-13.09-5.87-13.09-13.09s5.87-13.09,13.09-13.09h54.69c7.22,0,13.09,5.87,13.09,13.09s-5.87,13.09-13.09,13.09Z" fill="#d7d7d8" stroke-width="0"/><rect x="232.82" y="201.79" width="212.77" height="29.95" rx="14.98" ry="14.98" fill="#000000" stroke-width="0"/><rect x="237.24" y="176.9" width="65.71" height="5.22" rx="2.61" ry="2.61" fill="#000000" stroke-width="0"/><rect x="232.82" y="303.18" width="212.77" height="29.95" rx="14.98" ry="14.98" fill="#d7d7d8" stroke-width="0"/><rect x="237.24" y="278.28" width="65.71" height="5.22" rx="2.61" ry="2.61" fill="#d7d7d8" stroke-width="0"/><rect x="232.82" y="404.56" width="212.77" height="29.95" rx="14.98" ry="14.98" fill="#d7d7d8" stroke-width="0"/><rect x="237.24" y="379.67" width="65.71" height="5.22" rx="2.61" ry="2.61" fill="#d7d7d8" stroke-width="0"/><path d="m537.95,123.4s-20.62,2.33-21.95,34.25c-1.11,26.6-3.37,41.43,7.45,46.98,3.87,1.98,8.42,2.16,12.55.8l44.18-14.53s.67-47.89-14.63-59.52c-15.3-11.64-27.6-7.98-27.6-7.98Z" fill="#2f2e41" stroke-width="0"/><polygon points="562.31 196.78 539.95 204.13 539.95 171.95 560.23 171.95 562.31 196.78" fill="#ffb6b6" stroke-width="0"/><path id="uuid-e639489a-d12b-4c23-97cb-2af79ea40b7d-662" d="m493.96,379.49c-1.21,7.37-6.13,12.66-10.98,11.81-4.85-.85-7.81-7.52-6.59-14.9.44-2.95,1.61-5.75,3.41-8.14l5.54-31.17,15.08,3.16-7.07,30.39c.93,2.88,1.14,5.91.61,8.85,0,0,0,0,0,0Z" fill="#ffb6b6" stroke-width="0"/><path id="uuid-56df27a3-bbb6-4bd2-b7f5-888148e3fe66-663" d="m615.85,375.91c1.49,7.32-1.24,14.01-6.08,14.94-4.84.93-9.97-4.26-11.45-11.58-.63-2.92-.53-5.94.29-8.82l-5.89-31.11,15.22-2.41,4.19,30.92c1.89,2.36,3.16,5.12,3.72,8.06,0,0,0,0,0,0Z" fill="#ffb6b6" stroke-width="0"/><rect x="532.96" y="557.07" width="20.94" height="29.71" fill="#ffb6b6" stroke-width="0"/><path d="m512.57,604.77c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97Z" fill="#2f2e41" stroke-width="0"/><rect x="602.03" y="537.03" width="20.94" height="29.71" transform="translate(-199.26 407.72) rotate(-31.95)" fill="#ffb6b6" stroke-width="0"/><path d="m589.93,600.7c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79Z" fill="#2f2e41" stroke-width="0"/><path d="m569.32,308.62h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75c-10.64-21.28-17.43-21.28-17.43-21.28Z" fill="#2f2e41" stroke-width="0"/><polygon points="598.48 311.95 496.73 311.95 533.31 191.57 573.88 191.57 598.48 311.95" fill="#000000" stroke-width="0"/><path d="m539.71,191.59s-25.27-.67-27.93,5.99c-2.66,6.65-33.92,164.94-33.92,164.94h20.62l41.24-170.93Z" fill="#000000" stroke-width="0"/><path d="m556.15,191.73s22.26-2.82,24.92,3.83c2.66,6.65,33.92,164.94,33.92,164.94h-20.62s-38.22-168.77-38.22-168.77Z" fill="#000000" stroke-width="0"/><circle cx="542.72" cy="158.58" r="22.28" fill="#ffb6b6" stroke-width="0"/><path d="m536.62,131.71s-12.26,49.79,1.37,73.06l-19.2-4.08s-7.44-54.49,7.52-64.4l10.31-4.59Z" fill="#2f2e41" stroke-width="0"/><path d="m678.62,603.58c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h675.62c.83,0,1.5.67,1.5,1.5Z" fill="#2e2e41" stroke-width="0"/><polygon points="115.1 174.73 140.71 183.15 140.71 146.28 117.47 146.28 115.1 174.73" fill="#a0616a" stroke-width="0"/><circle cx="137.54" cy="130.96" r="25.52" fill="#a0616a" stroke-width="0"/><path d="m131.04,132.96l3.52,4.27,6.36-11.14s8.12.42,8.12-5.61,7.45-6.2,7.45-6.2c0,0,10.55-18.42-11.3-13.57,0,0-15.16-10.38-22.69-1.51,0,0-23.11,11.64-16.5,31.9l10.99,20.89,2.49-4.73s-1.51-19.85,11.56-14.32Z" fill="#2f2e41" stroke-width="0"/><rect x="107.42" y="557.4" width="20.94" height="29.71" transform="translate(235.77 1144.5) rotate(-180)" fill="#a0616a" stroke-width="0"/><path d="m126.04,604.12c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97Z" fill="#2f2e41" stroke-width="0"/><path d="m155.1,301.25l-54.93-2.81s-8.42,31.92,2.22,65.18l1.28,200.29h31.04l29.26-206.61-8.87-56.05Z" fill="#2f2e41" stroke-width="0"/><path d="m145.83,167.65l-30.15-16s-32.49,47.48-28,73.2c4.5,25.72,12.48,73.6,12.48,73.6l66.51,2.81-11.61-94.29-9.23-39.32Z" fill="#e6e6e6" stroke-width="0"/><rect x="122.31" y="557.4" width="20.94" height="29.71" transform="translate(265.56 1144.5) rotate(-180)" fill="#a0616a" stroke-width="0"/><path d="m140.94,604.12c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97Z" fill="#2f2e41" stroke-width="0"/><path d="m166.67,301.25l-66.51-2.81s-8.42,31.92,2.22,65.18l12.86,200.29h31.04l29.26-206.61-8.87-56.05Z" fill="#2f2e41" stroke-width="0"/><path id="uuid-e3777ca2-fb97-40f5-b301-a7df89d05aed-664" d="m192.22,353.55c2.45,7.06.64,14.05-4.03,15.62-4.67,1.56-10.44-2.89-12.89-9.96-1.02-2.81-1.32-5.82-.88-8.78l-9.97-30.05,14.76-4.41,8.27,30.09c2.19,2.09,3.82,4.66,4.75,7.49,0,0,0,0,0,0Z" fill="#a0616a" stroke-width="0"/><path d="m108.54,178.95s21.68-5.76,25.21.48c3.52,6.24,55.57,158.96,55.57,158.96l-33.04,4.3-47.73-163.74Z" fill="#e6e6e6" stroke-width="0"/></svg>
  </div>
  <div className="md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">
      Transforme sua presença online com nossos serviços especializados
    </h1>
    <p className="text-lg text-gray-700 mb-4">
      Serviços completos para impulsionar sua marca e maximizar seu impacto digital.
    </p>
    <p className="text-xl text-gray-800 font-semibold mb-4">
      Não está obtendo os resultados que deseja online? Deixe-nos transformar seu site em uma máquina de vendas!
    </p>
    
    {/* Lista de pontos */}
    <ul className="list-disc list-inside text-gray-700 mb-4">
      <li>Estratégias personalizadas para cada cliente</li>
      <li>Otimização para SEO e performance</li>
      <li>Design responsivo que se destaca em qualquer dispositivo</li>
    </ul>
    
  </div>
</div>


    {/* Segunda Seção */}
    <div className="flex flex-col md:flex-row items-center mb-12">
  {/* SVG à direita do texto */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Serviços que garantem resultados
    </h2>
    <p className="text-xl text-gray-800 font-semibold">
      Estamos aqui para ajudar você a alcançar seus objetivos.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Soluções personalizadas para o crescimento da sua marca:
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li>Estratégias personalizadas para cada negócio</li>
      <li>Design moderno e funcional</li>
      <li>Suporte contínuo e consultoria especializada</li>
    </ul>
    
  </div>
      <div className="w-1/2 md:order-last border">
      <svg className="h-full w-full sm:max-h-56" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 678.62 510.81641">
<path d="m353.43203,89.5h-166.78833c-6.39966,0-11.60596-5.20703-11.60596-11.60645V11.60547c0-6.39941,5.2063-11.60547,11.60596-11.60547h166.78833c6.39941,0,11.60571,5.20605,11.60571,11.60547v66.28809c0,6.39941-5.2063,11.60645-11.60571,11.60645Z" fill="#000000" stroke-width="0"/><path d="m353.43203,292.5h-166.78833c-6.39966,0-11.60596-5.20703-11.60596-11.60645v-66.28809c0-6.39941,5.2063-11.60547,11.60596-11.60547h166.78833c6.39941,0,11.60571,5.20605,11.60571,11.60547v66.28809c0,6.39941-5.2063,11.60645-11.60571,11.60645Z" fill="#d8d8d8" stroke-width="0"/><path d="m352.44155,189.81641h-65.57031c-6.73535,0-12.21484-5.47949-12.21484-12.21484v-63.57031c0-6.73535,5.47949-12.21484,12.21484-12.21484h65.57031c6.73535,0,12.21484,5.47949,12.21484,12.21484v63.57031c0,6.73535-5.47949,12.21484-12.21484,12.21484Z" fill="#d8d8d8" stroke-width="0"/><path d="m252.44155,189.81641h-65.57031c-6.73535,0-12.21484-5.47949-12.21484-12.21484v-63.57031c0-6.73535,5.47949-12.21484,12.21484-12.21484h65.57031c6.73535,0,12.21484,5.47949,12.21484,12.21484v63.57031c0,6.73535-5.47949,12.21484-12.21484,12.21484Z" fill="#d8d8d8" stroke-width="0"/><path d="m678.62,509.31641c0,.83002-.66998,1.5-1.5,1.5H1.5c-.83,0-1.5-.66998-1.5-1.5s.67-1.5,1.5-1.5h675.62c.83002,0,1.5.66998,1.5,1.5Z" fill="#2f2e43" stroke-width="0"/><polygon points="521.68062 454.1794 507.86369 468.68747 493.13827 455.07449 506.95519 440.56641 521.68062 454.1794" fill="#ec9c9f" stroke-width="0"/><path d="m532.7171,469.03852l-29.36998,30.83913c-2.51029,2.63586-5.64561,4.71841-9.06708,6.0225l-8.18831,3.12104c-1.69302.64532-3.64239.27152-4.96618-.95226-1.55248-1.4352-1.9454-3.73444-.9555-5.59137l7.87618-14.77439,8.40469-29.96186.09142.0563c2.28636,1.40797,5.75424,3.52058,6.00144,3.61003,4.35229.15413,7.46798-.94048,9.26147-3.25263,3.12825-4.03295,1.1436-10.47122,1.12319-10.53582l-.0156-.04942.03968-.03397c.91186-.77861,1.87235-1.09015,2.85488-.92602,2.08576.34851,3.57774,2.69144,3.79609,3.05188,1.95729-.08245,7.96683,4.62411,8.45043,5.00551,2.95043-.00791,5.11335.69168,6.42839,2.07965,1.14975,1.21342,1.65035,2.93583,1.48814,5.11937-.1951,2.62712-1.35051,5.1743-3.25335,7.17233Z" fill="#090814" stroke-width="0"/><rect x="485.53653" y="470.883" width="20.19271" height="19.89466" fill="#ec9c9f" stroke-width="0"/><path d="m502.28271,508.87456h-42.92269c-3.66865,0-7.35544-.82768-10.66185-2.3936l-7.91297-3.74756c-1.6361-.77484-2.69329-2.4312-2.69329-4.21969,0-2.09747,1.43298-3.95303,3.48476-4.51242l16.32485-4.45054,27.92779-14.46289.02089.1042c.52231,2.60611,1.33153,6.54329,1.43447,6.7821,2.86399,3.2325,5.8061,4.72207,8.74468,4.42857,5.12558-.51197,8.533-6.34331,8.56684-6.40218l.02591-.04502.05229.00526c1.20024.12238,2.08806.59931,2.63887,1.41755,1.16923,1.73705.45596,4.41216.33857,4.81568,1.40031,1.34986,2.0287,8.88807,2.0773,9.49651,2.0247,2.11441,2.98687,4.14713,2.85936,6.04168-.11142,1.65636-1.04376,3.19459-2.77094,4.57215-2.07801,1.65744-4.75395,2.57022-7.53486,2.57022Z" fill="#090814" stroke-width="0"/><polygon points="508.12646 220.32345 436.57385 220.35831 412.72298 369.14934 484.27559 454.19271 508.12646 432.93187 451.57954 369.14934 508.12646 220.32345" fill="#090814" stroke-width="0"/><polygon points="465.83465 242.25667 508.12646 220.32345 508.12646 475.45355 484.27559 476.1085 465.83465 242.25667" fill="#090814" stroke-width="0"/><path d="m423.47218,279.98992l.50385-23.22496-13.56028-.29418-.50385,23.22496c-2.53,2.34865-4.20012,5.99798-4.28988,10.13548-.15706,7.23954,4.57252,13.21364,10.56385,13.34362,5.99133.12998,10.97555-5.63338,11.1326-12.87293.08976-4.1375-1.42063-7.85583-3.84629-10.31199Z" fill="#ec9c9f" stroke-width="0"/><path d="m487.7749,53.17202s19.46513-.04207,12.19353-18.79784c-7.2716-18.75577-20.81174-10.35779-20.81174-10.35779,0,0-5.70536,3.01366-4.5291,9.73748" fill="#090814" stroke-width="0"/><path d="m489.72302,62.1686c0-14.38025-11.65746-26.03763-26.03754-26.03763s-26.03772,11.65737-26.03772,26.03763c0,11.6623,7.66783,21.53259,18.23664,24.84743l5.03369,33.26563,25.66039-21.3836s-5.54354-7.06083-8.51633-15.02245c7.02635-4.66298,11.66087-12.64233,11.66087-21.70702Z" fill="#ec9c9f" stroke-width="0"/><path d="m476.19508,84.16406s3.45773-13.25664-2.19606-19.35213c-5.6409-6.0816-6.36957,3.38112-6.36957,3.38112l-4.07028-.88484s.70788-9.20238-7.25572-10.7951l5.1321-10.97207s-19.64839,3.81501-20.18995,1.912c-4.26122-14.97371,36.39041-27.76478,47.62013-4.92047,17.46591,35.53044-12.67063,41.6315-12.67063,41.6315Z" fill="#090814" stroke-width="0"/><path d="m453.1968,107.36023h-.00003c-18.90326,3.69375-33.0921,19.43311-34.81262,38.61688l-11.76634,131.19472h20.64802l25.93097-169.81159Z" fill="#000000" stroke-width="0"/><polyline points="433.67318 211.88789 430.45745 248.93102 517.74722 223.25756 507.11107 196.48381 526.91631 151.00511 486.48715 93.05645 454.21195 95.25703 441.74198 111.39463" fill="#000000" stroke-width="0"/><path d="m504.85762,247.06728l12.17487-19.78447-11.55149-7.1085-12.17487,19.78447c-3.37019.74757-6.65594,3.05208-8.82488,6.57666-3.79508,6.16709-2.73415,13.7125,2.36964,16.85325,5.10379,3.14075,12.31767.68745,16.11275-5.47964,2.16894-3.52458,2.74533-7.49636,1.89399-10.84176Z" fill="#ec9c9f" stroke-width="0"/><path d="m479.8854,93.78997l7.03843-.29198,12.03331,9.09431c14.25886,2.43159,18.39403,3.11332,22.76287,12.53204,1.83579,3.95777,3.05281,8.17407,3.73324,12.48349l10.18023,64.47481-25.58831,61.6163-16.95628-19.07171,18.12649-48.17314-3.01123-11.52302" fill="#000000" stroke-width="0"/></svg>
      </div>
    </div>

  </div>
</section>

<section className="bg-white py-20">
  <div className="container mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center mb-10">O que nossos clientes dizem</h2>
    
    <div className="flex flex-wrap justify-center">
      {/* Depoimento 1 */}
      <div className="max-w-xs mx-4 mb-8 border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col">
        <p className="text-gray-600 mb-4 flex-grow">
          "Trabalhar com a NextWeb foi uma experiência transformadora. Eles entenderam exatamente o que eu precisava e entregaram um site incrível!"
        </p>
        <div className="text-center">
          <h4 className="font-bold">João Silva</h4>
          <p className="text-gray-500">Empreendedor</p>
        </div>
        <div className="flex justify-center mt-2">
          {/* Estrelas em preto */}
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black" // Estrelas pretas
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.43 8.209 1.192-5.93 5.528 1.396 8.14L12 18.896l-7.353 3.87 1.396-8.14-5.93-5.528 8.209-1.192L12 .587z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Depoimento 2 */}
      <div className="max-w-xs mx-4 mb-8 border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col">
        <p className="text-gray-600 mb-4 flex-grow">
          "A equipe da NextWeb superou todas as minhas expectativas! O site ficou lindo e funcional. Muito obrigado!"
        </p>
        <div className="text-center">
          <h4 className="font-bold">Maria Oliveira</h4>
          <p className="text-gray-500">Designer</p>
        </div>
        <div className="flex justify-center mt-2">
          {/* Estrelas em preto */}
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black" // Estrelas pretas
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.43 8.209 1.192-5.93 5.528 1.396 8.14L12 18.896l-7.353 3.87 1.396-8.14-5.93-5.528 8.209-1.192L12 .587z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Depoimento 3 */}
      <div className="max-w-xs mx-4 mb-8 border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col">
        <p className="text-gray-600 mb-4 flex-grow">
          "Recomendo a NextWeb para qualquer um que precise de um site! A comunicação foi ótima e o resultado final incrível."
        </p>
        <div className="text-center">
          <h4 className="font-bold">Carlos Pereira</h4>
          <p className="text-gray-500">Marketer</p>
        </div>
        <div className="flex justify-center mt-2">
          {/* Estrelas em preto */}
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black" // Estrelas pretas
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.43 8.209 1.192-5.93 5.528 1.396 8.14L12 18.896l-7.353 3.87 1.396-8.14-5.93-5.528 8.209-1.192L12 .587z" />
            </svg>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>






    </div>
  );
}
