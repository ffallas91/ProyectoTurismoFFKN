'use client'
import MenuComponent from "@/components/MenuComponent";
import { ComentariosOut, ReporteComentariosOut } from "@/models/ReporteComentariosOut";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react"

const ReporteComentarios: React.FC = () => {
     const[filtro,setFiltro] = useState<string>("");
    const[comentarios,setComentarios] = useState<ComentariosOut[]>([]); 
    const[loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const obtenerComentarios = async () =>{
            const repuesta = await axios.get<ReporteComentariosOut>("http://localhost:4321/api/route/Obtener_Comentarios"); 
            
            if(repuesta.data.codigoRespuesta ===0){
                setComentarios(repuesta.data.detalle)
                setLoading(false);
            }

        }
         obtenerComentarios();

    },[])
    
    const comentariosFiltrados = useMemo(() =>{
        return comentarios.filter(comentarios => comentarios.nombre.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
                                ||comentarios.correo.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
                                ||comentarios.provincia.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
                                ||comentarios.atraccion.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
                                ||comentarios.modalidad.toLocaleUpperCase().includes(filtro.toLocaleUpperCase())
                                ||comentarios.comentario.toLocaleUpperCase().includes(filtro.toLocaleUpperCase()))
    },[filtro])
    



    return (
    <div>
        <MenuComponent></MenuComponent>
       <div className="max-w-6xl mx-auto px-4 py-6">
        <input
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Digite el filtro"></input>
         <h1>{
            loading? (<p>Cargando Usuarios...</p>):(
        <div className="overflow-x-auto rounded-lg shadow-md">
         <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-blue-700 text-white">
                <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold" >Nombre</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" >Correo</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" >Provincia</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" >Atraccion</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" >Modalidad</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold" >Comentario</th>
                </tr>
            </thead>
            <tbody className="divide-y divede-gray-200 text-gray-700">
         
                {
                    comentariosFiltrados.map((usu,index)=>(
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{usu.nombre}</td>
                             <td className="px-6 py-4 whitespace-nowrap">{usu.correo}</td>
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

    </div>

    )
}

export default ReporteComentarios;