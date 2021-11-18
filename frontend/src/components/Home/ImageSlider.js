import React, {useState} from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import styles from "./Home.module.scss"

const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current +1 )
}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1: current -1 )
}
console.log(prevSlide)

if (!Array.isArray(slides) || slides.length <=0) {
    return null
}


    return (
        <section className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
            <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide}/>
        {SliderData.map((slide, index) => {
            return (
                <div 
                className={index === current ? styles.slideActive : styles.slide} 
                key={index}
                >
                    {index === current && (

                        <img src = {slide.image} alt ='travel' className= {styles.image}/>
                    )}
                </div>
            );
        })}
        </section>
    )
};

export default ImageSlider