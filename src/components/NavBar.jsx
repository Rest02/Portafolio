"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-6">
        <ul className="flex flex-1 items-center gap-x-4 text-lg font-mono">
          {/* Portafolio (a la izquierda) - siempre visible */}
          <li className="mr-auto pl-1 md:pl-0">
            <Link href="/" className="text-black hover:text-indigo-700">
              Portafolio
            </Link>
          </li>

          {/* Botón de hamburguesa - visible solo en móvil */}
          <button onClick={toggleMenu} className="md:hidden z-50 pr-1" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Menú móvil */}
          <div
            className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col space-y-8 text-center">
              <li>
                <Link href="/experiencia" className="text-black hover:text-indigo-700" onClick={toggleMenu}>
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-black hover:text-indigo-700" onClick={toggleMenu}>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/estudios" className="text-black hover:text-indigo-700" onClick={toggleMenu}>
                  Estudios
                </Link>
              </li>
              <li>
                <Link href="/certificados" className="text-black hover:text-indigo-700" onClick={toggleMenu}>
                  Certificados
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-indigo-800 hover:bg-indigo-700 relative bg-gradient-to-b from-indigo-700 to-indigo-800 border-indigo-900 text-stone-50 rounded-full hover:bg-gradient-to-b hover:from-indigo-800 hover:to-indigo-800 hover:border-indigo-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased"
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Elementos centrales y contacto - visibles solo en desktop */}
          <div className="hidden md:flex space-x-8">
            <li>
              <Link href="/experiencia" className="text-black hover:text-indigo-700">
                Experiencia
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="text-black hover:text-indigo-700">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/estudios" className="text-black hover:text-indigo-700">
                Estudios
              </Link>
            </li>
            <li>
              <Link href="/certificados" className="text-black hover:text-indigo-700">
                Certificados
              </Link>
            </li>
          </div>

          {/* Contacto (a la derecha) - visible solo en desktop */}
          <li className="ml-auto hidden md:block">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-indigo-800 hover:bg-indigo-700 relative bg-gradient-to-b from-indigo-700 to-indigo-800 border-indigo-900 text-stone-50 rounded-full hover:bg-gradient-to-b hover:from-indigo-800 hover:to-indigo-800 hover:border-indigo-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased "
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

