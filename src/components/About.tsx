const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nosotros
          </h2>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-lg text-gray-500 text-center">
            Mision: Proporcionar soluciones web de alta calidad que impulsen el
            crecimiento y éxito de nuestros clientes, a través de un enfoque
            personalizado y una atención excepcional a los detalles.
          </p>
          <p className="mt-6 text-lg text-gray-500 text-center">
            Visión: Ser reconocidos como líderes en el desarrollo web, creando
            experiencias digitales innovadoras y efectivas que transformen la
            forma en que las empresas interactúan con sus clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
