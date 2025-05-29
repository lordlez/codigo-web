const projects = [
  {
    title: "IBM",
    image:
      "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg?width=672&height=448&name=ibm-logo-2.jpg",
  },
  {
    title: "Mercado Libre",
    image:
      "https://media.lmneuquen.com/p/e7b5a7df2ea44150594b4c598a8f8c10/adjuntos/198/imagenes/004/634/0004634068/1200x675/smart/mercado-libre-nuevo-logo.jpg",
  },
  {
    title: "Portal TN Noticias",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmkGoteCMPucWHA-7pLLKPLFcjntx49ZKKhNiejIImQ0H6zWzVjcab2GfeamMborD5vUskUYOOdjHsoGAUfaPC6D5cudTLsTc7UytP-hfl7nWwIiFZ1GMAwgIJbg6nfKTJn251lS21edg/s1600/tn+tvlaint.png",
  },
];

const Clientes = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Clientes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Algunos de nuestros más destacados clientes
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;
