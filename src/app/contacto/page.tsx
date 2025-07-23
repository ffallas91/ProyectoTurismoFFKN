"use client"
import MenuComponent from "@/components/MenuComponent";
import { Provincia, RespuestaAtracciones } from "@/models/AtraccionesOut";
import axios from "axios";
import React, { ReactNode, useEffect, useMemo, useState } from "react";

const ContactoPage: React.FC = () => {
    const [pronvinciaSeleccionada, setProvinciaSeleccionada] = useState<number>(0);
    const [listaAtraccionesPorProvincia, setListaAtraccionesPorProvincia] = useState<Provincia[]>([]);

    useEffect(() => {
        const obtenerAtracciones = async () => {
            const respuesta = await axios.get<RespuestaAtracciones>("https://francinyturismoproyect-api-5aa41d4e5161.herokuapp.com/api/route/Obtener_Las_Atracciones");

            if (respuesta.data.codigoRespuesta === 0)
                setListaAtraccionesPorProvincia(respuesta.data.detalle)
        }

        obtenerAtracciones();

    }, [])


    const atraccionesDisponibles = useMemo(() => {
        const provinciaActual = listaAtraccionesPorProvincia.find(
            (provincia) => Number(provincia.idProvincia) === pronvinciaSeleccionada
        );
        return provinciaActual ? provinciaActual.atracciones : [];

    }, [pronvinciaSeleccionada])

    return (<div>
        <MenuComponent></MenuComponent>
        <h1>Seleccione una provincia y una atraccion </h1>
        <label>Provincia:</label>
        <select value={pronvinciaSeleccionada} onChange={(e)=>setProvinciaSeleccionada(Number(e.target.value))}>
            <option value={0}>seleccione una provincia</option>
            {
                listaAtraccionesPorProvincia.map((provincia) => (
                    <option key={provincia.idProvincia} value={provincia.idProvincia}>
                        {provincia.nombreProvincia}
                    </option>
                ))
            }
        </select>

        {
            pronvinciaSeleccionada !==0 && (
                <div>
                    <label>Atraccion:</label>
                    <select>
                        {
                           atraccionesDisponibles.map((atracciones) => (
                                <option key={atracciones.id} value={atracciones.nombre}>
                                    {atracciones.nombre}
                                </option>
                            ))
                        }
                    </select>
                </div>
            )
        }

    </div>)
}


export default ContactoPage;