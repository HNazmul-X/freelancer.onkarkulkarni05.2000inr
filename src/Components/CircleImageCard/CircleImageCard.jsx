import React from 'react';

const CircleImageCard = () => {
    return (
        <div id="circle-image-card">
            <div className="card-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_tfj_GXhUtNYk-0fuXAQztl0y77foWIZlesN6IeiZKH_4N35wvzz6-7eKL_Jbj4sJyM&usqp=CAU" alt="" />
            </div>
            <div className="text">
                <h3 className="title">Hong Gil Dong</h3>
                <p className="desc">필라테스 강사</p>
            </div>
        </div>
    );
};

export default CircleImageCard;