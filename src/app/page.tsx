"use client";
import MenuComponent from "@/components/MenuComponent";
import React, { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Carousel";
import FooterComponent from "@/components/FooterComponet";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div>
      <div className="relative z-50">
        <MenuComponent />
      </div>
      <div className="relative z-10 mt-6 overflow-visible">
        <Carousel />
      </div>

      <main className="flex flex-col items-center px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mb-16">
          {/* Texto a la izquierda */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Descubre COSTA RICA, Naturaleza, historia y PURA VIDA!! 🏔️
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Costa Rica es un paraíso natural ubicado en el corazón de Centroamérica, conocido mundialmente por su biodiversidad, paisajes impresionantes y su compromiso con la paz y la sostenibilidad. Este pequeño país,{" "}
              <span className="text-red-600 font-semibold">sin ejército desde 1948</span>,ha apostado por la educación, la democracia y la conservación ambiental como pilares de su desarrollo.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="text-red-600 font-semibold">Con una historia rica en cultura y tradiciones</span> Costa Rica fue habitada por pueblos indígenas antes de la llegada de los colonizadores españoles. Hoy, su herencia cultural se mezcla con la calidez de su gente y su estilo de vida basado en el famoso lema{" "}
              <span className="text-red-600 font-semibold">“¡Pura Vida!”.</span>.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              El país alberga más del 5% de {" "}
              <span className="text-yellow-600 font-semibold"> la biodiversidad mundial</span>  a pesar de representar solo el 0.03% de la superficie del planeta.Desde bosques tropicales y selvas exuberantes, hasta playas paradisíacas en el Caribe y el Pacífico, volcanes activos y parques nacionales, Costa Rica ofrece una experiencia única para quienes aman la naturaleza y la aventura.{" "}
              <span className="text-red-600 font-semibold">Explorar Costa Rica </span>, es conectarse con la tierra, con su gente y con un modelo de vida armonioso con el medio ambiente.
            </p>
          </div>
          <div>
            <img
              src="/puravida.webp"
              alt="Costa Rica Playa"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Tarjetas de destinos */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full" id="paquetes">
          {/* CARD Guanacaste */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="/guanacaste">
              <img className="rounded-t-lg" src="/guanacaste.jpg" alt="Guanacaste" />
            </a>
            <div className="p-5">
              <a href="/guanacaste">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">🌴GUANACASTE</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                El paraíso de sol eterno, playas espectaculares y naturaleza viva, con una mezcla espectacular de atardeceres de ensueño. ¡Belleza natural solo en Costa Rica!
              </p>
              <a
                href="/guanacaste"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Descúbrelo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD Alajuela */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="/alajuela">
              <img className="rounded-t-lg" src="/alajuela.jpg" alt="Alajuela" />
            </a>
            <div className="p-5">
              <a href="/alajuela">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">🌋ALAJUELA</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Tierra de volcanes imponentes, aguas termales que relajan el alma y aventuras únicas en cada rincón.
                A unos solo pasos del  aeropuerto SJO!
              </p>
              <a
                href="/alajuela"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Descúbrelo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>

       <FooterComponent></FooterComponent>
  
    </div>
  );
}
