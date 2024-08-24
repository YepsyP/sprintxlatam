import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    useEffect(() => {
        const body = document.querySelector('body');
        const mobileNavShow = document.querySelector('.mobile-nav-show');
        const mobileNavHide = document.querySelector('.mobile-nav-hide');

        const mobileNavToggle = () => {
            body?.classList.toggle('mobile-nav-active');
            mobileNavShow?.classList.toggle('d-none');
            mobileNavHide?.classList.toggle('d-none');
        };

        document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                mobileNavToggle();
            });
        });

        // Close the mobile nav when a link is clicked
        document.querySelectorAll('#navbar a').forEach(navbarlink => {
            navbarlink.addEventListener('click', () => {
                if (body?.classList.contains('mobile-nav-active')) {
                    mobileNavToggle();
                }
            });
        });

        // Sticky header on scroll
        const selectHeader = document.querySelector('#header');
        const handleScroll = () => {
            if (selectHeader) {
                window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
            }
        };

        document.addEventListener('scroll', handleScroll);

        // Cleanup event listeners when the component is unmounted
        return () => {
            document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
                el.removeEventListener('click', mobileNavToggle);
            });
            document.querySelectorAll('#navbar a').forEach(navbarlink => {
                navbarlink.removeEventListener('click', mobileNavToggle);
            });
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <Link to='/' className="logo d-flex align-items-center">
                    <h1>SprintXLatam</h1>
                </Link>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to='/'>Principal</Link></li>
                        <li><Link to='/about'>Acerca de nosotros</Link></li>
                        <li><Link to='/pricing'>Precios</Link></li>
                        <li><Link to='/contact'>Contactos</Link></li>
                        <li><Link to='/upload-files'>Subir Archivos</Link></li>
                        <li><a href='https://sprintxlatam.blogspot.com/'>Blog</a></li>
                        <li><a href="https://wa.me/+59163567564" className="whatsapp-button" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp whatsapp-icon"></i> Chatea con nosotros</a></li>
                        <li><Link to='/get-a-quote' className='get-a-quote'>Consigue una cotización</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
