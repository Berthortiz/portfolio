import Service from "./Service";
import "./ServiceSection.css";


export default function ServicesSection() {
    return (
        <section
            className="gradiente__service
            py-10 px-6 min-h-[600px] flex flex-col justify-center gap-20 lg:min-h-[600px] lg:pt-30
            

            ">

            <h2 className="text-3xl font-bold text-center lg:text-4xl">Mis Servicios</h2>

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">

                <Service
                    // icon="💻"
                    title="Creación de Páginas web"
                    description="Creación de sitios web informativos y portafolios profesionales 💼. Perfecto para mostrar tu trabajo, compartir contenido o presentar una empresa con un diseño atractivo y optimizado."
                    btnUrl="https://wa.link/ki29v4"
                />
                <Service
                    // icon="🛒"
                    title="Tiendas Online"
                    description="Desarrollo de e-commerce con integración de pagos, gestión de productos y herramientas avanzadas para vender en línea."
                    btnUrl="https://wa.link/ki29v4"
                />
                <Service
                    // icon="✈️"
                    title="Webs para Viajes y Turismo"
                    description="Creación de sitios web especializados para agencias de viajes, guías turísticas y reservas de tours. Incluye funciones como reservas en línea, galerías de destinos y secciones interactivas para atraer clientes."
                    btnUrl="https://wa.link/ki29v4"
                />


            </div>
        </section>
    );
}