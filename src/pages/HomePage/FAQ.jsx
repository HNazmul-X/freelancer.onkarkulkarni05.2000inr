import React from "react";
import FaqCard from "../../Components/FAQ_card/FAQ_Card";

const FAQ = () => {
    return (
        <section id="FAQ" className="p-5">
            <div className="title text-center p-5">
                <h1 className="theme-text fw-bold">FAQs</h1>
                <p>고객님께서 자주 묻는 질문입니다.</p>
            </div>
            <div className="container">
                <FaqCard  />
                <FaqCard  />
                <FaqCard  />
            </div>
        </section>
    );
};

export default FAQ;
