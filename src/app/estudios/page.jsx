import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="mb-12">
        <h1 className="text-3xl font-mono mb-8">Mis Certificados</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="border rounded-lg flex flex-col md:flex-row w-full max-w-[700px] p-6 shadow-lg bg-white">
          <div className="flex flex-col items-center md:pr-6 mb-4 md:mb-0">
            <Image
              src="/inacap.jpg"
              width={150}
              height={150}
              className="w-[150px] h-auto object-cover rounded-lg"
              alt="Inacap Logo"
            />
          </div>
          <div className="flex flex-col flex-1">
            <h1 className="text-xl font-bold text-gray-800 text-center md:text-left">
              Universidad Tecnológica de Chile - Inacap
            </h1>
            <h3 className="text-md text-gray-600 italic text-center md:text-left">
              Ingeniería en Informática
            </h3>
            <h3 className="text-md text-gray-600 italic text-center md:text-left">
              Chile, Concepción | Marzo 2021 - Mayo 2024
            </h3>
            <p className="mt-1 text-gray-700 text-justify">
              Diseño, desarrollo, gestión de software, redes, seguridad
              informática, bases de datos, inteligencia artificial y computación
              avanzada.
            </p>
            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
              <button className="px-4 py-2 bg-neutral-300 text-black rounded-4xl shadow hover:bg-neutral-200 transition border w-full md:w-auto">
                Certificado de Egreso
              </button>
              <button className="px-4 py-2 bg-neutral-300 text-black rounded-4xl shadow hover:bg-neutral-200 transition border w-full md:w-auto">
                Título de Egresado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
