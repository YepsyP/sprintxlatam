import Hero from "./Hero"
const titleContact = "Consigue una cotización"
const textContact = "En Sprintxlatam, estamos listos para ofrecerte una solución logística a medida. Rellena nuestro formulario en línea o contáctanos directamente para obtener una cotización que se ajuste a las necesidades específicas de tu negocio. Con nosotros, tendrás acceso a una amplia gama de servicios logísticos, desde transporte y almacenamiento hasta gestión de inventarios y logística inversa. Nuestro equipo de expertos está comprometido a proporcionarte una propuesta eficiente y competitiva. Da el primer paso hacia una logística más inteligente y eficiente hoy mismo."

export function GetQuote () {
    return(
        <Hero title={titleContact} text={textContact} page='Consigue una cotización'/>
    )
}