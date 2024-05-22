import { Link } from 'react-router-dom'
export function Header () {
    return (
      <header id="header" className="header d-flex align-items-center fixed-top sticked">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <Link to='/' className="logo d-flex align-items-center">
            <h1>Sprintxlatam</h1>
          </Link>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to='/'>Principal</Link></li>
              <li><Link to='about'>Acerca de nosotros</Link></li>
              <li><Link to='pricing'>Precios</Link></li>
              <li><Link to='contact'>Contactos</Link></li>
              <li><a href="https://wa.me/+59163567564" className="whatsapp-button" target="_blank"><i className="bi bi-whatsapp whatsapp-icon"></i>Chatea con nosotros</a></li>
              <li><Link to='get-a-quote' className='get-a-quote'>Consigue una cotización</Link></li>
            </ul>
          </nav>

        </div>
      </header>
    )
}