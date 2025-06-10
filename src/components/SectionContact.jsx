export default function SectionContact() {
    return (
        <section id="contact" className="flex flex-col justify-center gap-6 min-h-[550px] relative">
            <h2 className="text-3xl font-bold pt-10 lg:text-4xl">Contacto</h2>

            <div className="line-SectionContact flex flex-col justify-around items-center gap-14 relative 
                            after:w-[4px] after:bg-blue-600 after:rounded-4xl after:h-2/3 after:absolute after:rotate-90
                            md:flex-row md:after:rotate-0
                            lg:flex-row lg:after:rotate-0">

                <div className="text-center">
                    <p className="text-2xl font-bold py-2">Correo Electrónico </p>
                    <span>berthortizweb@gmail.com</span>
                </div>

                <div className="text-center flex flex-col gap-4">
                    <p className="text-2xl pt-4 font-bold">Redes</p>
                    <div className="flex gap-8 [&_img]:w-6">
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
                </div>
            </div>
        </section>
    )
}

