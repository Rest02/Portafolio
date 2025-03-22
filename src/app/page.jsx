import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Matías Rodríguez WEB",
};

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] p-4 md:p-6">
      <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-8 space-y-6 md:space-y-0">
        <Image
          src="/Perfil.jpg" // Ruta relativa a la carpeta public
          alt="Foto de perfil"
          width={360} // Ancho de la imagen
          height={360} // Alto de la imagen
          className="rounded-full border border-black" // Responsive sizes
        />
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold mb-2 md:mb-4">
            Matías Rodríguez
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-indigo-600 font-extrabold mb-4 md:mb-6">
            FullStack Developer
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl">
            Bienvenido a mi Portafolio! Puedes ver los proyectos que he realizado, contenido sobre mi carrera
            profesional y ponerte en contacto conmigo para más información.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contacto"
              className="bg-indigo-600 text-center text-white py-3 px-6 rounded-4xl font-semibold hover:bg-indigo-700 hover:cursor-pointer transition duration-300 w-full sm:w-auto min-w-[150px]"
            >
              Contacto
            </Link>
            <a
              href="/MATÍAS_RODRÍGUEZ_CV_2025_AM.pdf"
              target="_blank"
              className="bg-gray-800 text-white py-3 px-6 rounded-4xl text-center font-semibold hover:bg-gray-700 hover:cursor-pointer transition duration-300 w-full sm:w-auto min-w-[150px]"
              rel="noreferrer"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

