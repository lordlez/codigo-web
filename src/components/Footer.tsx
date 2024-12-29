import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">
              © 2024 CodigoWeb. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/lordlez"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lorenzolezcano/"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
