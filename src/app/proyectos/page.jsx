import { prisma } from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

async function loadProjects() {
  return await prisma.project.findMany()
}

export default async function ProjectsPage() {
  const projects = await loadProjects()

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-mono mb-8 ">Mis Proyectos</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
          >
            {/* Imagen: Usamos la imagen de public */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/To-do.png" // Usamos la imagen de la carpeta public
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex justify-between gap-2 mt-4">
                <Link 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 flex-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </Link>
                <Link 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-950 hover:bg-zinc-900 flex-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Repository
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
