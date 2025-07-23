'use client'
import MenuComponent from "@/components/MenuComponent";
import { ComentariosOut, ReporteComentariosOut } from "@/models/ReporteComentariosOut";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react"
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import VentanaMensajesComponent from "@/components/VentanaMensajesComponent";

const ReporteComentarios: React.FC = () => {
    const router = useRouter();
    const { estaAutenticado, user } = useAuth();
    const [loading, setLoading] = useState<boolean>(true);
    const [mensajeModal, setMensajeModal] = useState<string>("");
    const [mostrarModal, setMostrarModal] = useState<boolean>(false);
    const [filtro, setFiltro] = useState<string>("");
    const [Comentarios, setComentarios] = useState<ComentariosOut[]>([])





    useEffect(() => {
        if (!estaAutenticado) {
            setMensajeModal("Usted no esta logueado en la aplicacion");
            setMostrarModal(true);
            return;
            
        }
         if (user?.rol !=="1"  && user?.rol !=="2") {
            setMensajeModal("Usted no tiene los permisos para ver este apartado");
            setMostrarModal(true);
            return;
        }

    }, [estaAutenticado])


    useEffect(() => {
        const obtenerComentarios = async () => {
            const respuesta = await axios.get<ReporteComentariosOut>("https://francinyturismoproyect-api-5aa41d4e5161.herokuapp.com/api/route/Obtener_Comentarios");

            if (respuesta.data.codigoRespuesta === 0) {
                setComentarios(respuesta.data.detalle)
                setLoading(false);
            }
        }
        if(estaAutenticado)
        obtenerComentarios();
    }, []);

      const cerrarModal = () =>{
        setMostrarModal (false);
        router.push("/login")
      }

    const comentariosFiltrados = useMemo(() => {
        return Comentarios.filter(comentario =>
            comentario.nombre.toUpperCase().includes(filtro.toUpperCase()) ||
            comentario.provincia.toUpperCase().includes(filtro.toUpperCase()) ||
            comentario.correo.toUpperCase().includes(filtro.toUpperCase()) ||
            comentario.atraccion.toUpperCase().includes(filtro.toUpperCase())
        )
    }, [filtro, Comentarios]);

    return (
        <div>
            <MenuComponent></MenuComponent>
            <div className="max-w-6xl mx-auto px-4 py-6">
                <h1>{
                    loading ? (<p>Cargando Usuarios...</p>) : (
                        <div className="overflow-x-auto rounded-lg shadow-md">
                            <input
                                value={filtro}
                                onChange={(e) => setFiltro(e.target.value)}
                                placeholder="Difite el Filtro"></input>
                            <table className="min-w-full divide-y divide-gray-200 bg-white">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold" >Nombre</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold" >Provincia</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold" >Atraccion</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold" >Modalidad</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold" >Comentario</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divede-gray-200 text-gray-700">
                                    {
                                        comentariosFiltrados.map((usu, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.nombre}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.provincia}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.atraccion}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.modalidad}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{usu.comentario}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                } </h1>
            </div>
            <VentanaMensajesComponent
            mostrar={mostrarModal}
            mensaje={mensajeModal}
            onClose={cerrarModal}></VentanaMensajesComponent>
        </div>

    )
}

export default ReporteComentarios;