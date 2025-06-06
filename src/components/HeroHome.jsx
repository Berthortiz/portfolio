import "./HeroHome.css"
import ButtonWithIcon from "./ButtonWithIcon"
import { IconElemetor, IconGithub } from "./IconSVG"

export default function HeroHome() {
	return (
		<main className="bg-gradiente-circle flex flex-col lg:gap-6 gap-2 pt-52 pb-40 max-sm:text-[16px]  ">
			<div className="" >
				<h1 className="lg:text-6xl text-3xl font-bold relative text-white ">¡Hola! Soy Berth </h1>
			</div>
			<p className="lg:text-3xl text-1xl font-light relative"> Puedo crear la Paginas web para tu negocio<br />
				Portafolio, tienda online y más</p>
			<div className="flex justify-center gap-4 text-[.8rem] pt-3">

				<a href="#" className="bg-[var(--primary-color)] lg:pt-1.5 pt-2.5 pb-2 px-6 rounded-3xl  ">Contáctame</a>
				<ButtonWithIcon link="#" text="GitHub" icon="src\assets\icon-github.svg" />

			</div>
		</main>
	)

}