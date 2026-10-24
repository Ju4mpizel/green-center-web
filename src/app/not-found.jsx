// src/app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-niebla px-4 text-center">
      <span className="font-display font-extrabold text-7xl sm:text-9xl text-hoja mb-2">
        404
      </span>
      <h1 className="font-display font-bold text-2xl sm:text-4xl text-tinta mb-4">
        Página no encontrada
      </h1>
      <p className="text-musgo text-sm sm:text-base max-w-md mb-8">
        La ruta a la que intentas acceder no existe o fue movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-bosque hover:bg-hoja text-white font-semibold text-sm transition-colors shadow-sm"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
