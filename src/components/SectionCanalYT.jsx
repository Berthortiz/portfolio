

import { useState } from "react"
import "./SectionCanalYT.css"
const useSlider = () => {

    const [imgSlide, setImgSlide] = useState(0);
    const [loaderImage, setLoaderImage] = useState(false)



    const handleClickRightYT = () => {
        setLoaderImage(true)
        if (imgSlide >= 2) {
            setImgSlide(0)

            return
        }
        setImgSlide(imgSlide + 1);
    }

    const handleClickLefttYT = () => {
        setLoaderImage(true)
        if (imgSlide <= 0) {
            setImgSlide(2)
            return
        }
        setImgSlide(imgSlide - 1);
    }

    setTimeout(() => {
        setLoaderImage(false)
    }, 400)


    return { handleClickRightYT, handleClickLefttYT, imgSlide, loaderImage }
}


const SectionCanalYT = () => {

    const { handleClickRightYT, handleClickLefttYT, imgSlide, loaderImage } = useSlider();



    const imagesYT = [
        "src/assets/berth-img-yt.png",
        "src/assets/berth-img-yt-2.png",
        "src/assets/berth-img-yt-3.png"

    ]







    return (
        <>
            <section className="gradiente-circle-red-yt flex flex-col justify-center items-center gap-16 min-2xl: lg:gap-6 min-h-[660px] lg:min-h-[460px] px-8 pt-40 pb-40
            md:min-h-[760px] md:items-center md:justify-center md:gap-10
            lg:flex-row lg:justify-around">


                <div className=" flex flex-col items-center lg:items-start gap-1.5 relative lg:justify-around lg:w-[40%] " >
                    <div className="flex flex-col items-center lg:items-start">

                        <h1 className="text-2xl pb-2 font-semibold md:text-5xl ">Canal de Youtube</h1>
                        <p className="lg:text-start text-[1rem] lg:w-[48ch] pb-4 text-[var(--color-text-p)] md:w-fit ">Un canal donde subo contendió sobre creación de Sitios web, WordPress y Elementor.</p>
                        <a href="https://www.youtube.com/@berthortiz" target="_blank" rel="noopener noreferrer" className="bg-red-600 pt-1.5 pb-2 px-6 rounded-3xl w-fit"> <span className="text-[1rem]">Ver Videos</span></a>
                    </div>
                </div>


                <div className="gradiente-circle-blue-yt relative w-[80%] h-fit button-after flex flex-col items-center md:w-[75%] lg:w-[50%] ">
                    <button onClick={handleClickLefttYT} className="-left-10 absolute lg:-left-0 top-1/2 -translate-y-1/2  ">
                        <img src="src/assets/Polygon left.svg" alt="" />
                    </button>

                    <a href="https://www.youtube.com/@berthortiz" target="_blank" rel="noopener noreferrer">
                        <img className={`${loaderImage ? "fade-in" : ""} w-full`} src={imagesYT[imgSlide]} alt="Mi canal de YouTube"
                        />
                    </a>

                    <button onClick={handleClickRightYT} className=" absolute -right-10 lg:-right-0 top-1/2 -translate-y-1/2  ">
                        <img src="src\assets\Polygon rigth.svg" alt="" />
                    </button>
                </div>
            </section>


        </>
    )
}


export default SectionCanalYT