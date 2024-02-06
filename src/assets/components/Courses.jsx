import '../styles/Courses.css'
import wave from '../images/wave.svg'

export const Courses = () => {
    return(
        <section className="courses" id="courses">
        {/* <img src={wave} alt="division" className="wave_course"/> */}
        <svg className="wave_course" viewBox="0 0 1400 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-15.0079 22.92C354.732 63.38 953.596 -55.05 1437.13 45.63L1400 55H6.55479e-05L-15.0079 22.92Z" fill="currentColor"/>
        </svg>
        <div className="courses-body">
            <h2 className="courses-title">Cursos Complementarios</h2>
            <div className="courses-grid">
                <div className="line_course"></div> 
                <div className="course ">
                    <div className="course-name">Introcution to IoT</div>
                    <div className="course-company">Cisco Networkin Academy.| 2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Programa de Ciberseguridad</div>
                    <div className="course-company">Telefónica Movistar.| 2022</div>
                </div>

                
                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Sistemas Integrados de Gestión ISO 9001/14001/45001</div>
                    <div className="course-company">SPARTAN ACADEMY.|2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Network Security Associate 1</div>
                    <div className="course-company">Fortinet Training Institute.|2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Introducción a la ciberseguridad</div>
                    <div className="course-company">Cisco Networking Academy.|2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Diseño Web con HTML5 + CSS</div>
                    <div className="course-company">Telefónica Movistar.|2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">CCNA Introduction to Networks</div>
                    <div className="course-company">Cisco Networking Academy.|2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Comunicación de Datos</div>
                    <div className="course-company">ALFASAT Network Academy.|2022</div>
                </div>

                <div className="line_course"></div> 
                <div className="course">
                    <div className="course-name">Prototipado Rápido y Diseño PCB</div>
                    <div className="course-company">IEEE-ESPE.|2022</div>
                </div>

            </div>
        </div>
        <svg className="wave wave_bottom" viewBox="0 0 1400 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-15.0079 22.92C354.732 63.38 953.596 -55.05 1437.13 45.63L1400 55H6.55479e-05L-15.0079 22.92Z" fill="currentColor"/>
        </svg>
      
    </section>
        
    )
}