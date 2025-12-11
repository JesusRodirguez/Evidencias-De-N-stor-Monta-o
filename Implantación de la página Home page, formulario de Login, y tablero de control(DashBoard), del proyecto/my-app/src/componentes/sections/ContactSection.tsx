import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes integrar Formspree / Netlify / tu API
    console.log("FORM ->", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Contacto</h2>
        <p className="text-gray-600 text-center mb-8">¿Necesitas Ayuda,Sugerencia o Aporte? Escríbenos.</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="border p-3 rounded" />
            <input required name="email" value={form.email} onChange={handleChange} placeholder="Correo" className="border p-3 rounded" />
          </div>
          <textarea required name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Mensaje" className="border p-3 rounded w-full" />
          <div className="text-right">
            <button type="submit" className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded">Enviar</button>
          </div>
          {sent && <p className="text-green-600">¡Mensaje enviado! (modo demo)</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
