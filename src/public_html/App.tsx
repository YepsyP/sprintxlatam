import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Header.tsx'
import { Footer } from './Footer.tsx'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Pricing } from './Pricing.tsx'
import { Contact } from './Contact.tsx'
import { GetQuote } from './Get-a-quote.tsx'

export function App() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='pricing' element={<Pricing />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='get-a-quote' element={<GetQuote />}/>
            </Routes>
            <Footer/>
        </Router>
    )
}