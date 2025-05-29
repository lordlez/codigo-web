import React, { useState, FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mlddlgkw");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const subject = target.subject.value;
    const message = target.message.value;

    if (name.length < 2)
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Email inválido";
    if (subject.length < 3)
      newErrors.subject = "El asunto debe tener al menos 3 caracteres";
    if (message.length < 10)
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e);
    }
  };

  if (state.succeeded) {
    return (
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ¡Gracias por tu mensaje!
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Nos pondremos en contacto contigo pronto.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <form onSubmit={validateForm} className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
                placeholder="Tu nombre"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
                placeholder="tu@email.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
                placeholder="Asunto de tu mensaje"
                required
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="hidden">
              <label htmlFor="bot-field">No llenar esto si eres humano:</label>
              <input name="bot-field" />
            </div>

            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {state.submitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
