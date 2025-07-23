import React from "react";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-200 via-blue-300 to-yellow-100 shadow-sm dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto w-full p-4 md:py-8">
        <div className="flex flex-col items-center justify-center">
          <a href="/" className="flex flex-col items-center space-y-2">
            <img
              src="/principalp.png"
              className="h-24"
              alt="Logo"
            />
            <span className="text-2xl font-semibold dark:text-white">
              {/* Puedes poner aquí el nombre de la empresa si quieres */}
            </span>
          </a>
          <ul className="flex flex-wrap justify-center mt-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline mx-3">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mx-3">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline mx-3">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025 Created by Franciny Fallas.  All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
