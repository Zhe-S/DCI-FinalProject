import styles from "./imgApp.module.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img1 from "./Imgs/1.jpg";
import Img2 from "./Imgs/2.jpg";
import Img3 from "./Imgs/3.jpg";
import Img4 from "./Imgs/4.jpg";
import { v4 as uuidv4 } from 'uuid';

function useInterval(callback, interval) {
    useEffect(() => {
        const start = new Date().getTime()
        const I = setInterval(() => {
            callback(new Date().getTime() - start)
        }, interval)
        return () => clearInterval(I)
    }, [])
}

function useSlider(N, speed = 4000) {
    const [slider, setSlider] = useState(0)
    useInterval((diff) => {
        setSlider(_ => Math.floor(diff / speed) % N)
    }, 300)
    return slider
}

/* function usePath(N, speed = 4000) {
    const [slider, setSlider] = useState(0)
    useInterval((diff) => {
        setSlider(_ => Math.floor(diff / speed) % N)
    }, 300)
    return slider
} */


const imgs = [
    {
        img: Img1,
        path: '/recipes'

    },
    {
        img: Img2,
        path: '/nutrition-analysis'

    },
    {
        img: Img3,
        path: '/bmi'

    },
    {
        img: Img4,
        path: '/articles'

    }

];

const ImgApp = () => {
    const slider = useSlider(imgs.length)


    return (
        <div className={styles.scroller}>
            <div
                className={styles.inner}
                style={{
                    width: `${imgs.length * 100}%`,
                    transform: `translateX(-${100 * slider / imgs.length}%)`
                }}>

                {imgs.map((src, index) => {

                    return (



                        <Link to={src.path}

                        >
                            <div className={styles.containerSlider} key={index}>

                                <p className={styles.text}>{src.title}</p>
                                <img
                                    className={styles.img}
                                    style={{
                                        width: `${100 / imgs.length}%`
                                    }}

                                    alt="#"
                                    src={src.img}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}


export default ImgApp