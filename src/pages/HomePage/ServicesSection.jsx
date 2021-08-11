import React from "react";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import SERVICE_IMG_1 from "../../images/services (1).png";

const ServicesSection = () => {
    const servicesData = [
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
        {
            title: "모든 유형의 운동",
            desc: "필라테스, 리듬핏, 근력운동 등계속 되는 운동 업데이트가 진행 됩니다!!",
            img: SERVICE_IMG_1,
        },
    ];

    return (
        <div id="services" className="py-5">
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
