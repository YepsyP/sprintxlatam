import imgFuture from '../assets/img/future_shiping.jpeg'
import imgAboutHome from '../assets/img/computadoras_importacion.jpeg'
import PricingSection from './PricingSection';

interface ServiceItemProps {
    iconClass: string;
    title: string;
    description: string;
    link: string;
    delay?: number;
}

interface ServiceUsProps {
    images: string;
    title: string;
    description: string;
    delay: number;
}

interface FeaturesSectionProps {
    title: string;
    description1: string;
    description2: string;
    images: string;
}

interface FeaturesSectionProps2 {
    title: string;
    description1: string;
    descriptionPoints: string[];
    images: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconClass, title, description, link, delay = 0 }) => {
    return (
        <div className={`col-lg-4 col-md-6 service-item d-flex`} data-aos="fade-up" data-aos-delay={delay}>
            <div className="icon flex-shrink-0">
                <i className={iconClass}></i>
            </div>
            <div>
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
                <a href={link} className="readmore stretched-link">
                    <span>Learn More</span>
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    );
};

const ServiceUsItem: React.FC<ServiceUsProps> = ({ images, title, description, delay }) => {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
            <div className="card">
                <div className="card-img">
                    <img src={`src/assets/img/${images}`} alt="" className="img-fluid" />
                </div>
                <h3><a href="" className="stretched-link">{title}</a></h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeaturedUsItem: React.FC<FeaturesSectionProps2> = ({ title, description1, descriptionPoints, images }) => {
    return (
        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">

            <div className="col-md-5">
                <img src={`src/assets/img/${images}`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
                <h3>{title}</h3>
                <p className="fst-italic">
                    {description1}
                </p>
                <ul>
                    {descriptionPoints.map((descriptionPoints, index) => (
                        <li key={index}><i className="bi bi-check"></i> {descriptionPoints}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const FeaturedUsItem2: React.FC<FeaturesSectionProps> = ({ title, description1, description2, images }) => {
    return (
        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">

            <div className="col-md-5 order-1 order-md-2">
                <img src={`src/assets/img/${images}`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 order-2 order-md-1">
                <h3>{title}</h3>
                <p className="fst-italic">
                    {description1}
                </p>
                <p>
                    {description2}
                </p>
            </div>
        </div>
    );
};

export function Home() {
    return (
        <>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4 d-flex justify-content-between">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 data-aos="fade-up"><span className="highlight">Inteligencia Artificial</span> como herramienta para combatir las interrupciones en la <span className="highlight">cadena de suministro.</span></h2>
                            <p data-aos="fade-up" data-aos-delay="100">Sprintxlatam tu aliado de IA para una cadena de suministro sin interrupciones y con costes optimizados. Llevando tu importaciones y exportaciones al siguiente nivel</p>
                        </div>

                        <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                            <img src={imgFuture} className="img-fluid mb-3 mb-lg-0" alt="" />
                        </div>

                    </div>
                </div>
            </section>

            <section id="featured-services" className="featured-services">
                <div className="container">
                    <div className="row gy-4">
                        <ServiceItem
                            iconClass="fa-solid fa-cart-flatbed"
                            title="Soluciones Integrales de Logística"
                            description="Ofrecemos una amplia gama de servicios logísticos personalizados para satisfacer sus necesidades de cadena de suministro. Desde el almacenamiento hasta la distribución, gestionamos todos los aspectos con la máxima eficiencia y seguridad."
                            link=""
                        />
                        <ServiceItem
                            iconClass="fa-solid fa-truck"
                            title="Transporte Terrestre Especializado"
                            description="Nuestra flota de vehículos modernos está equipada para transportar su carga con la puntualidad y el cuidado que requiere. Cubrimos rutas nacionales e internacionales, asegurando una entrega oportuna y segura."
                            link=""
                            delay={100}
                        />
                        <ServiceItem
                            iconClass="fa-solid fa-truck-ramp-box"
                            title="Gestión Aduanera y de Comercio"
                            description="Facilitamos sus operaciones de comercio internacional con servicios completos de aduana. Desde la clasificación arancelaria hasta la representación en procedimientos aduaneros, nos aseguramos de que su mercancía cruce fronteras sin contratiempos."
                            link=""
                            delay={200}
                        />
                    </div>
                </div>
            </section>

            <section id="about" className="about pt-0">
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

            <section id="service" className="services pt-0">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Nuestros Servicios</h2>
                    </div>

                    <div className="row gy-4">
                        <ServiceUsItem
                            images="Ia_cadena_suministros.jpeg"
                            title="Importaciones con Inteligencia Artificial"
                            description="La inteligencia artificial optimiza las importaciones al predecir la demanda, identificar tendencias y problemas logísticos, y mejorar la gestión de inventario. Al procesar grandes volúmenes de datos, detecta patrones ocultos para decisiones más informadas y adaptativas, asegurando un flujo constante de productos y evitando escasez o exceso de inventario."
                            delay={600}
                        />

                        <ServiceUsItem
                            images="storage-service.jpg"
                            title="Almacenamiento Seguro y Flexible"
                            description="Proporcionamos soluciones de almacenamiento personalizables para mantener su inventario seguro y accesible. Con instalaciones vigiladas 24/7 y sistemas de manejo de última generación, garantizamos la integridad y disponibilidad de su mercancía."
                            delay={100}
                        />

                        <ServiceUsItem
                            images="capacitaciones_IA.jpeg"
                            title="Asesorias y Capacitaciones"
                            description="Ofrecemos servicios de asesoría y capacitación en IA para optimizar importaciones. Nuestros expertos guían en análisis predictivo y optimización de inventario. Aprendizaje práctico en algoritmos de IA para prever demanda, identificar tendencias y resolver problemas logísticos. Maximizamos el uso de datos para decisiones informadas, garantizando flujo constante de productos y minimizando riesgos. Prepárate para los desafíos del mercado global con nuestras soluciones y capacitación especializada."
                            delay={600}
                        />

                        <ServiceUsItem
                            images="logistics-service.jpg"
                            title="Logística Integral y Eficiente"
                            description="Gestionamos la logística de extremo a extremo con precisión y transparencia. Desde la planificación hasta la ejecución, nuestros expertos aseguran que su cadena de suministro sea ágil y coste-efectiva."
                            delay={200}
                        />

                        <ServiceUsItem
                            images="organizacion de informacion.jpeg"
                            title="Analisis y organización de informacion"
                            description="Nuestro equipo de expertos revisará meticulosamente su base de datos para identificar y corregir cualquier incoherencia, error o duplicación de datos. También podemos ayudarlo a estructurar sus datos de una manera que sea compatible con las herramientas y algoritmos de IA más populares.

                            Al preparar sus datos para el análisis de IA, podrá obtener información más precisa y procesable de sus activos de datos. Esto lo ayudará a tomar mejores decisiones comerciales, aumentar la eficiencia y obtener una ventaja competitiva. "
                            delay={600}
                        />

                        <ServiceUsItem
                            images="cargo-service.jpg"
                            title="Carga y Distribución Global"
                            description="Especialistas en la gestión de carga a cualquier escala, nos encargamos de que sus bienes sean transportados de forma segura a nivel mundial. Con una red extensa, ofrecemos opciones versátiles de transporte marítimo, aéreo y ferroviario."
                            delay={300}
                        />

                        <ServiceUsItem
                            images="trucking-service.jpg"
                            title="Transporte Terrestre Experto"
                            description="Con una flota moderna y conductores experimentados, ofrecemos servicios de transporte terrestre para entregas locales y de larga distancia. Nuestra prioridad es la puntualidad y la seguridad en cada envío."
                            delay={400}
                        />

                        <ServiceUsItem
                            images="packaging-service.jpg"
                            title="Empaque y Preparación de Calidad"
                            description="Aseguramos que su mercancía esté adecuadamente protegida con soluciones de empaque que cumplen con los más altos estándares. Ofrecemos opciones sostenibles y personalización para reflejar la calidad de su marca."
                            delay={500}
                        />

                        <ServiceUsItem
                            images="warehousing-service.jpg"
                            title="Almacenaje Innovador y Estratégico"
                            description="Nuestros almacenes están equipados con tecnología avanzada para la gestión y seguimiento de inventarios. Optimizamos el espacio y los procesos para que usted pueda enfocarse en crecer su negocio."
                            delay={600}
                        />
                    </div>
                </div>
            </section>

            <section id="call-to-action" className="call-to-action">
                <div className="container" data-aos="zoom-out">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                        </div>
                    </div>

                </div>
            </section>

            <section id="features" className="features">
                <div className="container">
                    <FeaturedUsItem
                        title="Compromiso con la Excelencia"
                        description1="Nuestra empresa está dedicada a superar las expectativas de nuestros clientes. Nos esforzamos por ofrecer servicios de la más alta calidad, asegurando que cada entrega se realiza con precisión y cuidado."
                        descriptionPoints={['Experiencia y Confiabilidad', 'Soluciones Personalizadas', 'Innovación Continua']}
                        images="features-1.jpg"
                    />
                    <FeaturedUsItem2
                        title="Avanzando con la Tecnología"
                        description1="Invertimos en tecnología de punta para optimizar todos los procesos de nuestra cadena logística. Desde sistemas de gestión de almacenes hasta seguimiento de carga en tiempo real, utilizamos herramientas que mejoran continuamente nuestro servicio."
                        description2="La innovación tecnológica es el núcleo de nuestra estrategia logística, garantizando eficiencia y precisión. Utilizamos lo último en software de gestión de almacenes y sistemas de seguimiento en tiempo real para asegurar la entrega puntual y segura de cada paquete. Nos enorgullecemos de estar siempre un paso adelante, empleando tecnologías emergentes que agregan valor y fortalecen la confianza de nuestros clientes."
                        images="features-2.jpg"
                    />
                    <FeaturedUsItem
                        title="Responsabilidad y Sostenibilidad"
                        description1="Estamos comprometidos con prácticas responsables que no solo cumplen con los estándares de la industria, sino que también protegen nuestro planeta. Nuestros procesos están diseñados para minimizar el impacto ambiental y maximizar la eficiencia."
                        descriptionPoints={['Gestión Ambiental', 'Prácticas Sostenibles', 'Compromiso Social']}
                        images="features-3.jpg"
                    />
                    <FeaturedUsItem2
                        title="Cultura de Seguridad"
                        description1="La seguridad es primordial en cada aspecto de nuestro trabajo. Desde la formación de nuestros empleados hasta el manejo de cada paquete, la seguridad es la base sobre la que construimos nuestro éxito y la confianza de nuestros clientes."
                        description2="Entendemos que un enfoque proactivo en la prevención de riesgos no solo protege a nuestros empleados, sino que también asegura la integridad y puntualidad en la entrega de cada envío. Nuestros protocolos de seguridad están diseñados para cumplir y superar los estándares de la industria, asegurando así la tranquilidad que usted y sus clientes merecen."
                        images="features-4.jpg"
                    />
                </div>
            </section>

            <section id="pricing" className="pricing pt-0">
                <div className="container" data-aos="fade-up">

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