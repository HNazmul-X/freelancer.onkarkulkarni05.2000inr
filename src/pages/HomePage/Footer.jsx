import React from "react";
import FOOTER_GELLERY_IMG_1 from "../../images/footer-gellery-image-1.png";
import FOOTER_GELLERY_IMG_2 from "../../images/footer-gellery-image-2.png";
import FOOTER_GELLERY_IMG_3 from "../../images/footer-gellery-image-3.png";
import FOOTER_GELLERY_IMG_4 from "../../images/footer-gellery-image-4.png";
import FOOTER_GELLERY_IMG_5 from "../../images/footer-gellery-image-5.png";
import FOOTER_GELLERY_IMG_6 from "../../images/footer-gellery-image-6.png";

const Footer = () => {
    const footerGelleryImages = [FOOTER_GELLERY_IMG_1, FOOTER_GELLERY_IMG_2, FOOTER_GELLERY_IMG_3, FOOTER_GELLERY_IMG_4, FOOTER_GELLERY_IMG_5, FOOTER_GELLERY_IMG_6];

    return (
        <>
            <footer id="footer">
                <div className="title text-center">
                    <h1 className="mb-0">Contact us</h1>
                    <p>이름과 연락처를 남겨주시면 연락드리겠습니다!</p>
                </div>
                <div className="container">
                    <div className="footer-content">
                        <div className="form">
                            <input type="text" placeholder="이름" className="form-control rounded-0 mb-4" />
                            <input type="text" placeholder="이메일 또는 전화번호" className="form-control rounded-0 mb-4" />
                            <input type="submit" value="문의하기" className="w-100 btn btn-outline-light rounded-0" />
                        </div>
                    </div>
                </div>
            </footer>

            <section id="footer-gellery">
                <div className="images-container">
                    {footerGelleryImages.map((img) => (
                        <div className="image-wrapper">
                            <img src={img} className="w-100" alt="" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Footer;
