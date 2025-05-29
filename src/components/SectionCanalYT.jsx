

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
            <section className="flex justify-around items-center h-[560px]">

                <div className="gradiente-circle-red-yt flex flex-col justify-center items-start gap-1.5 relative" >
                    <h1 className="text-4xl pb-2 font-semibold "> Canal de Youtube</h1>
                    <p className="text-start pb-4 text-[var(--color-text-p)]">Un canal donde subo contendió sobre creación de Sitios web,<br></br> WordPress y Elementor.</p>
                    <a href="https://www.youtube.com/@berthortiz" target="_blank" rel="noopener noreferrer" className="bg-red-600 pt-1.5 pb-2 px-6 rounded-3xl   ">Ver Videos</a>

                </div>


                <div className="gradiente-circle-blue-yt
                
                
                
                
                
                
                relative h-fit button-after flex flex-col justify-center  ">
                    <button onClick={handleClickLefttYT} className=" absolute -left-14 top-1/2 -translate-y-1/2 ">
                        <img src="src/assets/Polygon left.svg" alt="" />
                    </button>

                    <a href="https://www.youtube.com/@berthortiz" target="_blank" rel="noopener noreferrer">
                        <img className={`${loaderImage ? "fade-in" : ""}`} src={imagesYT[imgSlide]} alt="" />
                    </a>

                    <button onClick={handleClickRightYT} className=" absolute -right-14 top-1/2 -translate-y-1/2 ">
                        <img src="src\assets\Polygon rigth.svg" alt="" />
                    </button>
                </div>
            </section>


        </>
    )
}


export default SectionCanalYT