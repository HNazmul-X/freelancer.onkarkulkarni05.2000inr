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

    const sliderCard = () => {
        return (
            <div className="row align-items-center">
                <div className="col-md-7 mb-4 mb-md-0">
                    <div className=" text-center text-md-start wrapper">
                        <h1 className="title">거울 속 홈 트레이닝</h1>
                        <p className="under-title">완전 초보자부터 전문가 수준까지 모든 사람을위한 완벽한 운동을 제공합니다</p>
                        <button className="btn btn-outline-light">미트니스 신청하기</button>
                    </div>
                </div>

                <div className="col-md-5">{PilatesCard()}</div>
            </div>
        );
    };
    const PilatesCard = () => {
        return (
            <div className="pilates-card text-center p-2 p-md-3 p-lg-4">
                <h5 className="mt-2 theme-seconday text event">EVENT</h5>
                <h1 className="">1:1 PILATES</h1>
                <h3 className="mb-5">100일 챌린지</h3>
                <h6>2021.05.01(토) ~ 2021.08.08(일)</h6>
                <p className="m-0 small fw-light">2021.04.30(목) 23시 59분까지 예약 접수 완료 시</p>
                <button className="btn theme-gd-btn text-light mt-4 w-75">자세히 보기</button>
                <div className="bottom-bar">
                    <p className="m-0 d-inline-block">오늘 하루 열지 않음</p>
                    <input type="checkbox" name="" className="" id="" />
                </div>
            </div>
        );
    };

    return (
        <header id="header" className="home-page-header">
            <div className="container">
                <ReactSlickCarousel settings={settings}>
                    {[...new Array(4)].map((item, index) => {
                        return <div>{sliderCard()}</div>;
                    })}
                </ReactSlickCarousel>
            </div>
        </header>
    );
};
