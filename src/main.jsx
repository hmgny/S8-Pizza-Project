import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
