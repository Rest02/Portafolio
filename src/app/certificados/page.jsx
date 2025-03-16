import { prisma } from "@/libs/prisma";
import Image from 'next/image';
import Link from 'next/link';

async function loadCertificates() {
  return await prisma.certification.findMany();
}

async function page() {
  const certificados = await loadCertificates();
  console.log(certificados);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificados.map((c) => (
          <div key={c.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full mb-8 border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <Image
                src={`/certifications/${c.image}`}
                width="600"
                height="400"
                alt="certification image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {c.title}
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {c.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link href="https://5.dec.cl/api/v3/documents?code=X1800002EFC6304CE2&institution=INACAP&"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                type="button"
              >
                Ver Certificado
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
