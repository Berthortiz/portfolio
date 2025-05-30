export default function SectionAbout() {
    return (
        <section className="flex xl:flex-row xl:justify-between justify-around py-10 px-10 md:flex-col-reverse md:gap-y-4">

            <div className="flex flex-col justify-center text-left">
                <h2 className="text-3xl font-bold">Un poco sobre mi  </h2>
                <p className="w-[75ch] text-[var(--color-text-p)] " > <br></br>Me llamo Wilberth Ortiz (Berth), Soy desarrollador web 💻 con experiencia en WordPress, especializado en crear sitios funcionalesr para emprendedores y pequeñas empresas.

                    <br></br><br></br>Actualmente, estoy ampliando mis habilidades como desarrollador front-end, enfocándome en JavaScript y React para ofrecer soluciones más personalizadas.

                    Me encanta resolver problemas con código y seguir aprendiendo nuevas tecnologías que me permitan entregar resultados de calidad profesional. <br></br><br></br>Y Me encanta lo que hago <span>❤️</span> </p>

            </div>
            <div>
                <img src="src\assets\img-about.png" alt="" />
            </div>

        </section>
    )
}