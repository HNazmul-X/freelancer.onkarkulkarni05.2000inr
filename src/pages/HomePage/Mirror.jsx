import React from "react";
import ReactSlickCarousel from "../../Components/Carousel/ReactSlickCarousel";
import ImageCard from "../../Components/ImageCard/ImageCard";
import MIRROR_1 from "../../images/Mirror-1.png";
import MIRROR_2 from "../../images/Mirror-2.png";
import MIRROR_3 from "../../images/Mirror-3.png";

const Mirror = () => {
    const imgArray = [MIRROR_1, MIRROR_2, MIRROR_3];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="mirror">
            <div className="title text-center">
                <h1>
                    공간만 있으면 <br /> 어느 곳이든 완벽한 홈 체육관
                </h1>
                <p>거울로도, 인테리어로도, 운동기구로도 충분합니다.</p>

            </div>
                <div className="container">
                    <ReactSlickCarousel settings={settings}>
                        {imgArray.map((img) => (
                            <>
                                <div>
                                    <ImageCard img={img} />
                                </div>
                            </>
                        ))}
                    </ReactSlickCarousel>
                </div>
        </section>
    );
};

export default Mirror;
