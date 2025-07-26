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
              <div className="flex justify-center mt-6 space-x-6">
            <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.3 1.3.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.3 1.3-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.3-1.3.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.6.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.8-.3.3-.6.7-.8 1.1-.2.4-.3 1-.4 2C3 9.8 3 10.1 3 12s0 2.2.1 3.4c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.1.3.3.7.6 1.1.8.4.2 1 .3 2 .4 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.8.3-.3.6-.7.8-1.1.2-.4.3-1 .4-2 .1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.1-.3-.3-.7-.6-1.1-.8-.4-.2-1-.3-2-.4-1.2-.1-1.5-.1-4.6-.1zm0 3.5a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 8.7a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8zm6.9-8.9a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
              </svg>
            </a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3.6A10.9 10.9 0 0 0 12 0C5.4 0 0 5.4 0 12a11 11 0 0 0 1.5 5.6L0 24l6.7-1.8A11 11 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4zm-8 19.2a9.6 9.6 0 0 1-5-1.3l-.4-.2-4 .9.9-3.9-.2-.4A9.6 9.6 0 0 1 2.4 12c0-5.3 4.3-9.6 9.6-9.6 2.6 0 5 1 6.8 2.8 1.8 1.7 2.8 4.2 2.8 6.8 0 5.3-4.3 9.6-9.6 9.6zm5.3-7.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2-.4.2-.8 0a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-2.3c-.2-.4 0-.6.2-.8l.5-.5c.2-.2.3-.4.5-.6.2-.2.1-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.6-.6-.8-.6h-.6a1 1 0 0 0-.8.4c-.3.3-1 1-1 2.4 0 1.3.9 2.6 1 2.8.2.3 1.8 3 4.4 4.2 2.6 1.3 2.6.9 3.1.8.5 0 1.5-.6 1.7-1.2.3-.6.3-1.2.2-1.3z"/>
              </svg>
            </a>

            <a href="https://www.tiktok.com/@tucuenta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.2 2.3h3.1c.2 1.7 1.5 3 3.1 3.1v3.1a6.2 6.2 0 0 1-3.1-.9v6.6a6.2 6.2 0 1 1-6.2-6.2h.6v3.2a3.1 3.1 0 1 0 3.1 3.1V2.3z"/>
              </svg>
            </a>
          </div>
        </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025 Created by Franciny Fallas.  All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
