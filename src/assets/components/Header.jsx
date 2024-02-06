import '../styles/Header.css'
import { NavBar } from './NavBar'
import logo from '../images/perfil4.png'
export const Header = () =>{
    return( 
        <header className='topheader'>
            <nav className='topnav'>
                <a href="#" className='logo'>
                    <img src={logo} alt="perfil" 
                    height="50"
                    width="50"/>
                    <div>
                        Ing.William Muzo
                    </div>
                </a>
                <NavBar/>
            </nav>
        </header>
    )
}