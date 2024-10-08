export default function About() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/500" 
              alt="Sobre NextWeb" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <h3 className="text-3xl font-bold mb-4">Sobre a NextWeb</h3>
            <p className="text-gray-700 mb-6">
              Na <span className="font-semibold">NextWeb</span>, somos especialistas em criar websites que vão além de simples páginas online. Nossa missão é ajudar empresas de todos os tamanhos a conquistarem uma presença digital forte, atraente e funcional.
            </p>
            <p className="text-gray-700 mb-6">
              Sabemos que um bom site é a chave para conquistar novos clientes e aumentar as vendas. Por isso, oferecemos soluções sob medida, focadas em atender às necessidades específicas de cada cliente, sempre com um design moderno e otimizado para conversão.
            </p>
            <p className="text-gray-700 mb-6">
              Com mais de <span className="font-semibold">5 anos de experiência</span> no mercado, já ajudamos dezenas de negócios a prosperarem no ambiente digital. Nosso time de especialistas em design, desenvolvimento e marketing digital trabalha de forma integrada para garantir que seu projeto seja um sucesso.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    );
  }
  