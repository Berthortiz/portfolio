import SectionAbout from "./sectionAbout";

export default function SectionContact() {
    return (
        <section className="flex flex-col justify-center gap-6 h-[450px] relative" >

            <h2 className="text-4xl font-bold">Contacto</h2>
            <div className="line-SectionContact relative after:w-[4px] after:bg-blue-600 after:rounded-4xl after:h-2/3 after:absolute flex justify-around items-center">
                <div className="text-center">
                    <p className="text-3xl font-bold py-8">Correo Electrónico </p>
                    <span className="text-2xl">berthortizweb@gmail.com</span>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold py-8">Redes</p>
                    <div className=" flex gap-8">


                        <span>
                            <a href="https://www.instagram.com/berth_ortiz/" target="_blank" rel="noopener noreferrer" >


                                <img src="src\assets\icon-instagram.svg" alt="" />
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/berth-ortiz-dev/" target="_blank" rel="noopener noreferrer" >


                                <img src="src\assets\icon-linkeding.svg" alt="" />
                            </a>
                        </span>
                        <span>
                            <a href="https://github.com/Berthortiz" target="_blank" rel="noopener noreferrer" >


                                <img src="src\assets\icon-github2.svg" alt="" />
                            </a>
                        </span>
                    </div>

                </div>


            </div>

        </section >
    )
} 