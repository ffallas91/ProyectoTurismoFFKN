"use client";
import FooterComponent from "@/components/FooterComponet";
import MenuComponent from "@/components/MenuComponent";
import { Provincia, RespuestaAtracciones } from "@/models/AtraccionesOut";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const ContactoPage: React.FC = () => {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState<number>(0);
  const [listaAtraccionesPorProvincia, setListaAtraccionesPorProvincia] = useState<Provincia[]>([]);
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    correo: "",
    atraccion: "",
    mensaje: "",
  });

  useEffect(() => {
    const obtenerAtracciones = async () => {
      const respuesta = await axios.get<RespuestaAtracciones>("https://francinyturismoproyect-api-5aa41d4e5161.herokuapp.com/api/route/Obtener_Las_Atracciones"
      );
      if (respuesta.data.codigoRespuesta === 0)
        setListaAtraccionesPorProvincia(respuesta.data.detalle);
    };

    obtenerAtracciones();
  }, []);

  const atraccionesDisponibles = useMemo(() => {
    const provinciaActual = listaAtraccionesPorProvincia.find(
      (provincia) => Number(provincia.idProvincia) === provinciaSeleccionada
    );
    return provinciaActual ? provinciaActual.atracciones : [];
  }, [provinciaSeleccionada, listaAtraccionesPorProvincia]);

  const CambiosHtml = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDatosPersonales((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 

  return (
    <div>
      <MenuComponent></MenuComponent>
      <br /><br /><br />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Formulario de Contacto</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={datosPersonales.nombre}
                onChange={CambiosHtml}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={datosPersonales.apellido}
                onChange={CambiosHtml}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Número de contacto</label>
              <input
                type="tel"
                name="celular"
                value={datosPersonales.celular}
                onChange={CambiosHtml}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                value={datosPersonales.correo}
                onChange={CambiosHtml}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Provincia</label>
            <select
              name="provincia"
              value={provinciaSeleccionada}
              onChange={(e) => setProvinciaSeleccionada(Number(e.target.value))}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              required
            >
              <option value={0}>Seleccione una provincia</option>
              {listaAtraccionesPorProvincia.map((provincia) => (
                <option key={provincia.idProvincia} value={provincia.idProvincia}>
                  {provincia.nombreProvincia}
                </option>
              ))}
            </select>
          </div>

    
          {provinciaSeleccionada !== 0 && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">Atracción</label>
              <select
                name="atraccion"
                value={datosPersonales.atraccion}
                onChange={CambiosHtml}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="">Seleccione una atracción</option>
                {atraccionesDisponibles.map((atraccion) => (
                  <option key={atraccion.id} value={atraccion.nombre}>
                    {atraccion.nombre}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-1">Mensaje para nuestro asesor:</label>
            <textarea
              name="mensaje"
              rows={4}
              value={datosPersonales.mensaje}
              onChange={CambiosHtml}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Escribe aquí tu consulta, preferencia o duda..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-purple-200 text-white font-semibold py-2 px-6 rounded-lg shadow"
            >
              Enviar
            </button>
          </div>
      </div>
      <br /><br /><br />
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ContactoPage;