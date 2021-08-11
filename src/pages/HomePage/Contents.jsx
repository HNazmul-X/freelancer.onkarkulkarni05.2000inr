import React from "react";
import ReactSlickCarousel from "../../Components/Carousel/ReactSlickCarousel";
import CONTENT_IMG_1 from "../../images/Contents-image-1.png"
import CONTENT_IMG_2 from "../../images/Contents-image-2.png"
import CONTENT_IMG_3 from "../../images/Contents-image-3.png"
import CONTENT_IMG_4 from "../../images/Contents-image-4.png"

const Contents = () => {

    const contentsData = [
        {
            title: "Hong Gil Dong",
            desc: "Bessie Cooper",
            img: CONTENT_IMG_1,
        },
        {
            title: "Hong Gil Dong",
            desc: "Bessie Cooper",
            img: CONTENT_IMG_2,
        },
        {
            title: "Hong Gil Dong",
            desc: "Bessie Cooper",
            img: CONTENT_IMG_3,
        },
        {
            title: "Hong Gil Dong",
            desc: "Bessie Cooper",
            img: CONTENT_IMG_4,
        },
        {
            title: "Hong Gil Dong",
            desc: "Bessie Cooper",
            img: CONTENT_IMG_1,
        },
    ];

    const carouselSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <>
        <section id="contents">
            <div className="title text-center">
                <h3 className="fw-bolder">
                    어디서도 볼 수 없는 <br />
                    미트니스만의 콘텐츠
                </h3>
            </div>

            <div className="container">
                <ReactSlickCarousel settings={carouselSettings}>
                        {contentsData.map(content => (
                            <div className="col p-2">
                                <div className="content-card">
                                    <div className="content-card-img">
                                        <img src={content.img} alt="" />
                                    </div>
                                    <div className="content-card-desc">
                                        <h4 className="m-0">{content.title}</h4>
                                        <p>{content.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </ReactSlickCarousel>
            </div>
        </section>

        <section id="practice-image">
            
        </section>
        </>
    );
};

export default Contents;
