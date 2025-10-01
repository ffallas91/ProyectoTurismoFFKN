import React, { useEffect, useState } from "react";

interface TestComponentProps {
  onSuccess: () => void;
}

const TestComponent: React.FC<TestComponentProps> = ({ onSuccess }) => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [respuesta, setRespuesta] = useState<string>("");

  useEffect(() => {
    generarPregunta();
  }, []);

  const generarPregunta = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;

    setNum1(a);
    setNum2(b);
    setRespuesta("");
  };

  const verificarRespuesta = () => {
    const respuestaNumero = parseInt(respuesta, 10);

    if (!isNaN(respuestaNumero) && respuestaNumero === num1 + num2) {
      onSuccess(); 
    } else {
      generarPregunta(); 
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-4  dark:text-black">Verificación de humanidad</h1>
      <p className="mb-2 dark:text-black">
        ¿Cuánto es <strong>{num1} + {num2}</strong>?
      </p>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Tu respuesta"
        className="border border-gray-300 rounded px-3 py-1 mb-3 w-full dark:text-black"
      />
      <button
        onClick={verificarRespuesta}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Verificar
      </button>
    </div>
  );
};

export default TestComponent;
