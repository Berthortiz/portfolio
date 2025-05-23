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
    <article className="flex flex-col gap-3" >
      <h2 className="text-4xl p-3">Proyectos Web</h2>
      <p className="text-2xl text-gray-400 pb-18">Estas páginas han sido creadas por mí para algunos de mis clientes</p>

      {
        data?.map((item) => {

          return (
            <section key={item.id} className="flex gap-10 px-18 pb-12 ">
              <div className="w-[45%] flex justify-center rounded-3xl overflow-hidden  " >

                <img src="/src/assets/Web-1.png" alt="" className="w-full object-contain  " />

              </div>
              <div className="w-[50%] text-left flex flex-col gap-2 pt-3.5" >
                <h2 className="text-3xl">{item.name_proyect} </h2>
                <div className="text-[var(--text-grey-custom)] flex items-center gap-3.5 text-lg">
                  <span className="">Creada con:</span>
                  <ul className="flex items-center gap-4">

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
                <p>
                  {item.description}
                </p>
                <div className="pt-4 flex  gap-4">
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



    </article>
  )
}