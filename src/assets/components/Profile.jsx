import perfil from '../images/perfil2.png'
import '../styles/Profile.css'

export const Profile = () => {
    return(
        <div className="horizontal-padding vertical-padding">
            <section className="profile" id="profile">
                <div className="profile-info">
                    <h1 className="profile-title">Hola soy, <br /> William Muzo</h1>
                    <p className="profile-details">
                        Ingeniero en Electronica y Telecomunicaciones, apasionado por la programación
                        y la tecnología, con el deseo de aprender sobre nuevas tecnologías. Capaz de afrontar
                        nuevos retos para demostrar mis conocimientos y habilidades.
                    </p>
                </div>
                <span className="profile-img-section">
                    <img src={perfil} alt="Ing.William Muzo" className='profile-img'/>
                    <div className='profile-img-line'></div>
                </span>
            </section>

        </div>
    )
}