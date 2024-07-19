import Hero from './Hero';
const titleContact = "Consigue una cotización";
const textContact = "En Sprintxlatam, estamos listos para ofrecerte una solución logística a medida. Rellena nuestro formulario en línea o contáctanos directamente para obtener una cotización que se ajuste a las necesidades específicas de tu negocio. Con nosotros, tendrás acceso a una amplia gama de servicios logísticos, desde transporte y almacenamiento hasta gestión de inventarios y logística inversa. Nuestro equipo de expertos está comprometido a proporcionarte una propuesta eficiente y competitiva. Da el primer paso hacia una logística más inteligente y eficiente hoy mismo.";
import imageGetQuote from '/assets/img/quote-bg.jpg';

export function GetQuote() {
    return (
        <>
            <Hero title={titleContact} text={textContact} page='Consigue una cotización' />
            <section id="get-a-quote" className="get-a-quote">
                <div className="container" data-aos="fade-up">
                    <div className="row g-0">
                        <div className="col-lg-5 quote-bg" style={{ backgroundImage: `url(${imageGetQuote})` }}></div>
                        <div className="col-lg-7">
                            <div className="row gy-4">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLScGRc9OBAZ_e9NyeKGClaImiVmrRSFwGANgLuzwgl13ENEqhQ/viewform?embedded=true"
                                    width="640"
                                    height="1182"
                                    frameBorder="0"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Google Forms"
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}