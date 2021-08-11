import React from 'react';

const CircleImageCard = ({data}) => {
    const {img,title, desc} = data;
    return (
        <div id="circle-image-card">
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <div className="text">
                <h3 className="title">{title}</h3>
                <p className="desc">{desc} </p>
            </div>
        </div>
    );
};

export default CircleImageCard;