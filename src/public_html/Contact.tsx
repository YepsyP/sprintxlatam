import Hero from "./Hero"
const titleContact = "Contactos"
const textContact = "Para consultas, cotizaciones o asistencia inmediata, nuestro equipo de expertos está listo para ayudarte. Puedes contactarnos a través de los siguientes canales: llamada telefónica, correo electrónico o llenando nuestro formulario de contacto en la web. Estamos comprometidos a ofrecerte soluciones logísticas personalizadas y eficientes. Hablemos sobre cómo podemos apoyar el éxito y crecimiento de tu negocio."

export function Contact() {
    return (
        <>
            <Hero title={titleContact} text={textContact} page='Contactos' />
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div>
                        <iframe
                            style={{ border: 0, width: '100%', height: '340px' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.9658848247819!2d-63.20006674623114!3d-17.75749426617518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e70cca02d2c7%3A0x51870ea50241886c!2sManzana%2040%20Plaza%20Empresarial!5e0!3m2!1ses!2sbo!4v1714004666698!5m2!1ses!2sbo"
                            frameBorder="0" allowFullScreen={true}></iframe>
                    </div>

                    <div className="row gy-4 mt-4">

                        <div className="col-lg-4">

                            <div className="info-item d-flex">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Localización:</h4>
                                    <p>Manzana 40. Torre 2. Piso 9. Santa Cruz de la Sierra . Boliva</p>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <h4>Numero de telefono:</h4>
                                    <p>+591 63567564</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfIbjO1uoihihMBaYxj3LdF4PiGpbjiZxguGVN6bNWu1PXR8Q/viewform?embedded=true"
                                width="640"
                                height="991"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                            >
                                Loading…
                            </iframe>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}