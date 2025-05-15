import { useFetch } from "../hooks/useFetch"
import ButtonWithIcon from "./ButtonWithIcon"



export default function SectionProyectsHome() {

  const { data, loading, error } = useFetch()

  console.log(data);


  return (
    <article className="" >
      <h2 className="text-4xl p-3">Proyectos Web</h2>
      <p className="text-2xl text-gray-400 pb-18">Estas paginas an sido creadas por mi para alguno de mis clientes</p>


      {
        data?.map((item) => {



          return (
            <section key={item.id} className="flex gap-10 px-18">
              <div className="w-[45%] flex justify-center" >

                <img src="/src/assets/Web-1.png" alt="" className="w-full aspect-video object-contain" />

              </div>
              <div className="w-[50%] text-left flex flex-col gap-2" >
                <h2 className="text-3xl">{item.name_proyect} </h2>
                <div className="flex items-center gap-3.5 text-lg">
                  <span className="text-[var(--text-grey-custom)]">Creada con:</span>

                  <div className="flex items-center gap-2 ">
                    <p className="text-gray-300 ">WordPress</p>
                    {/* <IconWordpress /> */}

                  </div>
                  <div className="flex items-center gap-2 ">
                    <p className="text-gray-300">Elementor</p>
                    {/* <IconElemetor /> */}

                  </div>

                </div>
                <p>Te ayudamos a encontrar propiedades que se ajusten a tus necesidades y presupuesto con
                  Asesoría en Financiamiento
                </p>
                <div className="pt-4">

                  {
                    item.buttons?.map((itemBTN) => {
                      return (

                        <ButtonWithIcon link="#" icon={`${itemBTN.icon}`} text={`${itemBTN.name}`}></ButtonWithIcon>

                      )
                    })
                  }
                </div>
              </div>
            </section>
          )


        })
      }



    </article>
  )
}