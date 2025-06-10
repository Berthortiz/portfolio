import { useFetch } from "../hooks/useFetch"
import ButtonWithIcon from "./ButtonWithIcon"

export default function SectionProyectsHome() {
  const { data, loading, error } = useFetch()

  if (loading) {
    return <h1>Cargando proyectos...</h1>
  }

  if (error) {
    return <h1>Algo salió mal</h1>
  }

  console.log(data);

  return (
    <article className="gap-3 px-6 lg:pt-16 " id="proyects">
      <h2 className="text-2xl font-black p-3 md:text-3xl lg:text-4xl">Proyectos Web que He Creado</h2>
      <p className=" text-gray-400 pb-14 md:pb-10 lg:text-2xl lg:pb-18">
        Estas páginas han sido creadas por mí para algunos de mis clientes
      </p>

      <div className="flex flex-col  
                      md:flex-row md:flex-wrap md:justify-between md:gap-6
                      lg:flex-col lg:gap-10">
        {data?.map((item) => {
          const idProyect = item.id;

          return (
            <section
              key={idProyect}
              className="flex flex-col pb-12 max-sm:flex-col md:flex-col md:gap-2 md:w-[48%] lg:flex-row lg:w-full lg:gap-10 lg:px-18"
            >
              <div className="w-full flex justify-center rounded-2xl overflow-hidden lg:w-[50%] lg:rounded-3xl">
                <img src={item.image} alt="" className="w-full object-contain" />
              </div>

              <div className="w-full text-left flex flex-col gap-2 pt-3.5 p-3 md:w-full md:p-2 lg:w-[50%]">
                <h2 className="text-[20px] font-bold text-gray-300 lg:text-3xl">
                  {item.name_proyect}
                </h2>
                <div className="text-[var(--text-grey-custom)] flex items-center gap-3.5 text-lg">
                  <ul className="flex items-center text-[16px] flex-wrap gap-x-2 md:gap-y-1 md:gap-x-2 md:text-[1rem]">
                    <li>Creada con:</li>
                    {item.technologies?.map((tech, index) => (
                      <li key={`technologie-${index}`} className="flex items-center gap-2">
                        <p>{tech.name}</p>
                        <img src={`${tech.icon}`} />
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-300">{item.description}</p>
                <div className="flex text-gray-300 text-[.8rem] pt-3 gap-4 md:pt-2 lg:text-[1rem] xl:pt-4">
                  {item.buttons?.map((itemBTN) => (
                    <ButtonWithIcon
                      key={`itemBTN-${idProyect}`}
                      link={itemBTN.link}
                      icon={`${itemBTN.icon}`}
                      text={`${itemBTN.name}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </article>
  )
}