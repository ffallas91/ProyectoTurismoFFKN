'use client'
import MenuComponent from "@/components/MenuComponent";
import { ReporteUsuariosOut, UsuarioOut } from "@/models/ReporteUsuariosOut";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react"

const ReporteUsuarios: React.FC = () => {

    const [filtro, SetFiltro] = useState<string>("");
    const [usuarios, setUsuarios] = useState<UsuarioOut[]>([]);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            const repuesta = await axios.get<ReporteUsuariosOut>("https://francinyturismoproyect-api-5aa41d4e5161.herokuapp.com/api/route/Obtener_Usuarios");

            if (repuesta.data.codigoRespuesta === 0) {
                setUsuarios(repuesta.data.detalle);
            }

        }
        obtenerUsuarios();

    }, [])
    useEffect(()=> {
        console.log(usuarios)
    },[usuarios])

    const usuariosFiltrados = useMemo(() => {
        return usuarios.filter(usuario => usuario.nombre.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
            || usuario.correo.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
            || usuario.telefono.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
            || obtenerNombreRol(usuario.rol).toLocaleUpperCase().includes(filtro.toLocaleUpperCase()))
    }, [filtro, usuarios])


    function obtenerNombreRol(rol: number) {
        switch (Number(rol)) {
            case 1:
                return "Administrador";
            case 2:
                return "Digitador";
            case 3:
                return "Uduario";
            default:
                return "Desconocido";

        }
    }


    return (<div>
        <MenuComponent></MenuComponent>
        <div className="max-w-6xl mx-auto px-4 py-6">
            <input
                value={filtro}
                onChange={(e) => SetFiltro(e.target.value)}
                placeholder="Difite el Filtro"></input>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold" >Nombre</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold" >Correo</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold" >Rol</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold" >Telefono</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divede-gray-200 text-gray-700">
                        {
                            usuariosFiltrados.map((usu, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{usu.nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{usu.correo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{obtenerNombreRol(usu.rol)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{usu.telefono}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>

            </div>

        </div>

    </div>

    )
}

export default ReporteUsuarios;