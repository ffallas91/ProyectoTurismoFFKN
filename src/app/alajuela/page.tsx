import FooterComponent from '@/components/FooterComponet';
import MenuComponent from '@/components/MenuComponent';
import React from 'react';

const GuanacastePaquetes = () => {
    const cards = [
        {
            title: '🏨 Hotel Nayara Tented Camp',
            image: '/hotelAlajuela1.jpg',
            link: '/alajuela',
            description:
                'Un auténtico glamping de lujo en medio de la selva tropical, con vistas directas al majestuoso Volcán Arenal. Ubicado sobre pilotes para minimizar su impacto ambiental, combina sostenibilidad con elegancia, ofreciendo villas estilo safari con piscinas privadas y acceso a senderos naturales',
            precio: `Desde $800/Noche`
        },
        {
            title: '💼 Hotel Tabacón Thermal Resort & Spa',
            image: '/hotelAlajuela2.jpeg',
            link: '/alajuela',
            description:
                'Un resort ecológico de primer nivel ubicado al pie del Volcán Arenal, rodeado de selva y termales naturales que oscilan entre 22 °C y 41 °C. Ofrece habitaciones de lujo, múltiples restaurantes, spa de clase mundial y acceso directo a piscinas termales rodeadas de naturaleza',
            precio: `Desde $400/Noche`
        },
        {
            title: '💰Hotel Martino Spa & Resort ',
            image: '/hotelAlajuela3.jpg',
            link: '/alajuela',
            description:
                'Resort muy valorado con spa, piscina y restaurante gourmet. Ofrece comodidad moderna y tranquilidad en una zona conveniente de Alajuela, cerca del aeropuerto',
            precio: `Desde $130/Noche`

        }
    ];

    return (<div>
        <MenuComponent></MenuComponent>
        <br /><br />
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl dark:text-white">ALAJUELA</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Es el corazón verde de Costa Rica, donde la aventura y la cultura se unen.Visita el majestuoso Volcán Poás, relájate en sus famosas aguas termales y explora plantaciones de café únicas.Con gente cálida y paisajes impresionantes, es la puerta perfecta para iniciar tu viaje por el país.Descubre Alajuela, una joya natural llena de historia y pura vida.</p>
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
