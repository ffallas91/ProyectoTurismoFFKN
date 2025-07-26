import React from "react";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-200 via-blue-300 to-yellow-100 shadow-sm dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto w-full p-4 md:py-8">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="flex flex-col items-center space-y-2">
            <img src="/principalp.png" className="h-24" alt="Logo" />
            <span className="text-2xl font-semibold dark:text-white">
            </span>
          </Link>
          <ul className="flex flex-wrap justify-center mt-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:underline mx-3">Home</Link>
            </li>
            <li>
              <span className="mx-3">Privacy Policy</span>
          
            </li>
            <li>
              <Link href="/contacto" className="hover:underline mx-3">Contacto</Link>
            </li>
          </ul>

          <div className="flex justify-center mt-6 space-x-6">
            <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 dark:hover:text-white">
           
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 ... (código completo del path) ..." />
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 dark:hover:text-white">
            
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3.6A10.9 10.9 0 0 0 12 0C5.4 ... (código completo del path) ..." />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@tucuenta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
         
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.2 2.3h3.1c.2 1.7 1.5 3 ... (código completo del path) ..." />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025 Created by Franciny Fallas. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
