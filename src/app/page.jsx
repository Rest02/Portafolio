import React from "react";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-7rem)] p-6">
      <div className="flex items-center space-x-8">
        <Image
          src="/Perfil.jpg" // Ruta relativa a la carpeta public
          alt="Foto de perfil"
          width={400} // Ancho de la imagen
          height={400} // Alto de la imagen
          className="rounded-full border border-black" // Clase para hacerlo redondo
        />
        <div className="flex flex-col items-start">
          <h3 className="text-5xl text-gray-800 font-semibold mb-4">
            Matías Rodríguez
          </h3>
          <h1 className="text-7xl text-indigo-600 font-extrabold mb-6">
            FullStack Developer
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Hola, bienvenido a mi Portafolio. Puedes ver los proyectos que he
            realizado y ponerte en contacto conmigo para más información.
          </p>
          <div className="flex gap-4 w-1/2 ">
            <Link
              href="/contacto"
              className="bg-indigo-600 text-center text-white py-3 px-6 rounded-4xl font-semibold hover:bg-indigo-700 hover:cursor-pointer transition duration-300 w-[50%]"
            >
              Contacto
            </Link>
            <a
              href="/Matías Rodríguez_CV_2025.pdf"
              target="_blank"
              className="bg-gray-800 text-white py-3 px-6 rounded-4xl w-[50%]  text-center font-semibold hover:bg-gray-700 hover:cursor-pointer transition duration-300"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
