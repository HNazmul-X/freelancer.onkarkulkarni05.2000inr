import React from "react";
import ReactSlickCarousel from "../../Components/Carousel/ReactSlickCarousel";
import FITNESS_IMG_1 from "../../images/fitness-image-1.png";
import FITNESS_IMG_2 from "../../images/fitness-image-2.png";
import FITNESS_IMG_3 from "../../images/fitness-image-3.png";
import ImageCard from "../../Components/ImageCard/ImageCard";

const Fitness = () => {
    const carouselSetting = {
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
    const imageArry = [FITNESS_IMG_1, FITNESS_IMG_2, FITNESS_IMG_3];

    return (
        <section id="fitness">
            <div className="title">
                <h1>지금 바로 미트니스 하세요!</h1>
                <p>
                    미러+피트니스+ME(나)+아름다울 美 <br />
                    미트니스를 통해 나를 보며 아름다움을 찾으세요!!
                </p>
            </div>

            <div className="fitness-gallery-slider">
                <div className="container">
                    <ReactSlickCarousel settings={carouselSetting}>
                        {imageArry.map((image) => (
                            <>
                                <div>
                                    <ImageCard img={image} />
                                </div>
                            </>
                        ))}
                    </ReactSlickCarousel>
                </div>

                <div className="bottom-text">
                    <p>
                        미트니스를 통해 집에서 오프라인 매장에서 느껴봤던 실시간 PT를 경험할 수 있습니다. <br />
                        계속 업데이트 되는 새롭고 많은 운동을 <span className="theme-text fst-italic mx-2">“홈 트레이닝”</span> 으로 느껴 보세요!!
                    </p>
                    <button className="theme-btn p-2 px-5 btn text-light">지금 구매하기</button>
                </div>
            </div>
        </section>
    );
};

export default Fitness;
