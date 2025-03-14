import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function ContactComponent() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-7rem)] p-6">
      <div className="max-w-3xl w-full ">
        {/* Título y Descripción (Fuera del recuadro blanco) */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">Contacto</h1>
        <p className="mt-4 text-lg text-gray-500 mb-6 text-center">
          Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>

        {/* Tarjeta de Información */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold ">Información de contacto</h2>
            <p className="text-sm text-gray-500">Puedes contactarme a través de los siguientes medios</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Phone className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="font-medium left">Teléfono</p>
                <p className="text-sm text-gray-500">+569 5745 3877</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Mail className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="font-medium">Correo electrónico</p>
                <p className="text-sm text-gray-500">rodriguez.bastidas.matias@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                <Linkedin className="h-5 w-5 text-black" />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-gray-500">linkedin.com/in/mrobastidas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de Contacto */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href="https://www.linkedin.com/in/mrobastidas/"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>Conectar en LinkedIn</span>
          </Link>
          <Link
            href="mailto:rodriguez.bastidas.matias@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>Enviar correo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
