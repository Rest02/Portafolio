import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-6">
        <ul className="flex flex-1 items-center gap-x-4 text-lg font-mono">
          {/* Portafolio (a la izquierda) */}
          <li className="mr-auto">
            <Link href="/" className="text-black hover:text-indigo-700">Portafolio</Link>
          </li>

          {/* Elementos centrales */}
          <div className="flex space-x-8">
            <li>
              <Link href="/experiencia" className="text-black hover:text-indigo-700">Experiencia</Link>
            </li>
            <li>
              <Link href="/proyectos" className="text-black hover:text-indigo-700">Proyectos</Link>
            </li>
            <li>
              <Link href="/estudios" className="text-black hover:text-indigo-700">Estudios</Link>
            </li>
            <li>
              <Link href="/certificados" className="text-black hover:text-indigo-700">Certificados</Link>
            </li>
          </div>

          {/* Contacto (a la derecha) */}
          <li className="ml-auto">
            <Link href="/contacto" className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-full hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>  
  );
}

export default NavBar;
