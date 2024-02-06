//Estilos
import './App.css'
//Paginas
import { HomePage } from './assets/pages/HomePage'
import { NotFoundPage } from './assets/pages/NotFoundPage'
import { AboutPage } from './assets/pages/AboutPage'
// import { LaboratoriosPage } from './assets/pages/LaboratoriosPage'
import { PortafolioPage } from './assets/pages/PortafolioPage'
import { ContactPage } from './assets/pages/ContactPage'
// Rutas
import { BrowserRouter, Route, Routes} from 'react-router-dom'

export function App(){
  return(
    <main >
    <BrowserRouter basename='/portafolio_wm'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="portafolio" element={<PortafolioPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
    </main>
  )
}

/* export function App() {
  return (
    <>
    <main className='page-content'>
    <Header/>
    <Follow/>
    <Paginas/>
    </main>
    </>
  )
}
 */