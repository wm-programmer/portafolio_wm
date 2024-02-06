import "../styles/Experiences.css"
import wave from '../images/wave.svg'
export const Experiences = () => {
    return(
        <section className="experiences" id="experience">
            {/* <img src={wave} alt="division" className="wave"/> */}
            <svg className="wave" viewBox="0 0 1400 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-15.0079 22.92C354.732 63.38 953.596 -55.05 1437.13 45.63L1400 55H6.55479e-05L-15.0079 22.92Z" fill="currentColor"/>
            </svg>

            <div className="experiences-body">
                <h2 className="experiences-title">Experiencia</h2>
                <div className="experiences-grid">
                    <div className="empty"></div>
                    <div className="line"></div>

                    <div className="experience">
                        <div className="experience-date">Desarrollador Independiente</div>
                        <div className="experience-company"></div>
                        <div className="experience-position">Actualmente</div>
                        <div className="experience-description">
                            * Desarrollo de proyectos de robótica <br />
                            * Soluciones IoT <br/>
                            * Clases de electónica, circuitos y programación <br/>
                            * Desarrollador Freelance
                        </div>
                    </div>

                    <div className="experience experience_left">
                        <div className="experience-date">Programa de Ciberseguridad</div>
                        <div className="experience-company">Noviembre 2022</div>
                        <div className="experience-position">Telefónica Movistar</div>
                        <div className="experience-description">
                            * Hacking con Phyton <br/>
                            * Gobierno y riesgos <br/>
                            * Análisis forense de sistemas informáticos  <br/>
                            * Criptografía y Esteganografía <br/>
                            * Hacking Ético <br/>
                            * Metasploit
                        </div>
                    </div>

                    <div className="line"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="line"></div>

                    <div className="experience">
                        <div className="experience-date">Desarrollador de Nodos y Redes Sigfox para proyectos IoT</div>
                        <div className="experience-company">Febrero 2022</div>
                        <div className="experience-position">CONGOPE</div>
                        <div className="experience-description">
                            * Diseño e implementaccion de una red de sensores inalambricos. <br/>
                            * Acoplamiento de sensores para la agricultura.
                            * Desarrollo de software para microcontroladores como arduino, esp32 y kit thinxtra. <br/>
                            * Administración de base de datos con GCP e integración de dashboard. <br/>
                            * Desarrollo de APIs para la integración de nuevas tecnologías 
                        </div>
                    </div>

                    <div className="experience experience_left">
                        <div className="experience-date">Desarrollador de Software</div>
                        <div className="experience-company">Septiembre 2021</div>
                        <div className="experience-position">Children International</div>
                        <div className="experience-description">
                            * Identificación de las necesidades de los niños para la propuesta de nuevas soluciones. <br/>
                            * Desarrollador de proyectos educativos a partir de software y hardware. <br/>
                            * Creación de la apliacición interactiva "Te cuento un Cuento", para la estimulación de la lectura.
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="line"></div>

                    <div className="experience">
                        <div className="experience-date">Pasantía Técnica</div>
                        <div className="experience-company">Diciembre 2020</div>
                        <div className="experience-position">INSETK S.A.</div>
                        <div className="experience-description">
                            * Elaboración de informes de cámaras y dispositivos de seguridad.<br/>
                            * Desarrollo de la consultoría "Quito Ciudad Inteligente", con el tema
                            "Servicios y Partners de la Empresa Verint".<br/>
                            * Elaboración de presentaciones de productos para clientes potenciales. <br/>
                            * Capacitación en dispositivos de seguridad.    
                        </div>
                    </div>
                    

                </div>
            </div>
            {/* <img src={wave} alt="division" className="wave wave_bottom"></img> */}
            <svg className="wave wave_bottom" viewBox="0 0 1400 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-15.0079 22.92C354.732 63.38 953.596 -55.05 1437.13 45.63L1400 55H6.55479e-05L-15.0079 22.92Z" fill="currentColor"/>
            </svg>
        </section>
    )
}