export function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row gy-4 d-flex justify-content-around">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>SprintXLatam</span>
                        </a>
                        <p>La innovación tecnológica es el núcleo de nuestra estrategia logística, garantizando eficiencia y precisión. Utilizamos lo último en software de gestión de almacenes y sistemas de seguimiento en tiempo real para asegurar la entrega puntual y segura de cada paquete.</p>
                        <div className="social-links d-flex mt-4">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 footer-links text-center">
                        <h4>Nuestros servicios</h4>
                        <ul>
                            <li><a href="#">Soluciones Integrales de Logística</a></li>
                            <li><a href="#">Gestión Aduanera y de Comercio</a></li>
                            <li><a href="#">Transporte Terrestre Especializado</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 footer-contact text-center">
                        <h4>Contactanos</h4>
                        <p>
                            Manzana 40. Torre 2. Piso 9 <br/>
                            Santa Cruz de la Sierra<br/>
                            Boliva <br/>
                            <strong>Phone:</strong> +591 63567564<br/>
                            <strong>Email:</strong> hugosoto@sprintxlatam.com<br/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>Sprintxlatam</span></strong>.
                </div>
                <div className="credits">
                    Diseñado por SprintXLatam <a href=""></a>
                </div>
            </div>

        </footer>           
    )
}