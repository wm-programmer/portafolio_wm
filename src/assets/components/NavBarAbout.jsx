import React,{useState} from 'react'
import '../styles/Header.css'
import btn_cerrar from '../images/close-icon.svg'
import { Link } from 'react-router-dom'

export const NavBarAbout = () =>{
    const [burgerActive, setBurgerActive] = useState(true)

    const toggleMenu = () => {
        setBurgerActive(!burgerActive)
    }
    return( 
        <>
        <button className={`open-menu ${burgerActive ? '' : 'hide'}`}
        onClick={toggleMenu} >
            <div></div>
            <div></div>
            <div></div>
        </button>
        
        
        <ul className={`menu ${burgerActive ? '' : 'open'}`}>
            <button className={`close-menu ${burgerActive ? 'hide' : ''}`}
            onClick={toggleMenu}>
                <img src={btn_cerrar} alt="cerrar menú" />
             
            </button>
            <li><Link to="/"><span>Home</span></Link></li>
            <li><Link to="/portafolio"><span>Portafolio</span></Link></li>
            {/* <li><Link to="/myweb/laboratorios"><span>Laboratorios</span></Link></li> */}
            <li><Link to="/contact"><span>Contacto</span></Link></li>
          
            
        </ul>
        
        </>
        )
}