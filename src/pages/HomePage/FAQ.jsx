import React from "react";
import FaqCard from "../../Components/FAQ_card/FAQ_Card";

const FAQ = () => {

    const faqData = [
        {
            question: "미트니스란 무엇인가요?",
            answer:"미트니스란, 미러+피트니스+ME(나)+아름다울 美 를 합친 단어입니다.언제 어디서든 최고의 파트너와 함께 온라인으로 홈트레이닝을 즐기실 수 있습니다."
        },
        {
            question: "미트니스란 무엇인가요?",
            answer:"미트니스란, 미러+피트니스+ME(나)+아름다울 美 를 합친 단어입니다.언제 어디서든 최고의 파트너와 함께 온라인으로 홈트레이닝을 즐기실 수 있습니다."
        },
        {
            question: "미트니스란 무엇인가요?",
            answer:"미트니스란, 미러+피트니스+ME(나)+아름다울 美 를 합친 단어입니다.언제 어디서든 최고의 파트너와 함께 온라인으로 홈트레이닝을 즐기실 수 있습니다."
        },
        {
            question: "미트니스란 무엇인가요?",
            answer:"미트니스란, 미러+피트니스+ME(나)+아름다울 美 를 합친 단어입니다.언제 어디서든 최고의 파트너와 함께 온라인으로 홈트레이닝을 즐기실 수 있습니다."
        },
        {
            question: "미트니스란 무엇인가요?",
            answer:"미트니스란, 미러+피트니스+ME(나)+아름다울 美 를 합친 단어입니다.언제 어디서든 최고의 파트너와 함께 온라인으로 홈트레이닝을 즐기실 수 있습니다."
        },
        {
            question: "미트니스란 무엇인가요?",
            answer:"미트니스란, 미러+피트니스+ME(나)+아름다울 美 를 합친 단어입니다.언제 어디서든 최고의 파트너와 함께 온라인으로 홈트레이닝을 즐기실 수 있습니다."
        },
    ];



    return (
        <>
            <section id="FAQ" className="p-5">
                <div className="title text-center p-5">
                    <h1 className="theme-text fw-bold">FAQs</h1>
                    <p>고객님께서 자주 묻는 질문입니다.</p>
                </div>
                <div className="container">
                    {faqData.map((data) => (
                        <FaqCard data={data} />
                    ))}
                </div>
                <div className="p-4">
                    <div className="text-center"> <span>1</span> <span className="text-secondary">2</span> </div>
                </div>
            </section>
            <section id="under-faq">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
                            <p className="text-light mb-0">지금 바로 미트니스 하세요!</p>
                        </div>
                        <div className="col-md-4 text-center text-md-end">
                            <button className="theme-text px-5 btn bg-light">구매하기</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
