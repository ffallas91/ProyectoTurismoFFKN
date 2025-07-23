"use client";
import VentanaMensajesComponent from "@/components/VentanaMensajesComponent";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TestComponent from "@/components/TestComponent";


const LoginPage: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarVerificacionHumano, setMostrarVerificacionHumano] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const validarCredenciales = () => {
    if (!correo || !password) {
      setMostrarModal(true);
      return;
    }
    setMostrarVerificacionHumano(true); 
  };

  const handleVerificacionHumano = async () => {
    setMostrarVerificacionHumano(false); 
    try {
      const respuestaLogin = await login(correo, password);
      if (respuestaLogin) {
        router.push("/");
      } else {
        setMostrarModal(true);
      }
    } catch (error) {
      console.log("Error al hacer login:", error);
    }
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div>
      <div className=" bg-gradient-to-r from-green-200 via-blue-300 to-yellow-100  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-green-100 rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Bienvenidos a PURATICOS Adventures
            </h1>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
              <input
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="email@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="******"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
                  <button
                            onClick={validarCredenciales}
                            className="bg-green-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirmar credenciales</button>
          </div>
          <p className="text-sm text-center">DEMO: aldolfo@gmail.com /123</p>
        </div>
      </div>

      {mostrarVerificacionHumano && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <TestComponent onSuccess={handleVerificacionHumano} />
          </div>
        </div>
      )}

      {mostrarModal && (
        <VentanaMensajesComponent
          mostrar={mostrarModal}
          mensaje="Credenciales incorrectas"
          onClose={cerrarModal}
        />
      )}
    </div>
  );
};

export default LoginPage;
