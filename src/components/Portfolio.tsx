import React from "react";

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Tienda en línea con diseño responsivo",
    image: "https://i.ibb.co/KsgKmxj/Screen-Shot-2024-12-29-at-00-40-06.png",
    link: "https://shopping-cart-lordlez.netlify.app/",
  },
  {
    title: "Blog de Café",
    description: "Blog de café con diseño minimalista",
    image: "https://i.ibb.co/VNWkh3G/Screen-Shot-2024-12-29-at-00-42-57.png",
    link: "https://lordlez.github.io/BlogCafe/",
  },
  {
    title: "Portal Educativo",
    description: "Portal educativo con diseño moderno",
    image: "https://i.ibb.co/FB7MrBK/Screen-Shot-2024-12-29-at-00-48-26.png",
    link: "https://lordlez.github.io/documentacion-C/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Algunos de mis proyectos más destacados
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Ver detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
