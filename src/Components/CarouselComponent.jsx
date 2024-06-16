import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { carouselData } from '../Utils/Utils';
import '../Styles/CarouselComponent.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselComponent = () => {

    const [slidesToShow, setSlidesToShow] = useState(5);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 881) {
                setSlidesToShow(4)
            } else if (window.innerWidth < 501) {
                setSlidesToShow(3)
            } else if (window.innerWidth < 321) {
                setSlidesToShow(2)
            } else {
                setSlidesToShow(5)
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="carouselComponent">
            <Slider {...settings}>

                {
                    carouselData.map((currElem, index) => {
                        return <div className="SlideImg" key={index}>
                            <img src={currElem.img} alt={currElem.img} />
                        </div>
                    })
                }

            </Slider>
        </div>
    )
}

export default CarouselComponent
