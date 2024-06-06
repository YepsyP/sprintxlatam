import Hero from './Hero.tsx'
import imgAboutHome from '../assets/img/vectorizacion_db.jpeg'

const textAbout = "En Sprintxlatam, nos dedicamos a brindar soluciones logísticas integrales y personalizadas que responden a las necesidades de un mercado globalizado. Fundada en el año 2024, nuestra empresa ha crecido hasta convertirse en un referente en la industria gracias a nuestro enfoque en la innovación, la eficiencia y el compromiso con la calidad. Nos especializamos en la gestión y optimización de la cadena de suministro, ofreciendo desde el transporte y almacenamiento hasta servicios de distribución y gestión aduanera. Nuestro equipo está compuesto por profesionales altamente cualificados y apasionados por lograr que cada operación sea exitosa."

const titleAbout = "Acerca de nosotros"

interface TeamProps {
    name: string;
    ocupation: string;
    description: string;
    images: string;
}

const MembersItem: React.FC<TeamProps> = ({ name, ocupation, description, images }) => {
    return (
        <div className="col-lg-4 col-md-6 d-flex">
            <div className="member">
                <div className="member-img">
                    <img src={`src/assets/img/${images}`} className="img-fluid" alt={name} />
                </div>
                <div className="member-content">
                    <h4>{name}</h4>
                    <span>{ocupation}</span>
                    <p>
                        {description}
                    </p>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export function About() {
    return (
        <>
            <Hero title={titleAbout} text={textAbout} page='Acerca de nosotros' />
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="row gy-4">
                        <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                            <img src={imgAboutHome} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 content order-last  order-lg-first">
                            <h3>Sobre Nosotros</h3>
                            <p>
                                Con más de una década de experiencia en el sector logístico, nos hemos destacado por ofrecer soluciones efectivas y personalizadas. Nuestra dedicación a la excelencia operativa y la satisfacción del cliente nos ha convertido en un socio confiable para negocios en todo el mundo.
                            </p>
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                                    <i className="bi bi-diagram-3"></i>
                                    <div>
                                        <h5>Nuestro Enfoque</h5>
                                        <p>Nuestra metodología se centra en la innovación y la eficiencia. Implementamos tecnología de vanguardia y procesos optimizados para garantizar que su carga llegue a su destino de manera segura y puntual.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                                    <i className="bi bi-fullscreen-exit"></i>
                                    <div>
                                        <h5>Compromiso Sostenible</h5>
                                        <p>Estamos comprometidos con el desarrollo sostenible. Nuestras operaciones se realizan con el máximo respeto por el medio ambiente, buscando constantemente reducir nuestra huella de carbono y fomentar la logística verde.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
                                    <i className="bi bi-broadcast"></i>
                                    <div>
                                        <h5>Atención al Cliente</h5>
                                        <p>Entendemos que la comunicación es clave para el éxito logístico. Por eso, ofrecemos atención al cliente inigualable, con equipos dedicados que están listos para asistirle en cada paso del proceso.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section id="team" className="team pt-0">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <span>Nuestro equipo</span>
                        <h2>Nuestro equipo</h2>

                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">

                        <MembersItem
                            name="Guiver Hugo Soto Salas"
                            ocupation="CEO y Founder"
                            description="Guiver Hugo Soto Salas, con una sólida formación en Economía y Comercio Internacional, respaldada por una beca de la FUNDACION CRE, apasionado por la innovación tecnológica y los negocios internacionales. Con más de 8 años de experiencia en Gestión Logística y Comercio Exterior, además de Análisis de Datos, ha supervisado equipos en importantes instituciones como la Aduana Nacional. Speaker, docente y voluntario en diversas organizaciones como Google Developers Groups, Cambia Corazones y Toastmasters demostrando su compromiso con el desarrollo y el servicio comunitario. Actualmente Despachante de Aduana y Fundador de SprintX"
                            images="Hugo.png" 
                        />

                        <MembersItem
                            name="Grace"
                            ocupation="Co Founder"
                            description="Especialista en Negocios Internacionales y Comercio Exterior. De profesión Economista. Master en Administración de Empresas y Exportaciones de la Escuela Europea de Negocios. Con más de 20 años de Experiencia fué Gerente de la Aduana Regional Santa Cruz, Jefe de Operaciones del Courier Internacional Door to Door Express, Jefe de Operaciones Agencia Despachante Globalscruz S.R.L.. Y actualmente con nuevos desafiós tecnológicos como Co-Founder de la Startups SprintX"
                            images="Grace.jpg" 
                        />

                        <MembersItem
                            name="Xavier Sebastian Vaca Ordoñez"
                            ocupation="CTO"
                            description="Desarrollador de Software"
                            images="Xavier.jpeg" 
                        />

                    </div>

                </div>
            </section>
        </>

    )
}