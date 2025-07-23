import FooterComponent from "@/components/FooterComponet";
import MenuComponent from "@/components/MenuComponent";
import TestimoniosComponent from "@/components/testimonioComponent";
import React from "react";

const TestimoniosPage: React.FC = () => {

    const vectorTesimonios = [
        {
            nombre: " Diego y Valeria, Argentina",
            comentario:"¡Increíble! Gracias a la agencia vivimos pura adrenalina: canopy en Monteverde, rafting en el Pacuare y caminatas nocturnas en la selva. Todo estuvo super bien organizado. Costa Rica es un paraíso para los amantes de la aventura, y con ustedes nos sentimos seguros y bien guiados todo el tiempo.",
            imagen: "/testimonio1.avif"
            
        },
        {
            nombre: "Lucas A. Garcia, España",
            comentario:"Costa Rica me dejó sin palabras. La agencia me armó un viaje lleno de acción: rappel, kayak, caminatas por volcanes. Todo puntual, seguro y con guías increíbles. Viajar solo nunca fue tan emocionante. ¡Repetiría sin pensarlo!",
            imagen: "/testimonio2.jpeg"
        },
         {
            nombre: " Familia SULLIVAN, Irlanda",
            comentario: "We loved every moment. We did gentle rafting on the Sarapiquí River, walked across hanging bridges, and spotted wildlife in its natural habitat. The agency thought of every detail to make it safe and fun for our children. Costa Rica is pure life and pure family adventure!",
            imagen: "/testimonio3.jpg"
        }
    ]

    return (
       <div>
         <MenuComponent></MenuComponent>
         <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Testimonios</span></h1>
         <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Historias reales de aventuras inolvidables en Costa Rica, contadas por nuestros propios clientes</p>
        {
            vectorTesimonios.map((persona, index) => (
                <TestimoniosComponent key={index}

                    nombre={persona.nombre}
                    pais={persona.pais}
                    comentario={persona.comentario}
                    imagen={persona.imagen} 
                    ></TestimoniosComponent>
            ))
        }
        <FooterComponent></FooterComponent>
    </div>)

}


export default TestimoniosPage;