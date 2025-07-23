import React from "react";
import "../app/testimonio.css";


interface TestimonioProp {
    nombre: string,
    comentario: string,
    imagen: string,
}

const TestimoniosComponent: React.FC<TestimonioProp> = ({ nombre, comentario, imagen }) => {

    return (

        <div className="clientSection">
  <div className="clientContainer">
    <div className="clientMember">
      <div className="clientText">
        <h3>{comentario}</h3>
      </div>
      <div className="clientInfo">
        <img
          src={imagen}
          className="clientPhoto"
          width={80}
          height={80}
          alt="foto del cliente"
        />
        <h3 className="clientName">{nombre}</h3>
      </div>
    </div>
  </div>
</div>

    )
}
export default TestimoniosComponent;