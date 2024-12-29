import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              CódigoWeb
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-indigo-600">
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-700 hover:text-indigo-600"
            >
              Servicios
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-indigo-600"
            >
              Portfolio
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-indigo-600">
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Servicios
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Portfolio
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
