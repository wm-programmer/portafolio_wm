import { HeaderAbout } from "../components/HeaderAbout"
import { Profile } from "../components/Profile"
import { Experiences } from "../components/Experiences"
import { Skills } from "../components/Skills"
import { Courses } from "../components/Courses"
import '../styles/Header.css'

export const AboutPage = () =>{
    return (
        <>
        <main className='page-content-about' >
          <HeaderAbout/>
          <Profile/>
          <Experiences/>
          <Skills/>
          <Courses/>
        </main>
        </>
      )
}