import { prisma } from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"
import { Award, Calendar, ExternalLink } from "lucide-react"

async function loadCertificates() {
  return await prisma.certification.findMany()
}

export default async function CertificatesPage() {
  const certificates = await loadCertificates()

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="mb-12">
        <h1 className="text-3xl font-mono mb-8">Mis Certificados</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 "
          >
            <div className="relative h-64 overflow-hidden ">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <Image
                src={`/certifications/${certificate.image}`}
                fill
                alt={certificate.title}
                className="object-cover transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 z-20 bg-black text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                Certificate
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <Award className="h-4 w-4 text-black-600" />
                <span className="text-xs text-gray-500">Certification</span>
              </div>
              <h3 className="font-semibold text-lg line-clamp-2 mb-2">{certificate.title}</h3>

              {/* Descripción con Scroll */}
              <div className="max-h-24 overflow-y-auto text-sm text-gray-600 pr-2 mb-4">
                {certificate.description}
              </div>

              {certificate.issueDate && (
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 mb-4">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</span>
                </div>
              )}

              <Link
                href={certificate.urlCertificate}
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Ver Certificado
                <ExternalLink className="h-4 w-4 ml-1 " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
