import "./SectionAbout.css"

export default function SectionAbout() {
    return (
        <section id="about" className="gradiente__about flex flex-col-reverse justify-around gap-4 py-10 px-10 
        md:flex-row md:gap-y-4 md:min-h-[600px]
        lg:flex-row lg:justify-start ">

            <div className="flex flex-col justify-center text-left lg:items-start">
                <h2 className="font-bold text-2xl lg:text-3xl">Un poco sobre mi</h2>
                <p className=" text-[var(--color-text-p)] md:w-[55ch] lg:w-[75ch]"> <br />Me llamo Wilberth Ortiz (Berth), Soy desarrollador web 💻 con experiencia en WordPress, especializado en crear sitios funcionalesr para emprendedores y pequeñas empresas.

                    <br></br><br></br>Actualmente, estoy ampliando mis habilidades como desarrollador front-end, enfocándome en JavaScript y React para ofrecer soluciones más personalizadas.

                    Me encanta resolver problemas con código y seguir aprendiendo nuevas tecnologías que me permitan entregar resultados de calidad profesional. <br></br><br></br>Me encanta lo que hago <span>❤️</span> </p>

            </div>
            <div className="my-auto" >
            </div>

        </section >
    )
}