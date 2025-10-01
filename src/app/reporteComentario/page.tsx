 "use client"
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { ComentariosOut, ReporteComentariosOut } from "@/models/ReporteComentariosOut";
import axios from "axios";
import MenuComponent from "@/components/MenuComponent";
import VentanaMensajesComponent from "@/components/VentanaMensajesComponent";
import FooterComponent from "@/components/FooterComponet";

const ReporteComentario: React.FC =() =>{


 const router = useRouter();
    const { estaAutenticado, user } = useAuth();
    const [loading, setLoading] = useState<boolean>(true);
    const [mensajeModal, setMensajeModal] = useState<string>("");
    const [mostrarModal, setMostrarModal] = useState<boolean>(false);
    const [filtro, setFiltro] = useState<string>("");
    const [comentarios, setComentarios] = useState<ComentariosOut[]>([]);

    useEffect(() => {
        if (!estaAutenticado) {
            setMensajeModal("Usted no está logueado en la aplicación");
            setMostrarModal(true);
            return;
        }
        if (user?.rol !== "1" && user?.rol !== "2") {
            setMensajeModal("Usted no tiene los permisos para ver este apartado");
            setMostrarModal(true);
            return;
        }
    }, [estaAutenticado, user]);

    useEffect(() => {
        const obtenerComentarios = async () => {
            try {
                const respuesta = await axios.get<ReporteComentariosOut>(
                    "http://localhost:4321/api/route//Obtener_Comentarios"
                );
                if (respuesta.data.codigoRespuesta === 0) {
                    setComentarios(respuesta.data.detalle);
                }
            } catch (error) {
                console.error("Error al obtener comentarios:", error);
            } finally {
                setLoading(false);
            }
        };

        if (estaAutenticado) {
            obtenerComentarios();
        }
    }, [estaAutenticado]);

    const cerrarModal = () => {
        setMostrarModal(false);
        router.push("/login");
    };

    const comentariosFiltrados = useMemo(() => {
        return comentarios.filter((comentario) =>
            comentario.nombre.toUpperCase().includes(filtro.toUpperCase()) ||
            comentario.provincia.toUpperCase().includes(filtro.toUpperCase()) ||
            comentario.correo.toUpperCase().includes(filtro.toUpperCase()) ||
            comentario.atraccion.toUpperCase().includes(filtro.toUpperCase())
        );
    }, [filtro, comentarios]);

    return (
        <>
            <MenuComponent />
            <div className="max-w-6xl mx-auto px-4 py-6">
                {loading ? (
                    <p>Cargando comentarios...</p>
                ) : (
                    <div className="overflow-x-auto rounded-lg shadow-md">
                        <input
                            className="mb-4 p-2 border rounded w-full"
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            placeholder="Busqueda"
                        />
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-sky-200 text-emerald-900">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Provincia</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Atracción</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Modalidad</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">Comentario</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-gray-700">
                                {comentariosFiltrados.map((comentario, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{comentario.nombre}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{comentario.provincia}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{comentario.atraccion}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{comentario.modalidad}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{comentario.comentario}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <VentanaMensajesComponent
                mostrar={mostrarModal}
                mensaje={mensajeModal}
                onClose={cerrarModal}
            />

            <FooterComponent />
        </>
    );
}


export default ReporteComentario;