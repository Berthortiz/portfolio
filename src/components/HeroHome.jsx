import "./HeroHome.css"
import ButtonWithIcon from "./ButtonWithIcon"
import { IconElemetor, IconGithub } from "./IconSVG"

export default function HeroHome() {
	return (
		<main className="bg-gradiente-circle flex flex-col gap-6 pt-52 pb-40 text-white ">
			<div className="" >
				<h1 className="text-6xl font-bold relative">¡Hola! Soy Berth </h1>
			</div>
			<p className="text-3xl font-light relative "> Puedo crear la Paginas web para tu negocio<br />
				Portafolio, tienda online y más</p>
			<div className="flex justify-center gap-4">

				<a href="#" className="bg-[var(--primary-color)] pt-1.5 pb-2 px-6 rounded-3xl  ">Contáctame</a>
				<ButtonWithIcon link="#" text="GitHub" icon={IconGithub} />

			</div>
		</main>
	)

}