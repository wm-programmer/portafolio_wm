import '../styles/Header.css'
import { NavBarAbout } from './NavBarAbout'
import logo from '../images/perfil4.png'
import moon from '../images/moon.svg'
import sun from '../images/sun.svg'
export const HeaderAbout = () =>{
    return( 
        <header className='topheader-about'>
            <nav className='topnav'>
                <a href="#" className='logo-about'>
                    <img src={logo} alt="perfil" 
                    height="50"
                    width="50"/>
                    <div>
                        Ing.William Muzo
                    </div>
                </a>
                <button className='dark-mode-btn' aria-label='Activar modo oscuro'>
                    <img src={sun} alt="" />
                </button>
                <button className='light-mode-btn' aria-label='Activar modo claro'>
                    <img src={moon} alt="" />
                </button>
                <NavBarAbout/>
            </nav>
        </header>
    )
}