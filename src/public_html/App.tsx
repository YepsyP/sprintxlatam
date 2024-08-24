import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { About } from './About';
import { Pricing } from './Pricing';
import { Contact } from './Contact';
import { GetQuote } from './Get-a-quote';
import FormFileUploads from './FormFileUploads'; // Importar el nuevo componente

export function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='contact' element={<Contact />} />
                <Route path='get-a-quote' element={<GetQuote />} />
                <Route path='upload-files' element={<FormFileUploads />} /> {/* Nueva ruta para subir archivos */}
            </Routes>
            <Footer />
        </Router>
    );
}
