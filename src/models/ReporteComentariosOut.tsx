import {RespuestaBase}from "./RespuestaBase";

export interface ReporteComentariosOut extends RespuestaBase{
    detalle: ComentariosOut[];
}


export interface ComentariosOut{
    nombre:string;
     correo:string;
      provincia:string;
      atraccion: string;
      modalidad: string;
      comentario: string;
 

}