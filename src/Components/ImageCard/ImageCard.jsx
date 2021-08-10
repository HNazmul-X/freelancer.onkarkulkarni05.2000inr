import React from 'react';

const ImageCard = ({padding,img}) => {
    return (
        <div id="image-card" style={{padding:`${padding}`}}>
            <img src={img} alt="" className="img-fluid" />
        </div>
    );
};

export default ImageCard;