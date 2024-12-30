import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre Mí
          </h2>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-lg text-gray-500 text-center">
            Me llamo Lorenzo Lezcano y soy un desarrollador web freelance
            apasionado por crear soluciones digitales que ayuden a empresas y
            emprendedores a destacar en el mundo digital. Mi formación en
            Ingeniería Informática y mi constante actualización en las últimas
            tecnologías web me permiten ofrecer soluciones de alta calidad.
          </p>
          <p className="mt-6 text-lg text-gray-500 text-center">
            Estoy comprometido con la excelencia técnica y la satisfacción del
            cliente, siempre buscando nuevas formas de mejorar y optimizar mis
            habilidades para ofrecer los mejores resultados posibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
