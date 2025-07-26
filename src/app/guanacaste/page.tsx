import FooterComponent from '@/components/FooterComponet';
import MenuComponent from '@/components/MenuComponent';
import React from 'react';

const GuanacastePaquetes = () => {
    const cards = [
        {
            title: '🏨 Hotel Nekajui,a Ritz‑Carlton Reserve',
            image: '/HotelGuana1.jpg',
            link: '/guanacaste',
            description:
                'El más exclusivo de la región de Guanacaste, inaugurado en febrero de 2025. Situado sobre acantilados con vistas panorámicas al Golfo de Papagayo, ofrece hospedaje en villas, suites y carpas de lujo en árboles, spa de hidroterapia, ocho restaurantes y actividades de aventura. Ideal para quienes buscan alta sofisticación en plena naturaleza',
            precio: `Desde $2400/Noche`
        },
        {
            title: '💼 Hotel JW Marriott Guanacaste Resort & Spa',
            image: '/HotelGuana2.jpeg',
            link: '/guanacaste',
            description:
                'Resort ideal para familias y quienes buscan una experiencia equilibrada entre confort y naturaleza. Ofrece acceso directo a la playa, múltiples piscinas, piscinas tipo lago y actividades familiares. Es reconocido por su ambiente relajado y servicio de calidad moderada',
            precio: `Desde $533/Noche`
        },
        {
            title: '💰Hotel Wyndham Tamarindo',
            image: '/HotelGuana3.jpg',
            link: '/guanacaste',
            description:
                'Una opción ideal si buscas comodidad, excelente ubicación y precios accesibles. Situado sobre una colina, ofrece vistas al mar desde casi todas las habitaciones. Con piscina infinita, spa y servicio de traslado gratuito al centro y club de playa, incluye desayuno y wifi. Perfecto para familias o viajeros que quieren diversión y playa sin gastar de más, bajo el respaldo de una cadena internacional',
            precio: `Desde $190/Noche`

        }
    ];

    return (<div>
        <MenuComponent></MenuComponent>
        <br /><br />
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl dark:text-white">GUANACASTE</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">El paraíso del sol, la playa y la aventura en Costa Rica. Con paisajes impresionantes, playas de ensueño y parques naturales llenos de vida, es el destino perfecto para relajarse o vivir experiencias inolvidables. Su clima cálido y su gente acogedora te harán sentir como en casa. ¡Descúbrelo y vive la pura vida!</p>
        <div className="flex justify-center py-12">
            <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    >
                        <a href={card.link}>
                            <img className="rounded-t-lg w-full h-48 object-cover" src={card.image} />
                        </a>
                        <div className="p-5">
                            <a href={card.link}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {card.title}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{card.precio}</span>
                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">RESERVE</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
    );
};

export default GuanacastePaquetes;
