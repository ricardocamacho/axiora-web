import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/logos/black-axiora.svg"
        alt="Página no encontrada"
        width={400}
        height={300}
        priority
      />
      <h1 className="mt-8 text-4xl font-bold text-gray-800">404 - Página no encontrada</h1>
      <p className="mt-4 text-xl text-gray-600">Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
        Volver al inicio
      </Link>
    </div>
  );
}