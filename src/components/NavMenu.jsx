
export default function NavMenu() {
  return (
    <header className="flex gap-7 px-8 py-3 fixed bg-black left-1/2 top-16 transform -translate-1/2 border-2 border-gray-700 rounded-4xl ">
      <a href="/" className=""> <img src="/src/assets/logo-2.svg" /></a>
      <nav>
        <ul className="flex  text-[1.2em] gap-12">
          <li className="">Inicio</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  )


}
