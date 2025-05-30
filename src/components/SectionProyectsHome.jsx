import { useFetch } from "../hooks/useFetch"
import ButtonWithIcon from "./ButtonWithIcon"
import { IconElemetor, IconWordpress } from "./IconSVG";



export default function SectionProyectsHome() {

  const { data, loading, error } = useFetch()
  if (loading) {
    return (
      <h1>Cargando proyectos...</h1>)
  }

  if (error) {
    return (
      <h1>Algo salió mal</h1>
    )
  }


  console.log(data);


  return (
    <article className="flex flex-col gap-3 px-8 " >
      <h2 className="text-4xl p-3">Proyectos Web</h2>
      <p className="text-2xl text-gray-400 pb-18">Estas páginas han sido creadas por mí para algunos de mis clientes</p>

      <div className="flex xl:flex-col xl:gap-10 md:justify-between md:flex-wrap md:gap-6">

        {
          data?.map((item) => {

            return (
              <section key={item.id} className="xl:w-full flex xl:gap-10 xl:px-18 pb-12 xl:flex-row md:flex-col md:gap-2 md:w-[48%]  ">
                <div className="w-full flex justify-center rounded-3xl overflow-hidden  " >

                  <img src="/src/assets/Web-1.png" alt="" className="w-full object-contain  " />

                </div>
                <div className="w-[50%] text-left flex flex-col gap-2 pt-3.5 md:w-full md:p-2 " >
                  <h2 className="text-3xl">{item.name_proyect} </h2>
                  <div className="text-[var(--text-grey-custom)] flex items-center gap-3.5 text-lg">
                    <ul className="flex items-center flex-wrap md:gap-y-1 md:gap-x-2 md:text-[1rem]">
                      <li className="">Creada con:</li>


                      {
                        item.technologies?.map((item, index) => {

                          return (
                            <li key={`technologie-${index}`} className="flex items-center gap-2">
                              <p>{item.name}</p>
                              <img src={`${item.icon}`} />
                            </li>
                          )
                        }
                        )}
                    </ul>

                  </div>
                  <p className="text-[var(--color-text-p)]" >
                    {item.description}
                  </p>
                  <div className=" flex gap-4 xl:pt-4 md:pt-2 ">
                    {
                      item.buttons?.map((itemBTN, index) => {
                        return (

                          <ButtonWithIcon key={`itemBTN-${index}`} link="#" icon={`${itemBTN.icon}`} text={`${itemBTN.name}`}></ButtonWithIcon>

                        )
                      })
                    }
                  </div>
                </div>
              </section>
            )


          })
        }

      </div>




    </article>
  )
}