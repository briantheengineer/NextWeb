export default function Services() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Nossos Serviços</h3>
          <p className="text-gray-700 mb-12">
            Oferecemos uma gama completa de serviços para criar, otimizar e manter seu site funcionando perfeitamente. Aqui estão algumas de nossas principais ofertas:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Criação de Sites</h4>
              <p className="text-gray-700 mb-6">
                Desenvolvemos sites sob medida que atendem suas necessidades específicas, com design profissional e funcionalidades personalizadas para o seu negócio.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Saiba Mais
              </button>
            </div>
  
            {/* Serviço 2 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Otimização SEO</h4>
              <p className="text-gray-700 mb-6">
                Melhore a visibilidade do seu site nos mecanismos de busca. Nossos especialistas em SEO garantem que seu site seja encontrado por clientes potenciais.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Saiba Mais
              </button>
            </div>
  
            {/* Serviço 3 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Manutenção e Suporte</h4>
              <p className="text-gray-700 mb-6">
                Oferecemos suporte contínuo e serviços de manutenção para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  