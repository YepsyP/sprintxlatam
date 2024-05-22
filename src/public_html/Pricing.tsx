import Hero from "./Hero"
const titlePricing = "Precios"
const textPricing = "Ofrecemos una estructura de precios transparente y competitiva, diseñada para adaptarse a diversas necesidades y presupuestos. Nuestros planes están pensados para proporcionar la máxima flexibilidad y optimización de costos, asegurando que obtengas el mejor valor por tu inversión en logística."
import PricingSection from "./PricingSection"

export function Pricing() {
    return (
        <>
            <Hero title={titlePricing} text={textPricing} page='Precios' />
            <section id="pricing" className="pricing pt-0">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="section-header">
                        <span>Precios</span>
                        <h2>Precios</h2>

                    </div>

                    <div className="row gy-4">
                        <PricingSection
                            title="Consultoría de Importación"
                            price={20}
                            description="Obtenga asesoramiento experto en la importación de mercancías con nuestro servicio de Asesoría en Importaciones. Le ayudamos a navegar por las obligaciones aduaneras, encontrar proveedores y obtener productos para su negocio."
                            delay={100}
                        />

                        <PricingSection
                            title="Consultoría de Exportación"
                            price={30}
                            description="Proporcionamos orientación y asesoramiento a empresas que buscan ampliar su alcance en los mercados internacionales. Ayudamos a sortear las complejidades de la exportación, desde encontrar compradores hasta cumplir con las regulaciones. Nuestra experiencia ayuda a las empresas a alcanzar el éxito en el mercado global."
                            delay={200}
                        />

                        <PricingSection
                            title="Iniciar negocio importación/exportación"
                            price={100}
                            description="Brindamos servicios integrales de consultoría para ayudarlo a navegar las complejidades del comercio internacional y tener éxito en el mercado global."
                            delay={300}
                        />

                        <PricingSection
                            title="Consultoría de marca y marketing"
                            price={35}
                            description="Maximice el potencial de su marca con nuestra Consultoría de Branding/Marketing. Ayudamos a las empresas a desarrollar estrategias de marketing efectivas para un crecimiento y expansión exitosos."
                            delay={300}
                        />
                    </div>

                </div>
            </section>
        </>
    )
}