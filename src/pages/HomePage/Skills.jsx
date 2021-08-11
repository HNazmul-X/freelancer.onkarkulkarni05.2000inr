import { data } from "browserslist";
import React from "react";
import ReactSlickCarousel from "../../Components/Carousel/ReactSlickCarousel";
import CircleImageCard from "../../Components/CircleImageCard/CircleImageCard";
import SKILLS_IMG_1 from "../../images/skills-imag- (1).png";
import SKILLS_IMG_2 from "../../images/skills-imag- (2).png";
import SKILLS_IMG_3 from "../../images/skills-imag- (3).png";
import SKILLS_IMG_4 from "../../images/skills-imag- (4).png";

const Skills = () => {
    const skillsData = [
        {
            title: "Hong Gil Dong",
            desc: "필라테스 강사",
            img: SKILLS_IMG_1,
        },
        {
            title: "Hong Gil Dong",
            desc: "필라테스 강사",
            img: SKILLS_IMG_2,
        },
        {
            title: "Hong Gil Dong",
            desc: "필라테스 강사",
            img: SKILLS_IMG_3,
        },
        {
            title: "Hong Gil Dong",
            desc: "필라테스 강사",
            img: SKILLS_IMG_4,
        },
    ];
     const carouselSettings = {
         dots: true,
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
        <section id="Skills">
            <div className="title text-center">
                <h1>
                    실력이 검증된 <br />
                    최고의 트레이너와 함께 하세요!
                </h1>
            </div>
            <div className="container">
                <ReactSlickCarousel settings={carouselSettings}>
                    {skillsData.map((data) => (
                        <CircleImageCard />
                    ))}
                </ReactSlickCarousel>
            </div>
        </section>
    );
};

export default Skills;
