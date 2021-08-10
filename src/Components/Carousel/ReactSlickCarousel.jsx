import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ReactSlickCarousel extends Component {
    
    render() {
       

        return (
            <div>
                <Slider {...this.props.settings}>
                   {this.props.children}
                </Slider>
            </div>
        );
    }
}
