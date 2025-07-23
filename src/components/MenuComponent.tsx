'use client'
import Link from "next/link";
import React, { useState } from "react";
import { croissantOne } from "./Fonts";

const MenuComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
    const [isReportOpen2, setIsReportOpen2] = useState<boolean>(false)



    return (
        <div>
            <nav className="bg-gradient-to-r from-green-200 via-blue-300 to-yellow-100 border-b shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/principalp.png"
                            alt="Logo PURATICOS"
                            className="h-26 w-auto"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                {
                                    isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12">

                                        </path>
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16">

                                        </path>
                                    )
                                }

                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-8 text-gray-1000 font-medium">
                        <li><Link href="/testimonios">Testimonios</Link></li>
                        <li className="relative group">
                            <button>Atracciones</button>
                            <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rouded z-10">
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/guanacaste'>Guanacaste</Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/alajuela'>Alajuela</Link></li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <button>Reportes</button>
                            <ul className="absolute hidden group-hover:block bg-white border shadow-md py-2 rouded z-10">
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/reporteUsuarios'>Usuarios</Link></li>
                                <li className="block px-4 py-2 hover:bg-gray-100"><Link href='/reporteComentarios'>Comentarios</Link></li>
                            </ul>
                        </li>
                        <Link href="/contacto">
                            <button type="button" className="text-white bg-emerald-300  hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contacto</button>
                        </Link>
                    </ul>
                </div>
                {
                    isOpen && (
                        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
                            <li><Link href="/testimonios">Testimonios</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                            <li>
                                <button className="w-full text-left"
                                    onClick={() => setIsReportOpen(!isReportOpen)}>
                                    Atracciones {
                                        isReportOpen ? '▲' : '▼'
                                    }
                                </button>

                                {
                                    isReportOpen && (
                                        <ul className="pl-4 mt-1 space-y-1">
                                            <li ><Link href='/guanacaste'>Guanacaste</Link></li>
                                            <li><Link href='/alajuela'>Alajuela</Link></li>
                                        </ul>

                                    )
                                }
                            </li>
                            <li>
                                <button className="w-full text-left"
                                    onClick={() => setIsReportOpen2(!isReportOpen2)}>
                                    Reportes {
                                        isReportOpen2 ? '▲' : '▼'
                                    }
                                </button>
                                {
                                    isReportOpen2 && (
                                        <ul className="pl-4 mt-1 space-y-1">
                                            <li ><Link href='/reporteUsuarios'>Usuarios</Link></li>
                                            <li><Link href='/reporteComentarios'>Comentarios</Link></li>
                                        </ul>

                                    )
                                }
                            </li>

                        </ul>
                    )
                }
            </nav>

        </div>
    )
}
export default MenuComponent;