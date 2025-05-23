
export default function NavMenu() {
  return (
    <header className="w-full flex justify-between gap-7 absolute left-1/2 -translate-x-1/2 z-20 px-14 py-5 ">
      <div className="w-1/3 flex justify-start " >

        <a href="/" className=""> <img src="/src/assets/logo-2.svg" /></a>
      </div>
      <nav className="w-1/3 flex flex-col justify-center ">
        <ul className="flex justify-center text-[1.2em] gap-12">
          <li className="">Inicio</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className="w-1/3 flex justify-end ">

        <a href="#" className="bg-[var(--primary-color)] pt-1.5 pb-2 px-6 rounded-3xl  ">Contáctame</a>
      </div>
    </header>
  )


}
