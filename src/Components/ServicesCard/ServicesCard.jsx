import React from "react";

const ServicesCard = ({ img, title, desc }) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    {img && <img src={img} className="card-img-top" alt="..." />}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;
