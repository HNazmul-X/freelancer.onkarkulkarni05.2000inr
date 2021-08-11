import React from "react";

const ServicesCard = ({ data }) => {
    const {img, title, desc} = data;
    return (
        <>
            <div className="col services-card mb-3 p-3">
                <div className="card p-0">
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
