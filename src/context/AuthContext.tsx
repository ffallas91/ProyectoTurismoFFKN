import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface User {
    correo: string;
    rol: string;
 
}

interface AuthContextType{
    user: User| null;
    login:(correo: string, password:string) => Promise<boolean>;
    logout: ()=> void
} 

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth =() =>{
    const context =useContext(AuthContext);
    if(!context) throw new Error("El contexto tiene que implementarse en el provider")
}