import { Code2, Palette, Globe2 } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-indigo-600" />,
    title: "Desarrollo Web",
    description:
      "Desarrollo de sitios web modernos, rápidos y responsivos utilizando las últimas tecnologías.",
  },
  {
    icon: <Palette className="h-8 w-8 text-indigo-600" />,
    title: "Diseño UI/UX",
    description:
      "Diseños atractivos y funcionales que capturan la esencia de tu marca y mejoran la experiencia del usuario.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-indigo-600" />,
    title: "E-commerce",
    description:
      "Tiendas online optimizadas para aumentar tus ventas y fidelizar clientes.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Soluciones web completas para hacer crecer tu negocio
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 mx-auto">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-500 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
