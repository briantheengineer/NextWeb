import { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_u2ivw7f';
    const templateID = 'template_evsljg7';
    const userID = 'ClXoiuDGksb4nh5yu';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(response => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); 
      })
      .catch(err => {
        console.error('Erro ao enviar e-mail:', err);
        setError('Houve um erro ao enviar a mensagem. Tente novamente mais tarde.');
      });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-md">
        <h3 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h3>
        
        {isSubmitted && <p className="text-green-500 text-center mb-4">Mensagem enviada com sucesso!</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
