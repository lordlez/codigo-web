import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 lg:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Desarrollo Web</span>
              <span className="block text-indigo-600">
                Profesional y Creativo
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transformo ideas en experiencias digitales únicas. Especializado
              en desarrollo web moderno, diseño responsivo y soluciones
              personalizadas para tu negocio.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#contacto"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Contáctame
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Ver Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Developer workspace"
            />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <ChevronDown className="h-8 w-8 text-indigo-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
