import perfil from '../images/perfil2.png'
import '../styles/Profile.css'

export const Profile = () => {
    return(
        <div className="horizontal-padding vertical-padding">
            <section className="profile" id="profile">
                <div className="profile-info">
                    <h1 className="profile-title">Hola soy, <br /> William Muzo</h1>
                    <p className="profile-details">
                    Profesional en Electrónica y Telecomunicaciones, centrado en el desarrollo y aplicación de soluciones tecnológicas. Mi enfoque proactivo e innovador, así como mi responsabilidad, se manifiestan en mi trabajo, especialmente cuando son aplicados a proyectos desafiantes. Poseo habilidades técnicas y una habilidad innata para construir relaciones interpersonales efectivas en equipos multidisciplinarios.
                    
                    Mi objetivo es formar parte de un equipo de trabajo dinámico que no solo valore mis conocimientos, sino que también proporcione un entorno propicio para mi crecimiento personal y profesional. Estoy entusiasmado por contribuir a desafíos tecnológicos en constante evolución, al tiempo que desarrollo y amplío mis habilidades en un entorno colaborativo.

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