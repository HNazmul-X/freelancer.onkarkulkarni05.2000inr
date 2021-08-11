import ReactSlickCarousel from "../../Components/Carousel/ReactSlickCarousel";

export const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
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
        <header id="homepage-header">
            <ReactSlickCarousel settings={settings}>
                {[...new Array(4)].map((item) => (
                    <div className="" id="header">
                        <div className="container">
                            <div className="content">
                                <h1>거울 속 홈 트레이닝</h1>
                                <p>완전 초보자부터 전문가 수준까지 모든 사람을위한 완벽한 운동을 제공합니다</p>
                                <button className="btn btn-outline-light">미트니스 신청하기</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ReactSlickCarousel>
        </header>
    );
};
