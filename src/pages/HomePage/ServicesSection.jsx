import React from "react";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import SERVICE_IMG_1 from "../../images/services (1).png";
import SERVICE_IMG_2 from "../../images/services (2).png";
import SERVICE_IMG_3 from "../../images/services (3).png";
import SERVICE_IMG_4 from "../../images/services (4).png";
import SERVICE_IMG_5 from "../../images/services (5).png";
import SERVICE_IMG_6 from "../../images/services (6).png";

const ServicesSection = () => {
    const servicesData = [
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
        {
            title: "나만의 맞춤 수업",
            desc: "초급부터 고급까지 나만을 위한 맞춤 수업이 준비 되어 있습니다.",
            img: SERVICE_IMG_2,
        },
        {
            title: "1:1 개인 트레이닝",
            desc: "최고의 전문가와 함께하는 라이브 트레이닝으로 운동을 하세요!",
            img: SERVICE_IMG_3,
        },
        {
            title: "친구와 함께 운동",
            desc: "운동친구를 초대하여 실시간으로 즐겁게 운동하세요!",
            img: SERVICE_IMG_4,
        },
        {
            title: "결과 리포트 제공",
            desc: "나의 운동 결과를 한눈에 확인 하세요!",
            img: SERVICE_IMG_5,
        },
        {
            title: "실시간 피드백",
            desc: "업데이트된 영상을 24시간 언제든지 시청하며 운동 하세요!",
            img: SERVICE_IMG_6,
        },
    ];

    return (
        <div id="partner" className="py-5">
            <div className="title  mx-auto text-center p-5">
                <h2 className="fw-bolder">
                    홈트레이닝의 혁명 <br /> 운동 파트너 미트니스
                </h2>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    {servicesData.map((data) => (
                        <>
                            <div className="col p-0">
                                <ServicesCard data={data} />
                            </div>
                        </>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ServicesSection;
