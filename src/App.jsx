import './App.css'
import HeroHome from './components/HeroHome'
import NavMenu from './components/NavMenu'
import SectionProyectsHome from './components/SectionProyectsHome'
import SectionCanalYT from './components/SectionCanalYT'
import SectionAbout from './components/sectionAbout'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer'
import ServicesSection from './components/ServicesSection'
function App() {




  return (

    <>


      <section className='max-w-[1280px] relative '>
        <NavMenu ></NavMenu>
        <HeroHome></HeroHome>
        <SectionProyectsHome></SectionProyectsHome>
        <ServicesSection></ServicesSection>
        <SectionCanalYT></SectionCanalYT>
        <SectionAbout></SectionAbout>
        <SectionContact></SectionContact>
      </section>
      <Footer></Footer>

    </>

  )
}

export default App
