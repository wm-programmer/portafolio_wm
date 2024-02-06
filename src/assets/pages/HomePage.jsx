import { Follow } from "../components/Follow"
import { Header } from "../components/Header"
import { Paginas } from "../components/Paginas"
import '../styles/Header.css'

export const HomePage = () =>{
    return (
        <>
        <main className='page-content-home'>
          <Header/>
          <Follow/>
          <Paginas/>
        </main>
        </>
      )
}