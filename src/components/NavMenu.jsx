import { useEffect, useState } from "react"



export default function NavMenu() {

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {


    // if (openNav) {
    //   document.body.style.overflow = 'hidden'
    //   document.body.style.height = '100vh'
    //   // opcional, previene rebote en móviles
    // } else {
    //   document.body.style.overflow = ''
    //   document.body.style.height = ''
    // }




    const handleResize = () => {
      setOpenNav(false)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize);
    };




  }, [])

  const handleOpenNav = () => {
    setOpenNav(!openNav)
  }
  const handleRemoveNavMovil = (event) => {
    if (event.target.tagName === "A" && event.target.className === "linkNavMenu")
      setOpenNav(false)
  }


  return (
    <header className={`${openNav ? "" : "before:hidden"} overscroll-y-contain flex w-full justify-between absolute gap-7 p-6
                        z-20 lg:p-6 lg:before:hidden
                        before:w-[100vw] before:min-h-[100vh] before:backdrop-blur-xs  before:left-0 before:top-0 before:z-10 before:bg-black/70  before:fixed`}
    >
      <div className="w-full flex justify-start lg:w-[15%]" >

        <a href="/" className="w-10"> <img src="/logo-2.svg" /></a>
      </div>
      <nav className={`${openNav ? "flex " : "hidden"} 
         flex-col min-h-[100vh] z-10 justify-start fixed top-0 left-0 right-20 p-18 bg-gray-900/80 lg:bg-gray-900/0 backdrop-blur-lg lg:flex lg:justify-center lg:relative lg:min-h-auto lg:p-0 lg:w-full `} >
        <div className=" w-full flex justify-center pb-4 lg:justify-start lg:hidden lg:pb-0 lg:w-fit " >

          <a href="/" className=""> <img
            className="w-16 "
            src="/logo-2.svg" /></a>
        </div>
        <ul onClick={handleRemoveNavMovil} className="flex flex-col pb-14 text-blue-100 w-full gap-3 text-[1em] lg:flex-row lg:justify-center lg:gap-12 lg:relative lg:p-0 lg:pb-0 lg:text-[1em] ">

          <li >  <a className="linkNavMenu" href="/">  Inicio </a></li>
          <li >  <a className="linkNavMenu" href="#proyects">Proyectos </a>  </li>
          <li >  <a className="linkNavMenu" href="#about">Sobre Mí </a>  </li>
          <li >  <a className="linkNavMenu" href="#contact">Contacto</a> </li>
          <li className="lg:hidden">
            <div className="pt-4 flex justify-center lg:flex lg:justify-end text-[14px] text-amber-50 lg:w-1/3 ">
              <a href="#" className="bg-[var(--primary-color)] pt-1.5 pb-2 px-6 rounded-3xl ">Contáctame
                <span className="pl-2 pt-1" >
                  <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.7262 0.000128001C10.7587 0.000128001 0.19 10.5689 0.19 23.5364C0.19 27.6926 1.2825 31.7301 3.325 35.2926L0 47.5001L12.4687 44.2226C15.9125 46.0989 19.7837 47.0964 23.7262 47.0964C36.6937 47.0964 47.2625 36.5276 47.2625 23.5601C47.2625 17.2664 44.8162 11.3526 40.375 6.91138C38.1973 4.71238 35.6037 2.9688 32.7453 1.78224C29.887 0.59568 26.8211 -0.010125 23.7262 0.000128001ZM23.75 3.96638C28.975 3.96638 33.8675 6.00888 37.5725 9.71388C39.3903 11.532 40.8315 13.6908 41.8137 16.0668C42.7959 18.4428 43.2997 20.9892 43.2962 23.5601C43.2962 34.3426 34.5087 43.1064 23.7262 43.1064C20.2112 43.1064 16.7675 42.1801 13.775 40.3751L13.0625 39.9714L5.6525 41.9189L7.62375 34.6989L7.14875 33.9389C5.1883 30.8238 4.15071 27.217 4.15625 23.5364C4.18 12.7539 12.9437 3.96638 23.75 3.96638ZM15.39 12.6589C15.01 12.6589 14.3687 12.8014 13.8225 13.3951C13.3 13.9889 11.7562 15.4376 11.7562 18.3114C11.7562 21.2089 13.87 23.9876 14.1312 24.3914C14.4637 24.7951 18.3112 30.7326 24.225 33.2501C25.6262 33.8914 26.7187 34.2476 27.5737 34.5089C28.975 34.9601 30.2575 34.8889 31.2787 34.7464C32.4187 34.5801 34.7462 33.3214 35.245 31.9439C35.7437 30.5664 35.7437 29.4026 35.6012 29.1414C35.435 28.9039 35.055 28.7614 34.4612 28.5001C33.8675 28.1676 30.97 26.7426 30.4475 26.5526C29.9012 26.3626 29.5687 26.2676 29.1175 26.8376C28.7375 27.4314 27.5975 28.7614 27.265 29.1414C26.9087 29.5451 26.5762 29.5926 26.0062 29.3076C25.3887 28.9989 23.4887 28.3814 21.2562 26.3864C19.4987 24.8189 18.335 22.8951 17.9787 22.3014C17.6937 21.7314 17.955 21.3751 18.24 21.1139C18.5012 20.8526 18.8812 20.4251 19.1187 20.0689C19.4275 19.7364 19.5225 19.4751 19.7125 19.0951C19.9025 18.6914 19.8075 18.3589 19.665 18.0739C19.5225 17.8126 18.335 14.8676 17.8362 13.7039C17.3612 12.5639 16.8862 12.7064 16.5062 12.6826C16.1737 12.6826 15.7937 12.6589 15.39 12.6589Z" fill="white" />
                  </svg>
                </span>
              </a>

            </div>

          </li>
          <li className="lg:hidden">
            <div className="flex justify-center pt-4 gap-8 [&_img]:w-6">
              <span>
                <a href="https://www.instagram.com/berth_ortiz/" target="_blank" rel="noopener noreferrer">
                  <img src="/icon-instagram.svg" alt="Instagram" />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/berth-ortiz-dev/" target="_blank" rel="noopener noreferrer">
                  <img src="/icon-linkeding.svg" alt="LinkedIn" />
                </a>
              </span>
              <span>
                <a href="https://github.com/Berthortiz" target="_blank" rel="noopener noreferrer">
                  <img src="/icon-github2.svg" alt="GitHub" />
                </a>
              </span>
            </div>
          </li>
          <li className="lg:hidden">
            <button onClick={handleOpenNav} className="text-3xl font-bold absolute top-6 right-10 opacity-85  " > x </button>
          </li>


        </ul>


      </nav>
      <div className="w-1/3 lg:flex justify-end hidden lg:text-[14px] lg:w-[15%]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.link/ki29v4"
          className="bg-[var(--primary-color)] pt-1.5 pb-2 px-6 rounded-3xl ">
          WhatsApp
        </a>
      </div>
      <button onClick={handleOpenNav} className="lg:hidden">


        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 17.5C20.3852 17.5002 20.7556 17.6486 21.0344 17.9144C21.3132 18.1802 21.479 18.5431 21.4975 18.9279C21.516 19.3127 21.3858 19.6898 21.1338 19.9812C20.8818 20.2726 20.5274 20.4558 20.144 20.493L20 20.5H4C3.61478 20.4998 3.24441 20.3514 2.96561 20.0856C2.68682 19.8198 2.52099 19.4569 2.50248 19.0721C2.48396 18.6873 2.61419 18.3102 2.86618 18.0188C3.11816 17.7274 3.47258 17.5442 3.856 17.507L4 17.5H20ZM20 10.5C20.3978 10.5 20.7794 10.658 21.0607 10.9393C21.342 11.2206 21.5 11.6022 21.5 12C21.5 12.3978 21.342 12.7794 21.0607 13.0607C20.7794 13.342 20.3978 13.5 20 13.5H4C3.60218 13.5 3.22064 13.342 2.93934 13.0607C2.65804 12.7794 2.5 12.3978 2.5 12C2.5 11.6022 2.65804 11.2206 2.93934 10.9393C3.22064 10.658 3.60218 10.5 4 10.5H20ZM20 3.5C20.3978 3.5 20.7794 3.65804 21.0607 3.93934C21.342 4.22064 21.5 4.60218 21.5 5C21.5 5.39782 21.342 5.77936 21.0607 6.06066C20.7794 6.34196 20.3978 6.5 20 6.5H4C3.60218 6.5 3.22064 6.34196 2.93934 6.06066C2.65804 5.77936 2.5 5.39782 2.5 5C2.5 4.60218 2.65804 4.22064 2.93934 3.93934C3.22064 3.65804 3.60218 3.5 4 3.5H20Z" fill="white" />
        </svg>
      </button>

    </header>
  )


}
