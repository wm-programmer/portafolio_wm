import '../styles/Follow.css'

export const Paginas = () =>{
    return( 
        <div className='paginas'>
            <ul className='lista-paginas'>
                <li></li>
                <li>
                    <a href="https://github.com/wm-programmer" target='_blank' className='github'
                    title='Sigueme en Github'>
                        <span>
                            Sigueme en Github
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" target='_blank' className='linkedin'
                    title='Sigueme en Linkedin'>
                        <span>
                            Sigueme en Linkedin
                        </span>
                    </a>
                </li>
                <li></li>
            </ul>
        </div>
    )
}