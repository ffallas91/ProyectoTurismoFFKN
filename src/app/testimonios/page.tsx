import MenuComponent from "@/components/MenuComponent";
import TestimoniosComponent from "@/components/testimonioComponent";
import React from "react";

const TestimoniosPage: React.FC = () => {

    const vectorTesimonios = [
        {
            nombre: "Franciny",
            comentario: "Muy buen el servicio, regresare",
            imagen: "/Testimonio1.jpg"
        },
        {
            nombre: "Jorge",
            comentario: "Muy buen el servicio",
            imagen: "/Testimonio2.jpg"
        }
    ]

    return (
       <div>
         <MenuComponent></MenuComponent>
        {
            vectorTesimonios.map((persona, index) => (
                <TestimoniosComponent key={index}

                    nombre={persona.nombre}
                    comentario={persona.comentario}
                    imagen={persona.imagen} ></TestimoniosComponent>
            ))
        }
    </div>)
}


export default TestimoniosPage;