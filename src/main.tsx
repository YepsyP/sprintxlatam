import ReactDOM from 'react-dom/client'
import { App } from './public_html/App'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App/>
)
